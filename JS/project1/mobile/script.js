
const mobiles = [
 {id:1,name:"Samsung Galaxy S23",price:70000,brand:"Samsung"},
 {id:2,name:"iPhone 14",price:80000,brand:"Apple"},
 {id:3,name:"OnePlus 11",price:60000,brand:"OnePlus"},
 {id:4,name:"Redmi Note 13",price:20000,brand:"Xiaomi"},
 {id:5,name:"Realme Narzo 60",price:18000,brand:"Realme"},
 {id:6,name:"Vivo V29",price:32000,brand:"Vivo"},
 {id:7,name:"Oppo Reno 10",price:30000,brand:"Oppo"},
 {id:8,name:"Google Pixel 7",price:65000,brand:"Google"},
 {id:9,name:"Nothing Phone 2",price:45000,brand:"Nothing"},
 {id:10,name:"Motorola Edge 40",price:35000,brand:"Motorola"}
];

let cart = [];
let reviews = {};

const mobileList = document.getElementById("mobileList");
const cartList = document.getElementById("cartList");
const searchInput = document.getElementById("search");

function displayMobiles(data) {

    mobileList.innerHTML = "";

    data.forEach(mobile => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${mobile.name}</h3>
            <p><b>Brand:</b> ${mobile.brand}</p>
            <p><b>Price:</b> ₹${mobile.price}</p>

            <button onclick="addToCart(${mobile.id})">
                Add to Cart
            </button>

            <br><br>

            <input id="review-${mobile.id}" 
                   placeholder="Write review">

            <button onclick="addReview(${mobile.id})">
                Add Review
            </button>

            <div id="reviewList-${mobile.id}"></div>
        `;

        mobileList.appendChild(div);
    });
}

function addToCart(id) {

    const mobile = mobiles.find(m => m.id === id);
    cart.push(mobile);

    renderCart();
}


function renderCart() {

    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });
}

function addReview(id) {

    const input = document.getElementById(`review-${id}`);
    const text = input.value.trim();

    if (!text) return;

    if (!reviews[id]) {
        reviews[id] = [];
    }

    reviews[id].push(text);

    showReviews(id);

    input.value = "";
}

function showReviews(id) {

    const reviewDiv =
        document.getElementById(`reviewList-${id}`);

    reviewDiv.innerHTML = "<b>Reviews:</b>";

    reviews[id].forEach(r => {
        const p = document.createElement("p");
        p.textContent = "⭐ " + r;
        reviewDiv.appendChild(p);
    });
}

// ---------------- Search ----------------

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = mobiles.filter(m =>
        m.name.toLowerCase().includes(value)
    );

    displayMobiles(filtered);
});

// ---------------- Initial Load ----------------

displayMobiles(mobiles);