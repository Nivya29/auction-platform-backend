const express = require('express');
const router = express.Router();
const { createCategory } = require('../Controller/CategoriesController');

// Category routes
router.post('/', createCategory);

module.exports = router;
