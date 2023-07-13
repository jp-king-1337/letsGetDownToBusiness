const { Product } = require("../models");

const productData = [
    {
        product_name: "Plain T-Shirt",
        price: 14.99,
        stock: 14,
        category_id: 1,
    },
    {
        product_name: "Running Sneakers",
        price: 90.0,
        stock: 25,
        category_id: 5,
    },
    {
        product_name: "Branded Baseball Hat",
        price: 22.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: "Top 40 Music Compilation Vinyl Record",
        price: 12.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: "Cargo Shorts",
        price: 29.99,
        stock: 22,
        category_id: 2,
    },
    //   Copied the one below from product-routes lines 41-46. I think that's what we're meant to do? Will fix later if I think this is wrong.
    {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
