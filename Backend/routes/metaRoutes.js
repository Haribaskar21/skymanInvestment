// routes/meta.js
const express = require('express');
const router = express.Router();

// Shared in-memory storage
const metaStore = {
  categories: [
    { _id: 'cat1', name: 'Technology' },
    { _id: 'cat2', name: 'Politics' },
  ],
  tags: [
    { _id: 'tag1', name: 'Breaking' },
    { _id: 'tag2', name: 'Opinion' },
  ],
};

// GET all
router.get('/:metaType', (req, res) => {
  const { metaType } = req.params;
  if (!['categories', 'tags'].includes(metaType)) {
    return res.status(400).json({ error: 'Invalid metaType' });
  }
  res.json(metaStore[metaType]);
});

// POST create
router.post('/:metaType', (req, res) => {
  const { metaType } = req.params;
  const { name } = req.body;
  if (!name || !['categories', 'tags'].includes(metaType)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const newItem = { _id: `id${Date.now()}`, name };
  metaStore[metaType].push(newItem);
  res.status(201).json(newItem);
});

// PUT update
router.put('/:metaType/:id', (req, res) => {
  const { metaType, id } = req.params;
  const { name } = req.body;

  const list = metaStore[metaType];
  const idx = list.findIndex(i => i._id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });

  list[idx].name = name;
  res.json(list[idx]);
});

// DELETE
router.delete('/:metaType/:id', (req, res) => {
  const { metaType, id } = req.params;
  metaStore[metaType] = metaStore[metaType].filter(i => i._id !== id);
  res.status(204).send();
});

module.exports = router;
