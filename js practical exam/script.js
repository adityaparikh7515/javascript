    // Initialize products from LocalStorage or empty array
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let editId = null;

    const productList = document.getElementById("productList");
    const form = document.getElementById("productForm");
    const submitBtn = form.querySelector("button[type='submit']");

    // --- Core Data Functions ---

    function saveToLocalStorage() {
        localStorage.setItem("products", JSON.stringify(products));
    }

    // This is the master function to display products
    // It handles the current state of filters and search
    function renderProducts() {
        productList.innerHTML = "";
        
        const searchTerm = document.getElementById("search").value.toLowerCase();
        const filterTerm = document.getElementById("filter").value;
        const sortTerm = document.getElementById("sort").value;

        // 1. Filter & Search
        let filtered = products.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchTerm);
            const matchesCategory = !filterTerm || p.category === filterTerm;
            return matchesSearch && matchesCategory;
        });

        // 2. Sort
        if (sortTerm === "low") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortTerm === "high") {
            filtered.sort((a, b) => b.price - a.price);
        }

        // 3. Display
        filtered.forEach(displaySingleProduct);
        updateCategoryFilterOptions();
    }

    function displaySingleProduct(product) {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <img src="${product.image || 'https://picsum.photos/200'}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>₹${Number(product.price).toLocaleString('en-IN')}</p>
            <p><small>${product.category}</small></p>
            <div class="actions">
                <button class="edit" onclick="prepareEdit(${product.id})">Edit</button>
                <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        `;
        productList.appendChild(div);
    }

    // --- Action Functions ---

    function handleFormSubmit(e) {
        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const price = parseFloat(document.getElementById("price").value);
        const image = document.getElementById("image").value.trim();
        const category = document.getElementById("category").value.trim();

        if (!title || isNaN(price)) {
            alert("Please enter a valid title and price");
            return;
        }

        if (editId) {
            // Update existing
            const index = products.findIndex(p => p.id === editId);
            products[index] = { id: editId, title, price, image, category };
            editId = null;
            submitBtn.textContent = "Add Product";
        } else {
            // Create new
            const newProduct = {
                id: Date.now(),
                title,
                price,
                image,
                category
            };
            products.push(newProduct);
        }

        saveToLocalStorage();
        form.reset();
        renderProducts();
    }

    function prepareEdit(id) {
        const product = products.find(p => p.id === id);
        document.getElementById("title").value = product.title;
        document.getElementById("price").value = product.price;
        document.getElementById("image").value = product.image;
        document.getElementById("category").value = product.category;
        
        editId = id;
        submitBtn.textContent = "Update Product";
        window.scrollTo(0, 0); // Scroll to form
    }

    function deleteProduct(id) {
        if(confirm("Delete this product?")) {
            products = products.filter(p => p.id !== id);
            saveToLocalStorage();
            renderProducts();
        }
    }

    function updateCategoryFilterOptions() {
        const filterSelect = document.getElementById("filter");
        const currentSelection = filterSelect.value;
        const categories = [...new Set(products.map(p => p.category))].filter(Boolean);
        
        filterSelect.innerHTML = `<option value="">All Categories</option>`;
        categories.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat;
            if(cat === currentSelection) option.selected = true;
            filterSelect.appendChild(option);
        });
    }

    // --- Event Listeners ---

    form.addEventListener("submit", handleFormSubmit);
    document.getElementById("search").addEventListener("input", renderProducts);
    document.getElementById("sort").addEventListener("change", renderProducts);
    document.getElementById("filter").addEventListener("change", renderProducts);

    // Initial Load
    renderProducts();