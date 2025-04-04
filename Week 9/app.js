angular.module('shoppingApp', [])
.controller('MainController', function($scope) {
    // Sample product data
    $scope.products = [
        {
            id: 1,
            name: 'Smartphone',
            description: 'Latest smartphone with great features',
            price: 599.99,
            image: 'https://via.placeholder.com/300x200?text=Smartphone'
        },
        {
            id: 2,
            name: 'Laptop',
            description: 'Powerful laptop for work and play',
            price: 999.99,
            image: 'https://via.placeholder.com/300x200?text=Laptop'
        },
        {
            id: 3,
            name: 'Headphones',
            description: 'Noise-cancelling wireless headphones',
            price: 199.99,
            image: 'https://via.placeholder.com/300x200?text=Headphones'
        },
        {
            id: 4,
            name: 'Smart Watch',
            description: 'Track your fitness with this smart watch',
            price: 249.99,
            image: 'https://via.placeholder.com/300x200?text=Smart+Watch'
        },
        {
            id: 5,
            name: 'Tablet',
            description: 'Portable tablet for entertainment',
            price: 349.99,
            image: 'https://via.placeholder.com/300x200?text=Tablet'
        },
        {
            id: 6,
            name: 'Camera',
            description: 'Professional DSLR camera',
            price: 799.99,
            image: 'https://via.placeholder.com/300x200?text=Camera'
        }
    ];
    
    // Initialize cart
    $scope.cart = [];
    
    // Initialize order object
    $scope.order = {
        name: '',
        email: '',
        address: ''
    };
    
    // Add product to cart
    $scope.addToCart = function(product) {
        var found = false;
        
        // Check if product already in cart
        $scope.cart.forEach(function(item) {
            if (item.id === product.id) {
                item.quantity++;
                found = true;
            }
        });
        
        // If not found, add to cart with quantity 1
        if (!found) {
            var item = angular.copy(product);
            item.quantity = 1;
            $scope.cart.push(item);
        }
    };
    
    // Remove item from cart
    $scope.removeFromCart = function(productId) {
        $scope.cart = $scope.cart.filter(function(item) {
            return item.id !== productId;
        });
    };
    
    // Calculate cart total
    $scope.getCartTotal = function() {
        var total = 0;
        $scope.cart.forEach(function(item) {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };
    
    // Open checkout modal
    $scope.checkout = function() {
        $('#checkoutModal').modal('show');
    };
    
    // Place order
    $scope.placeOrder = function() {
        // In a real app, you would send this data to your backend
        alert('Order placed successfully! Thank you for your purchase.');
        
        // Reset cart and order form
        $scope.cart = [];
        $scope.order = {
            name: '',
            email: '',
            address: ''
        };
        
        // Close modal
        $('#checkoutModal').modal('hide');
    };
});