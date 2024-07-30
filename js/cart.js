document.addEventListener("DOMContentLoaded", function () {
  displayCart();
});

function displayCart() {
  const korzinContainer = document.querySelector(".korzin");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    korzinContainer.innerHTML = "<p>Korzinka bo'sh.</p>";
    return;
  }

  korzinContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const section = document.createElement("section");
    section.classList.add("jihoz2");
    section.innerHTML = `
    <div class="korz-minus"><h4>Корзина</h4> <img src="./img/yoqqil.svg" alt="rasm"></div>
            <div class="car-text">
            <div >
            <div class="car-text-rasm">
            <img src="${item.image}" alt="${item.name}">
            <div class="car-text-text">
            <p class="car-text-text-p">Дверной Замок Golden Soft для офиса</p>
            <br/>
            <p>+ Подарок: <span>“Приложение к замкам Golden Service”</span></p>
            </div>

            </div>
            <div class="Itogo">
            <p>Итого:  <span>${item.newPrice} ₽</span></p>

            </div>
            <button class="oformit-btn">Оформить заказ</button>
            </div>
        <div class="remove-btn" data-index="${index}"><img src="./img/delete.svg" alt="delete"> Удалить</div>
            </div>
        `;
    korzinContainer.appendChild(section);
  });

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      removeFromCart(index);
    });
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
