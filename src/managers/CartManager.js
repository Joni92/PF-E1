const fs = require('fs');

class CartManager {
    constructor () {
        this.carts = [];
        this.latestId = 1;
        this.path = 'src/files/cartsList.json';
    }


    // addCart (id) {
    //     if ( this.cart.length === 0 ) {
    //         console.log("Error: Tu carrito esta vacio.");
    //         return; 
    //     };

    //     const found = this.cart.some(cart => cart.code === code);

    //     if (found) {
        
    //     console.log(`Error: Ya existe un un carrito con el código ${code}`); 
    //     return; 
    //     };

    //     const newCart = { 
    //         id: ++ this.latestId
    //     };

    //     this.cart.push (newCart);
    //     console.log("Carrito agregado existosamente.");
    //     fs.writeFile(this.path, JSON.stringify(this.cart), (err) => {
    //         if (err) throw err;
    //         console.log('Carrito guardado con éxito');
    //     });
        
    // }
 
    async getCarts() {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            if (data) {
                const carts = JSON.parse(data);
                console.log(carts);
                return carts;  
            } else {
                console.log("No existe lista de carritos.");
                return null; 
            }
        } catch (error) {
            console.log(error);
            return null;  
        }
    }

    // async getCartById(cartId) {
    //     const data = await fs.promises.readFile(this.path, 'utf-8'); 
    //     const cartsById = JSON.parse(data);
    //     const cart = cartsById.find(cart => cart.id === cartId);
    //     if (cart) {
    //         console.log(cart);
    //         return product;
    //     } else {
    //         console.log("Error: carrito no encontrado");
    //     }
    // } 

    // async updateCart (cartId, field, updateData) {
    //     const data = await fs.promises.readFile(this.path, 'utf-8');
    //     const carts = JSON.parse(data);
        
    //     const index = carts.findIndex(cart => cart.id === cartId);
    //     if (index === -1) {
    //         console.log('Error: Carrito no encontrado');
    //         return;
    //     };
    //     carts[index][field] = updateData;

    //     fs.writeFile(this.path, JSON.stringify(carts), err => {
    //         if (err) throw err;
    //         console.log('Carrito actualizado con éxito!');
    //     });
    // }

    // async deleteCart (deleteById){
    //     const data = await fs.promises.readFile(this.path, 'utf-8');
    //     const carts = JSON.parse(data);

    //     const deleteCartFilter = carts.filter(cart => cart.id !== deleteById);

    //     if (deleteCartFilter.length === cart.length) {
    //         console.log('Error: No se encontró el carrito con ID ${deleteById}');
    //         return;
    //     };

    //     fs.writeFile(this.path, JSON.stringify(deleteCartFilter), err => {
    //         if (err) throw err;
    //         console.log('Cart borrado con éxito!.');
    //     });
        
    // } 

}

module.exports = CartManager;