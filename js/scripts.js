document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang chủ đã tải xong!");

    // Hiệu ứng hover cho danh mục sản phẩm
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.addEventListener("mouseover", () => {
            category.style.backgroundColor = "#ff00ff";
            category.style.color = "white";
        });
        category.addEventListener("mouseout", () => {
            category.style.backgroundColor = "#f5f5f5";
            category.style.color = "black";
        });
    });

    // Hiệu ứng click vào sản phẩm
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("click", () => {
            alert("Bạn đã chọn " + product.textContent);
        });
    });
});

// Hiệu ứng click vào thanh menu
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        let dropdownContent = dropdown.querySelector(".dropdown-content");

        dropdown.addEventListener("mouseover", function () {
            dropdownContent.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownContent.style.display = "none";
        });
    });
});

function openProductDetail(productId) {
    window.location.href = 'Chi-tiet-san-pham.html?id=' + productId;
}

//Chi tiết sản phẩm

    document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const products = {
        "d1": {name: "Dây chuyền DW Aspiration Trắng", price: "3.150.000", img: "images/dw-aspiration-white.png", desc: "Dây chuyền sang trọng, chất liệu thép không gỉ mạ vàng hồng cao cấp."},
        "d2": {name: "Dây chuyền DW Aspiration Đen", price: "3.150.000", img: "images/dw-aspiration-black.png", desc: "Dây chuyền sang trọng, chất liệu thép không gỉ mạ vàng hồng cao cấp."},
        "n1": {name: "Nhẫn DW Emalie Vàng hồng", price: "1.200.000", img: "images/emalie-ring.png", desc: "Nhẫn Emalie được thiết kế sang trọng, phong cách hiện đại."},
        "lt1": {name: "Lắc tay DW Tennis", price: "3.150.000", img: "images/dw-tennis-bracelet.jpg", desc: "Lắc tay chất liệu thép không gỉ được mạ vàng hồng cao cấp, thiết kế tinh xảo."},
        "vt1": {name: "Vòng tay DW Emalie", price: "2.500.000", img: "images/V2-Emalie-DW00400007-3.jpg", desc: "Vòng tay chất liệu thép không gỉ được mạ vàng hồng cao cấp, thiết kế tinh xảo."},
        "lc1": {name: "Lắc chân", price: "1.200.000", img: "images/lac-chan.jpg", desc: "Lắc chân thời trang, phong cách trẻ trung."},
        "bt1": {name: "Bông tai DW Aspiration Trắng", price: "2.000.000", img: "images/dw-aspiration-earing-white.png", desc: "Bông tai vàng hồng được thiết kế đơn giản nhưng sang trọng, đẳng cấp."},
        "bt2": {name: "Bông tai DW Aspiration Đen", price: "2.000.000", img: "images/dw-aspiration-earings-black.jpg", desc: "Bông tai vàng hồng được thiết kế đơn giản nhưng sang trọng, đẳng cấp."}
};

    if (products[productId]) {
    document.getElementById("productImg").src = products[productId].img;
    document.getElementById("productName").textContent = products[productId].name;
    document.getElementById("productPrice").textContent = "Giá: " + products[productId].price;
    document.getElementById("productDesc").textContent = products[productId].desc;
}
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Bài viết mới nhất đã được tải thành công!");
});

//Giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = parseInt(product.querySelector(".price").textContent);
            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} VNĐ`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = total;
    }
});

//Thêm vào giỏ hàng
// Lấy dữ liệu từ URL
const params = new URLSearchParams(window.location.search);
const productName = params.get("name");
const productPrice = params.get("price");

// Hiển thị sản phẩm trên trang
document.getElementById("product-name").textContent = productName;
document.getElementById("product-price").textContent = productPrice;

// Xử lý thêm vào giỏ hàng
document.getElementById("add-to-cart").addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: parseInt(productPrice) });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
});

//Trang tin tức
// Xử lý nút "Đọc thêm"
document.getElementById("read-more").addEventListener("click", function () {
    var moreContent = document.getElementById("more-content");

    if (moreContent.classList.contains("hidden")) {
        moreContent.classList.remove("hidden");
        this.textContent = "Thu gọn";
    } else {
        moreContent.classList.add("hidden");
        this.textContent = "Đọc thêm";
    }
});

// Chia sẻ lên Facebook
function shareFacebook() {
    var url = window.location.href;
    var facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}

// Chia sẻ lên Twitter
function shareTwitter() {
    var url = window.location.href;
    var text = "Vẻ đẹp của trang sức đá quý - Khám phá ngay!";
    var twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
}

// Xử lý nút "Xem thêm" trong tư vấn trang sức
document.getElementById("show-more-advice").addEventListener("click", function () {
    var adviceContent = document.getElementById("more-advice");

    if (adviceContent.classList.contains("hidden")) {
        adviceContent.classList.remove("hidden");
        this.textContent = "Thu gọn";
    } else {
        adviceContent.classList.add("hidden");
        this.textContent = "Xem thêm";
    }
});

// Bộ lọc sự kiện theo tháng
document.getElementById("month-filter").addEventListener("change", function () {
    var selectedMonth = this.value;
    var events = document.querySelectorAll(".event");

    events.forEach(function (event) {
        var eventMonth = event.getAttribute("data-month");
        if (selectedMonth === "all" || eventMonth === selectedMonth) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }
    });
});

document.getElementById("subscribe-btn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    if (email.includes("@")) {
        alert("✅ Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận thông tin.");
        document.getElementById("email").value = "";
    } else {
        alert("❌ Vui lòng nhập email hợp lệ.");
    }
});

function goToCart() {
    window.location.href = "Gio-hang.html"; // Thay bằng trang giỏ hàng của bạn
}

document.addEventListener("DOMContentLoaded", function() {
    const wishlistBtns = document.querySelectorAll(".wishlist-btn");
    const wishlistContainer = document.getElementById("wishlist-items");

    // Lấy dữ liệu wishlist từ localStorage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    function renderWishlist() {
        wishlistContainer.innerHTML = "";
        wishlist.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <button class="remove-btn" data-index="${index}">❌</button>
            `;
            wishlistContainer.appendChild(li);
        });

        // Xóa sản phẩm khỏi wishlist
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function() {
                const index = this.getAttribute("data-index");
                wishlist.splice(index, 1);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                renderWishlist();
            });
        });
    }

    // Thêm vào wishlist
    wishlistBtns.forEach(button => {
        button.addEventListener("click", function() {
            let product = this.closest(".product-card");
            let productId = product.getAttribute("data-id");
            let productName = product.getAttribute("data-name");
            let productImage = product.getAttribute("data-image");

            // Kiểm tra sản phẩm đã tồn tại chưa
            let exists = wishlist.some(item => item.id === productId);
            if (!exists) {
                wishlist.push({ id: productId, name: productName, image: productImage });
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                renderWishlist();
            } else {
                alert("Sản phẩm đã có trong danh sách yêu thích!");
            }
        });
    });

    renderWishlist(); // Hiển thị wishlist khi tải trang
});
