const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product");

//ADD NEW PRODUCT - admin only
router.post("/", verifyTokenAndAdmin, async (req,res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        return res.status(200).json(savedProduct);
    } catch(err) {
        return res.status(500).json(err);
    }
})

//UPDATE PRODUCT INFO - admin only
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new:true }
        );
        return res.status(200).json(updatedProduct);
    } catch(err) {
        return res.status(500).json(err);
    }
})

//DELETE PRODUCT - admin only
router.delete("/:id", verifyTokenAndAdmin, async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return  req.status(200).json("Product has been deleted.");
    } catch(err) {
        return res.status(500).json(err);
    }
})

//GET INFO ABOUT PRODUCT - all users so no token required
router.get("/find/:id", async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);
    } catch(err) {
        return res.status(500).json(err);
    }
})

//GET ALL PRODUCTS - all users so no token required
router.get("/", async (req,res) => {
    const query = req.query.new;
    try {
        //query with added path /?new=true to show only 5 newest users
        const users = query ? await Product.find().sort({_id:-1}).limit(5) : await Product.find();
        return res.status(200).json(users);
    } catch(err) {
        return res.status(500).json(err);
    }
})

module.exports = router;