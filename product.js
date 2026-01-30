const productsEl = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    renderProducts(data);
  });

function renderProducts(products) {
  productsEl.innerHTML = "";

  products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title.slice(0, 45)}...</h3>
      <div class="price">$${item.price}</div>
      <div class="card-actions">
        <button class="edit" onclick="editProduct(${item.id}, '${item.title}', ${item.price})">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;

    productsEl.appendChild(card);
  });
}

fetchProducts();

document.querySelector(".add__product__btn").onclick = () => {
  modal.classList.remove("hidden");
  editId = null;
  titleInput.value = "";
  priceInput.value = "";
};

document.getElementById("saveProduct").onclick = () => {
  const product = {
    title: titleInput.value,
    price: priceInput.value,
  };

  if (editId) {
    axios.put(`${API}/${editId}`, product).then(() => loadProducts());
  } else {
    axios.post(API, product).then(() => loadProducts());
  }

  modal.classList.add("hidden");
};

function editProduct(id, title, price) {
  modal.classList.remove("hidden");
  titleInput.value = title;
  priceInput.value = price;
  editId = id;
}

function deleteProduct(id) {
  axios.delete(`${API}/${id}`).then(() => loadProducts());
}

document.querySelector("#close").onclick = () => {
  modal.classList.add("hidden");
};
