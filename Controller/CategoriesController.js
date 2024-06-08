const Category = require('../Models/Categories');

const createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await Category.create({
      name,
      description,
    });

    res.status(201).json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createCategory };
