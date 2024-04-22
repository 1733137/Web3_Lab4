const express = require('express');
const bodyParser = require('body-parser'); // Middleware pour le Json
const data = require('./db.json');
const { openDB } = require('idb'); 

const app = express();


app.use(bodyParser.json());

// Function pour IndexedDB
async function updateIndexedDB(data) {
  try {
    const db = await openDB('db.json', 1, {
      upgrade(db) {
        db.createObjectStore('blogs', { keyPath: 'id' });
      },
    });
    const tx = db.transaction('blogs', 'readwrite');
    const store = tx.objectStore('blogs');
    await store.clear(); //Efface les anciennes donné
    await Promise.all(data.map(pub => store.put(pub))); //Insert les nouvelles données
    await tx.done;
    console.log('Data updated in IndexedDB');
  } catch (error) {
    console.error('Error updating IndexedDB:', error);
  }
}

// Route handler (GET)
app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;
  const publication = data.blogs.find(pub => pub.id === id);

  if (!publication) {
    return res.status(404).json({ error: 'Blogs not found' });
  }

  res.json(publication);
});

// Route handler  (POST)
app.post('/blogs', (req, res) => {
  const newPublication = req.body;
  newPublication.id = (data.blogs.length + 1).toString(); // Générer un new ID
  data.blogs.push(newPublication);
  res.status(201).json(newPublication);
});

// Route handler (PUT)
app.put('/blogs/:id', (req, res) => {
  const { id } = req.params;
  let publicationIndex = -1;

  for (let i = 0; i < data.blogs.length; i++) {
    if (data.blogs[i].id === id) {
      publicationIndex = i;
      break;
    }
  }

  if (publicationIndex === -1) {
    return res.status(404).json({ error: 'Blogs not found' });
  }

  data.blogs[publicationIndex] = req.body;
  data.blogs[publicationIndex].id = id; // pas modifier le id
  res.json(data.blogs[publicationIndex]);
});

// Route handler (DELETE)
app.delete('/blogs/:id', (req, res) => {
  const { id } = req.params;
  const index = data.blogs.findIndex(pub => pub.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Blogs not found' });
  }

  const deletedPublication = data.blogs.splice(index, 1);
  res.json(deletedPublication);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});