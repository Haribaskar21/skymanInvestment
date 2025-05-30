// server/routes/newsMeta.js
const express = require('express');
const router = express.Router();

// Dummy categories
const categories = [
  { _id: 'cat1', name: 'World' },
  { _id: 'cat2', name: 'Technology' },
  { _id: 'cat3', name: 'Sports' },
];

// Dummy tags
const tags = [
  { _id: 'tag1', name: 'Breaking' },
  { _id: 'tag2', name: 'Opinion' },
  { _id: 'tag3', name: 'Interview' },
];

// GET categories
router.get('/news-categories', (req, res) => {
  res.json(categories);
});

// GET tags
router.get('/news-tags', (req, res) => {
  res.json(tags);
});
router.get('/blogs-categories', (req, res) => {
  res.json(categories);
});

// GET tags
router.get('/blogs-tags', (req, res) => {
  res.json(tags);
});

module.exports = router;
