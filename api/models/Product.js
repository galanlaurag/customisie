const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, default: "Handmade crochet teddy bear", unique: false},
        desc: {type: String, default: "Some description"},
        img: {type: String, required: true},
        categories: {type: Array},
        size: {type: Array},
        //colour & inStock added later - not sure if will be working
        color: {type: Array},
        price: {type: Number, default: 99},
        inStock: {type: Boolean, default: true}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);