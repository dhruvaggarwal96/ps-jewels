/**
 * PS Jewellers Interactive E-commerce Application
 * React-like experience with advanced animations and sales psychology
 */

class PSJewellersApp {
    constructor() {
        this.state = {
            products: [],
            testimonials: [],
            cart: [],
            wishlist: [],
            filters: {
                category: '',
                priceMin: 0,
                priceMax: 20000,
                sortBy: 'featured'
            },
            searchQuery: '',
            currentView: 'grid',
            isLoading: false,
            visibleProducts: 6,
            liveStats: {
                visitors: 23,
                ordersToday: 47
            },
            currentImageIndex: {},
            selectedRating: 0
        };

        this.components = {};
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.startAnimations();
        this.startSalesTimers();
        this.renderProducts();
        this.renderReviews();
        this.hideLoadingScreen();
    }

    // Data Management
    loadData() {
        this.state.products = [
            {
                id: 1,
                name: "925 Silver Elegant Necklace",
                regular_price: 2999,
                sale_price: 1899,
                description: "Handcrafted 925 silver necklace with premium finish and intricate detailing",
                rating: 4.8,
                reviews: 124,
                stock: 7,
                category: "Necklaces",
                badge: "Best Seller",
                images: [
                    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop"
                ],
                weight: "15g",
                material: "925 Sterling Silver",
                care: "Clean with soft cloth, avoid chemicals"
            },
            {
                id: 2,
                name: "925 Silver Designer Earrings",
                regular_price: 1799,
                sale_price: 1299,
                description: "Contemporary design with traditional craftsmanship, perfect for special occasions",
                rating: 4.9,
                reviews: 89,
                stock: 12,
                category: "Earrings",
                badge: "New",
                images: [
                    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1588444962765-275886b7bc90?w=400&h=400&fit=crop"
                ],
                weight: "8g",
                material: "925 Sterling Silver",
                care: "Store in dry place, clean gently"
            },
            {
                id: 3,
                name: "925 Silver 3D Ganesha Idol",
                regular_price: 15999,
                sale_price: 11999,
                description: "Intricately crafted 3D Ganesha idol in pure 925 silver, blessed by temple priests",
                rating: 5.0,
                reviews: 67,
                stock: 3,
                category: "God Idols",
                badge: "Limited Edition",
                images: [
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop"
                ],
                weight: "150g",
                material: "925 Sterling Silver",
                care: "Dust with soft brush, avoid moisture"
            },
            {
                id: 4,
                name: "925 Silver Shiva Trishul",
                regular_price: 9299,
                sale_price: 6599,
                description: "Sacred Trishul with Damru in premium 925 silver, spiritually energized",
                rating: 4.7,
                reviews: 45,
                stock: 5,
                category: "God Idols",
                badge: "Sale",
                images: [
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop"
                ],
                weight: "75g",
                material: "925 Sterling Silver",
                care: "Clean with soft cloth monthly"
            },
            {
                id: 5,
                name: "925 Silver Kids Jhumkas",
                regular_price: 1999,
                sale_price: 1299,
                description: "Safe and beautiful jhumkas for children, hypoallergenic design",
                rating: 4.6,
                reviews: 78,
                stock: 15,
                category: "Kids Jewelry",
                badge: "Popular",
                images: [
                    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1588444962765-275886b7bc90?w=400&h=400&fit=crop"
                ],
                weight: "3g",
                material: "925 Sterling Silver",
                care: "Gentle cleaning only"
            },
            {
                id: 6,
                name: "925 Silver Royal Bracelet",
                regular_price: 3499,
                sale_price: 2299,
                description: "Elegant royal design bracelet with intricate patterns and premium finish",
                rating: 4.8,
                reviews: 92,
                stock: 8,
                category: "Bracelets",
                badge: "Premium",
                images: [
                    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop"
                ],
                weight: "25g",
                material: "925 Sterling Silver",
                care: "Polish monthly with silver cloth"
            }
        ];

        this.state.testimonials = [
            {
                id: 1,
                name: "Priya Sharma",
                rating: 5,
                review: "Beautiful quality jewelry with authentic 925 silver. The craftsmanship is exceptional and delivery was super fast!",
                location: "Mumbai",
                date: "2024-09-15",
                verified: true,
                image: "https://images.unsplash.com/photo-1494790108755-2616b332?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 2,
                name: "Rajesh Kumar",
                rating: 5,
                review: "Excellent craftsmanship on the Ganesha idol. Perfect for my home temple. Highly recommend PS Jewellers!",
                location: "Delhi",
                date: "2024-09-12",
                verified: true,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 3,
                name: "Anjali Patel",
                rating: 4,
                review: "Great customer service and fast delivery. The earrings are stunning and exactly as shown on the website!",
                location: "Ahmedabad",
                date: "2024-09-10",
                verified: true,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            }
        ];
    }

