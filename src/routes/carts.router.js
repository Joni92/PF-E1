const { Router } = require('express');
const CartManager = require('../managers/cartsManager.js')
const { v4 : uuidv4 } = require('uuid'); 

const router = Router()
const manager = new CartManager();
const getCarts = manager.getCarts();


router.get('/carts', (req, res) => {
    const newCart = {
        id: uuidv4(),
        products:[],
    };
    carts.push(newCart);
    res.status(201).json(newCart);
});

router.get('/api/carts/:cid', (req, res)=> { 
});

router.post('/api/carts/:cid/products/:pid', (req, res)=> {
    const body = req.body;
}); 

module.exports = router;