const slugify = require("slugify");
const Category = require("../models/category");

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (let cat of category) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      children: createCategories(categories, cat._id),
    });
  }
  return categoryList;
}
exports.addCategory = async (req, res) => {
  //------
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.file) {
    categoryObj.categoryImage =
      process.env.APP_API + "/public/" + req.file.filename;
  }

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  try {
    const cat = new Category(categoryObj);
    const category = await cat.save();
    return res.status(201).json({ category });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (categories) {
      const categoryList = await createCategories(categories);

      return res.status(200).json({ categoryList });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