    setupEventListeners() {
        // Header interactions
        this.setupHeaderEvents();
        
        // Search functionality
        this.setupSearchEvents();
        
        // Filter events
        this.setupFilterEvents();
        
        // Modal events
        this.setupModalEvents();
        
        // Cart events
        this.setupCartEvents();
        
        // Wishlist events
        this.setupWishlistEvents();
        
        // Review events
        this.setupReviewEvents();
        
        // Scroll events
        this.setupScrollEvents();
        
        // Mobile menu
        this.setupMobileMenu();
    }

    setupHeaderEvents() {
        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const headerNav = document.getElementById('headerNav');
        
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                headerNav.classList.toggle('active');
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                headerNav.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    setupSearchEvents() {
        const searchInput = document.getElementById('searchInput');
        const searchSuggestions = document.getElementById('searchSuggestions');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.state.searchQuery = e.target.value.toLowerCase();
                this.renderProducts();
                this.showSearchSuggestions(e.target.value);
            });
            
            searchInput.addEventListener('focus', () => {
                if (this.state.searchQuery) {
                    this.showSearchSuggestions(this.state.searchQuery);
                }
            });
            
            searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    if (searchSuggestions) {
                        searchSuggestions.style.display = 'none';
                    }
                }, 200);
            });
        }
    }

    showSearchSuggestions(query) {
        const searchSuggestions = document.getElementById('searchSuggestions');
        if (!searchSuggestions || !query) {
            if (searchSuggestions) searchSuggestions.style.display = 'none';
            return;
        }

        const suggestions = this.state.products
            .filter(product => product.name.toLowerCase().includes(query))
            .slice(0, 5);

        if (suggestions.length > 0) {
            searchSuggestions.innerHTML = suggestions
                .map(product => `
                    <div class="search-suggestion" onclick="app.selectProduct(${product.id})">
                        ${product.name}
                    </div>
                `).join('');
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    }

    setupFilterEvents() {
        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.state.filters.category = e.target.value;
                this.renderProducts();
            });
        }

        // Price range filters
        const priceMin = document.getElementById('priceMin');
        const priceMax = document.getElementById('priceMax');
        const priceMinDisplay = document.getElementById('priceMinDisplay');
        const priceMaxDisplay = document.getElementById('priceMaxDisplay');

        if (priceMin && priceMax) {
            priceMin.addEventListener('input', (e) => {
                this.state.filters.priceMin = parseInt(e.target.value);
                if (priceMinDisplay) {
                    priceMinDisplay.textContent = this.formatPrice(e.target.value);
                }
                this.renderProducts();
            });

            priceMax.addEventListener('input', (e) => {
                this.state.filters.priceMax = parseInt(e.target.value);
                if (priceMaxDisplay) {
                    priceMaxDisplay.textContent = this.formatPrice(e.target.value);
                }
                this.renderProducts();
            });
        }

        // Sort filter
        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.state.filters.sortBy = e.target.value;
                this.renderProducts();
            });
        }

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.state.visibleProducts += 6;
                this.renderProducts();
            });
        }
    }

    setupModalEvents() {
        // Product modal events
        const productModal = document.getElementById('productModal');
        const closeProductModal = document.getElementById('closeProductModal');
        
        if (closeProductModal) {
            closeProductModal.addEventListener('click', () => {
                this.closeModal('productModal');
            });
        }

        // Cart modal events
        const cartBtn = document.getElementById('cartBtn');
        const cartModal = document.getElementById('cartModal');
        const closeCartModal = document.getElementById('closeCartModal');

        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.openModal('cartModal');
                this.renderCart();
            });
        }

        if (closeCartModal) {
            closeCartModal.addEventListener('click', () => {
                this.closeModal('cartModal');
            });
        }

        // Wishlist modal events
        const wishlistBtn = document.getElementById('wishlistBtn');
        const wishlistModal = document.getElementById('wishlistModal');
        const closeWishlistModal = document.getElementById('closeWishlistModal');

        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', () => {
                this.openModal('wishlistModal');
                this.renderWishlist();
            });
        }

        if (closeWishlistModal) {
            closeWishlistModal.addEventListener('click', () => {
                this.closeModal('wishlistModal');
            });
        }

        // Review modal events
        const writeReviewBtn = document.getElementById('writeReviewBtn');
        const reviewModal = document.getElementById('reviewModal');
        const closeReviewModal = document.getElementById('closeReviewModal');
        const reviewForm = document.getElementById('reviewForm');

        if (writeReviewBtn) {
            writeReviewBtn.addEventListener('click', () => {
                this.openModal('reviewModal');
                this.populateReviewProducts();
            });
        }

        if (closeReviewModal) {
            closeReviewModal.addEventListener('click', () => {
                this.closeModal('reviewModal');
            });
        }

        if (reviewForm) {
            reviewForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitReview();
            });
        }

        // Close modals on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });

        // Rating input events
        this.setupRatingInput();
    }

    setupRatingInput() {
        const ratingInput = document.getElementById('ratingInput');
        if (ratingInput) {
            const stars = ratingInput.querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.addEventListener('click', () => {
                    this.state.selectedRating = index + 1;
                    this.updateRatingDisplay();
                });

                star.addEventListener('mouseenter', () => {
                    this.highlightStars(index + 1);
                });
            });

            ratingInput.addEventListener('mouseleave', () => {
                this.highlightStars(this.state.selectedRating);
            });
        }
    }

    highlightStars(rating) {
        const stars = document.querySelectorAll('#ratingInput .star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    updateRatingDisplay() {
        this.highlightStars(this.state.selectedRating);
    }

    setupCartEvents() {
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.proceedToCheckout();
            });
        }
    }

    setupWishlistEvents() {
        // Wishlist events are handled in product card events
    }

    setupReviewEvents() {
        // Review events are handled in setupModalEvents
    }

    setupScrollEvents() {
        const backToTop = document.getElementById('backToTop');
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            // Header scroll effect
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Back to top button
            if (scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }

            // Update active nav link
            this.updateActiveNavLink();
        });

        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    setupMobileMenu() {
        // Mobile menu events are handled in setupHeaderEvents
    }

    updateActiveNavLink() {
        const sections = ['home', 'collections', 'products', 'reviews', 'contact'];
        const navLinks = document.querySelectorAll('.nav__link');

        let currentSection = '';
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section;
                    break;
                }
            }
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Product Management
    getFilteredProducts() {
        let filtered = this.state.products;

        // Apply search filter
        if (this.state.searchQuery) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(this.state.searchQuery) ||
                product.category.toLowerCase().includes(this.state.searchQuery)
            );
        }

        // Apply category filter
        if (this.state.filters.category) {
            filtered = filtered.filter(product => 
                product.category === this.state.filters.category
            );
        }

        // Apply price filter
        filtered = filtered.filter(product => 
            product.sale_price >= this.state.filters.priceMin &&
            product.sale_price <= this.state.filters.priceMax
        );

        // Apply sorting
        switch (this.state.filters.sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.sale_price - b.sale_price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.sale_price - a.sale_price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filtered.sort((a, b) => b.id - a.id);
                break;
            default:
                // Keep original order for featured
                break;
        }

        return filtered;
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        const filtered = this.getFilteredProducts();
        const visible = filtered.slice(0, this.state.visibleProducts);

        productsGrid.innerHTML = visible.map(product => this.createProductCard(product)).join('');

        // Update load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = visible.length < filtered.length ? 'block' : 'none';
        }

        // Add event listeners to product cards
        this.attachProductEventListeners();
    }

    createProductCard(product) {
        const discountPercent = Math.round(((product.regular_price - product.sale_price) / product.regular_price) * 100);
        const isLowStock = product.stock <= 5;

        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image" onclick="app.openProductModal(${product.id})">
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<div class="product-badge badge-${product.badge.toLowerCase().replace(' ', '')}">${product.badge}</div>` : ''}
                    <div class="product-actions">
                        <button class="action-btn wishlist-toggle" onclick="app.toggleWishlist(${product.id})">
                            ${this.isInWishlist(product.id) ? '❤️' : '🤍'}
                        </button>
                        <button class="action-btn quick-view" onclick="app.openProductModal(${product.id})">
                            👁️
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name" onclick="app.openProductModal(${product.id})">${product.name}</h3>
                    <div class="product-rating">
                        <div class="stars">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="product-prices">
                        <span class="sale-price">₹${this.formatPrice(product.sale_price)}</span>
                        <span class="regular-price">₹${this.formatPrice(product.regular_price)}</span>
                        <span class="discount-percent">${discountPercent}% OFF</span>
                    </div>
                    <div class="stock-info">
                        <span class="stock-count ${isLowStock ? 'low-stock' : ''}">
                            ${isLowStock ? `Only ${product.stock} left!` : `${product.stock} in stock`}
                        </span>
                    </div>
                    <div class="product-card-actions">
                        <button class="add-to-cart-btn" onclick="app.addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="quick-view-btn" onclick="app.openProductModal(${product.id})">
                            Quick View
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    attachProductEventListeners() {
        // Product card hover effects
        document.querySelectorAll('.product-card').forEach(card => {
            const productId = parseInt(card.dataset.productId);
            const product = this.state.products.find(p => p.id === productId);
            
            if (product && product.images.length > 1) {
                const img = card.querySelector('.product-image img');
                let hoverTimeout;

                card.addEventListener('mouseenter', () => {
                    hoverTimeout = setTimeout(() => {
                        img.src = product.images[1];
                    }, 300);
                });

                card.addEventListener('mouseleave', () => {
                    clearTimeout(hoverTimeout);
                    img.src = product.images[0];
                });
            }
        });
    }

    // Modal Management
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    openProductModal(productId) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product) return;

        // Populate modal content
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalSalePrice').textContent = `₹${this.formatPrice(product.sale_price)}`;
        document.getElementById('modalRegularPrice').textContent = `₹${this.formatPrice(product.regular_price)}`;
        
        const discountPercent = Math.round(((product.regular_price - product.sale_price) / product.regular_price) * 100);
        document.getElementById('modalDiscount').textContent = `${discountPercent}% OFF`;
        
        document.getElementById('modalStock').textContent = product.stock <= 5 ? `Only ${product.stock} left!` : `${product.stock} in stock`;
        document.getElementById('modalUrgency').textContent = product.stock <= 5 ? 'Hurry! Limited stock' : '';
        
        // Rating
        document.getElementById('modalStars').innerHTML = this.generateStars(product.rating);
        document.getElementById('modalRatingCount').textContent = `(${product.reviews} reviews)`;
        
        // Main image
        document.getElementById('modalMainImage').src = product.images[0];
        
        // Thumbnails
        const thumbnails = document.getElementById('modalThumbnails');
        thumbnails.innerHTML = product.images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="app.changeModalImage('${img}', ${index})">
                <img src="${img}" alt="Product image ${index + 1}">
            </div>
        `).join('');
        
        // Specifications
        const specs = document.getElementById('modalSpecs');
        specs.innerHTML = `
            <div class="spec-item">
                <span class="spec-label">Weight:</span>
                <span>${product.weight}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Material:</span>
                <span>${product.material}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Care:</span>
                <span>${product.care}</span>
            </div>
        `;

        // Add to cart button
        const modalAddToCart = document.getElementById('modalAddToCart');
        modalAddToCart.onclick = () => {
            const quantity = parseInt(document.getElementById('modalQuantity').value);
            this.addToCart(productId, quantity);
        };

        // Wishlist button
        const modalWishlist = document.getElementById('modalWishlist');
        modalWishlist.onclick = () => this.toggleWishlist(productId);
        modalWishlist.innerHTML = this.isInWishlist(productId) ? '❤️ Remove from Wishlist' : '❤️ Add to Wishlist';

        // Quantity controls
        const qtyMinus = document.querySelector('.qty-btn.minus');
        const qtyPlus = document.querySelector('.qty-btn.plus');
        const qtyInput = document.getElementById('modalQuantity');

        qtyMinus.onclick = () => {
            if (qtyInput.value > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
            }
        };

        qtyPlus.onclick = () => {
            if (parseInt(qtyInput.value) < product.stock) {
                qtyInput.value = parseInt(qtyInput.value) + 1;
            }
        };

        this.openModal('productModal');
    }

    changeModalImage(imageSrc, index) {
        document.getElementById('modalMainImage').src = imageSrc;
        
        // Update thumbnail active state
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    selectProduct(productId) {
        this.openProductModal(productId);
        document.getElementById('searchSuggestions').style.display = 'none';
    }

    // Cart Management
    addToCart(productId, quantity = 1) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.state.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.state.cart.push({
                ...product,
                quantity: quantity
            });
        }

        this.updateCartCount();
        this.showNotification('Product added to cart!', 'success');
        this.createFlyingCartAnimation(productId);
        
        // Close product modal if open
        this.closeModal('productModal');
    }

    removeFromCart(productId) {
        this.state.cart = this.state.cart.filter(item => item.id !== productId);
        this.updateCartCount();
        this.renderCart();
        this.showNotification('Product removed from cart', 'info');
    }

    updateCartQuantity(productId, newQuantity) {
        const item = this.state.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, newQuantity);
            this.updateCartCount();
            this.renderCart();
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems) return;

        if (this.state.cart.length === 0) {
            cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
            if (cartTotal) cartTotal.textContent = '0';
            return;
        }

        const total = this.state.cart.reduce((sum, item) => sum + (item.sale_price * item.quantity), 0);

        cartItems.innerHTML = this.state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.images[0]}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${this.formatPrice(item.sale_price)} x ${item.quantity}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button onclick="app.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="app.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="cart-remove" onclick="app.removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');

        if (cartTotal) {
            cartTotal.textContent = this.formatPrice(total);
        }
    }

    createFlyingCartAnimation(productId) {
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        const cartBtn = document.getElementById('cartBtn');
        
        if (!productCard || !cartBtn) return;

        const productImg = productCard.querySelector('img');
        const productRect = productImg.getBoundingClientRect();
        const cartRect = cartBtn.getBoundingClientRect();

        // Create flying element
        const flyingItem = document.createElement('div');
        flyingItem.className = 'cart-item-flying';
        flyingItem.innerHTML = `<img src="${productImg.src}" alt="">`;
        
        // Set initial position
        flyingItem.style.left = `${productRect.left}px`;
        flyingItem.style.top = `${productRect.top}px`;
        flyingItem.style.width = `${productRect.width}px`;
        flyingItem.style.height = `${productRect.height}px`;
        
        document.body.appendChild(flyingItem);

        // Animate to cart
        setTimeout(() => {
            flyingItem.style.left = `${cartRect.left}px`;
            flyingItem.style.top = `${cartRect.top}px`;
            flyingItem.style.width = '30px';
            flyingItem.style.height = '30px';
            flyingItem.style.opacity = '0';
        }, 10);

        // Remove element after animation
        setTimeout(() => {
            flyingItem.remove();
        }, 1000);
    }

    proceedToCheckout() {
        this.showNotification('Checkout functionality would be implemented here', 'info');
        // In a real application, this would redirect to checkout page
    }

    // Wishlist Management
    toggleWishlist(productId) {
        const existingIndex = this.state.wishlist.findIndex(item => item.id === productId);
        
        if (existingIndex > -1) {
            this.state.wishlist.splice(existingIndex, 1);
            this.showNotification('Removed from wishlist', 'info');
        } else {
            const product = this.state.products.find(p => p.id === productId);
            if (product) {
                this.state.wishlist.push(product);
                this.showNotification('Added to wishlist!', 'success');
            }
        }

        this.updateWishlistCount();
        this.renderProducts(); // Re-render to update heart icons
        
        // Update modal wishlist button if modal is open
        const modalWishlist = document.getElementById('modalWishlist');
        if (modalWishlist) {
            modalWishlist.innerHTML = this.isInWishlist(productId) ? '❤️ Remove from Wishlist' : '❤️ Add to Wishlist';
        }
    }

    isInWishlist(productId) {
        return this.state.wishlist.some(item => item.id === productId);
    }

    updateWishlistCount() {
        const wishlistCount = document.getElementById('wishlistCount');
        if (wishlistCount) {
            wishlistCount.textContent = this.state.wishlist.length;
        }
    }

    renderWishlist() {
        const wishlistItems = document.getElementById('wishlistItems');
        if (!wishlistItems) return;

        if (this.state.wishlist.length === 0) {
            wishlistItems.innerHTML = '<div class="cart-empty">Your wishlist is empty</div>';
            return;
        }

        wishlistItems.innerHTML = this.state.wishlist.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.images[0]}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${this.formatPrice(item.sale_price)}</div>
                    <div class="cart-item-actions">
                        <button class="btn btn--primary" onclick="app.addToCart(${item.id})">Add to Cart</button>
                        <button class="cart-remove" onclick="app.toggleWishlist(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Review Management
    renderReviews() {
        const reviewsGrid = document.getElementById('reviewsGrid');
        if (!reviewsGrid) return;

        reviewsGrid.innerHTML = this.state.testimonials.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <img src="${review.image}" alt="${review.name}" class="reviewer-image">
                    <div class="reviewer-info">
                        <h4>${review.name}</h4>
                        <div class="reviewer-location">${review.location}</div>
                    </div>
                </div>
                <div class="review-rating">
                    <div class="stars">
                        ${this.generateStars(review.rating)}
                    </div>
                    ${review.verified ? '<span class="verified-badge">Verified</span>' : ''}
                </div>
                <p class="review-text">${review.review}</p>
                <div class="review-date">${this.formatDate(review.date)}</div>
            </div>
        `).join('');
    }

    populateReviewProducts() {
        const reviewProduct = document.getElementById('reviewProduct');
        if (!reviewProduct) return;

        reviewProduct.innerHTML = '<option value="">Select a product</option>' +
            this.state.products.map(product => 
                `<option value="${product.id}">${product.name}</option>`
            ).join('');
    }

    submitReview() {
        const productId = document.getElementById('reviewProduct').value;
        const rating = this.state.selectedRating;
        const name = document.getElementById('reviewName').value;
        const reviewText = document.getElementById('reviewText').value;

        if (!productId || !rating || !name || !reviewText) {
            this.showNotification('Please fill all fields', 'error');
            return;
        }

        // Add review to testimonials
        const newReview = {
            id: this.state.testimonials.length + 1,
            name: name,
            rating: rating,
            review: reviewText,
            location: 'Customer',
            date: new Date().toISOString().split('T')[0],
            verified: false,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        };

        this.state.testimonials.unshift(newReview);
        this.renderReviews();
        this.closeModal('reviewModal');
        this.showNotification('Thank you for your review!', 'success');

        // Reset form
        document.getElementById('reviewForm').reset();
        this.state.selectedRating = 0;
        this.updateRatingDisplay();
    }

    // Filter Methods
    filterProducts(category) {
        this.state.filters.category = category;
        
        // Update category filter dropdown
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }
        
        this.renderProducts();
        
        // Scroll to products section
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Animation and Timer Methods
    startAnimations() {
        // Animate elements on page load
        this.animateOnLoad();
        
        // Intersection Observer for scroll animations
        this.setupScrollAnimations();
    }

    animateOnLoad() {
        // Elements are already animated with CSS keyframes
        // Additional JavaScript animations can be added here
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.section-title, .product-card, .review-card').forEach(el => {
            observer.observe(el);
        });
    }

    startSalesTimers() {
        // Update live visitor count
        setInterval(() => {
            this.state.liveStats.visitors = Math.floor(Math.random() * 10) + 18;
            const liveVisitors = document.getElementById('liveVisitors');
            if (liveVisitors) {
                liveVisitors.textContent = this.state.liveStats.visitors;
            }
        }, 15000);

        // Show purchase notifications
        this.showPurchaseNotifications();
    }

    showPurchaseNotifications() {
        const purchases = [
            { product: "925 Silver Elegant Necklace", customer: "Meera", time: "2 minutes ago" },
            { product: "925 Silver Designer Earrings", customer: "Ravi", time: "5 minutes ago" },
            { product: "925 Silver Ganesha Idol", customer: "Kavya", time: "8 minutes ago" }
        ];

        let index = 0;
        setInterval(() => {
            const purchase = purchases[index % purchases.length];
            this.showPurchaseNotification(purchase);
            index++;
        }, 20000);
    }

    showPurchaseNotification(purchase) {
        const container = document.getElementById('purchaseNotifications');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = 'purchase-notification';
        notification.innerHTML = `
            <div><strong>${purchase.customer}</strong> purchased</div>
            <div>${purchase.product}</div>
            <div style="color: #999; font-size: 0.875rem;">${purchase.time}</div>
        `;

        container.appendChild(notification);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 5000);
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 2000);
    }

    // Utility Methods
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<span class="star filled">⭐</span>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<span class="star filled">⭐</span>'; // Half star as full for simplicity
            } else {
                starsHTML += '<span class="star">⭐</span>';
            }
        }

        return starsHTML;
    }

    formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    }

    showNotification(message, type = 'info') {
        const container = document.getElementById('notifications');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        container.appendChild(notification);

        // Close button event
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Public methods for external access
    static getInstance() {
        if (!PSJewellersApp.instance) {
            PSJewellersApp.instance = new PSJewellersApp();
        }
        return PSJewellersApp.instance;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PSJewellersApp();
});