const mahsulot = document.querySelector("#mahsulot");
const urlParams = new URLSearchParams(window.location.search);
const products = urlParams.get("products");

fetch("https://cars-pagination.onrender.com/products/" + products)
  .then((res) => res.json())
  .then((data) => {
    createMah(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

function createMah(mebel) {
  mahsulot.innerHTML = "";
  const section = document.createElement("section");
  section.classList.add("jihoz");
  section.innerHTML = `
        <img src="${mebel.image}" alt="" class="jihoz-img">
        <div class="mah-text">
            <h1>${mebel.name}</h1>
            <p>
            Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum.</p>
            <span>Цена</span>
            <div class="mah-text-narx">
                <p>${mebel.newPrice}  ₽</p>
                <del>${mebel.oldPrice}  ₽</del>
            </div>
            <div id="add-to-bag"><button class="btn" >КОРЗИНКА</button></div>
        </div>
    `;
  mahsulot.appendChild(section);

  document
    .querySelector("#add-to-bag button")
    .addEventListener("click", function () {
      addToBag(mebel);
    });
}

function addToBag(mebel) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(mebel);
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log(mebel.name + " korzinkaga qo'shildi.");
  alert(mebel.name + " korzinkaga qo'shildi.");
}
