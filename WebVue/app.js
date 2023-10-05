var app = new Vue({
    el: '#app',
    data: {
        products: [
            { name: 'Lawar', price: 5, description: 'a mixture of vegetables, Balinese spices, coconut, shrimp paste and minced meat.' },
            { name: 'Siobak', price: 2, description: 'an acculturation dish of Balinese and Chinese cuisine, a mixture of various parts of pork meat and organs, pickles, pork skin crackers, with thick taucho sauce' },
            { name: 'Loloh Cem-Cem', price: 1, description: 'Loloh cemcem adalah minuman khas Desa Penglipuran Bali yang berasal dari daun sejenis kedondong hutan yang tumbuh liar di sekitar desa' }
        ],
        newProduct: {
            name: '',
            price: '',
        },
        editingIndex: -1
    },
    methods: {
        addProduct: function () {
            if (this.editingIndex === -1) {
                // Add a new product
                this.products.push({ ...this.newProduct });
            } else {
                // Edit an existing product
                this.products[this.editingIndex] = { ...this.newProduct };
                this.editingIndex = -1; // Reset the editingIndex
            }
            
            // Clear the form
            this.newProduct.name = '';
            this.newProduct.price = '';
            this.newProduct.description = '';
        },
        editProduct: function (index) {
            // Populate the form with the product data for editing
            this.newProduct = { ...this.products[index] };
            this.editingIndex = index;
        },
        deleteProduct: function (index) {
            // Remove the product from the list
            this.products.splice(index, 1);
        }
    }
});