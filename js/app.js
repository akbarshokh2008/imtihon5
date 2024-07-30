// // const updateUI = (malumot) => {
// //   malumot.forEach((data) => {
// //     console.log(data.name);
// //   });
// // };

// // const input = document.querySelector("#input");
// // const select = document.querySelector("#select");

// function createElement(todoArr) {
//   list.innerHTML = "";
//   todoArr.data.forEach((item) => {
//     const li = document.createElement("li");
//     li.classList.add("list-item");
//     li.innerHTML += `

//     `;
//     list.appendChild(li);
//     li.value = "";
//   });
// }
// getData();
// function getData() {
//   fetch("https://cars-pagination.onrender.com/products")
//     .then((data) => {
//       return data.json();
//     })
//     .then((mebel) => {
//       console.log(createElement(mebel));
//     });
// }
const list = document.querySelector("#list");
const select = document.querySelector("#select");
const tanlov = document.querySelector("#tanlov");
fetch("https://cars-pagination.onrender.com/products")
  .then((res) => res.json())
  .then((data) => createElement(data));

function createElement(mebel) {
  list.innerHTML = "";
  mebel.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("list-item");
    article.innerHTML = `
    <a href="about.html?products=${item.id}">
    <div class="rasm-rel">
    <img src="${item.image}" alt="${item.image.alt}" class="rasm-rel-img">
    <div class="rasm-malum">
    <span><p>${
      item.isExist
        ? `<img src="./img/tugri.svg" alt="ha">   B наличии`
        : `<img src="./img/net.svg" alt="yoq">  Нет в наличии`
    }</p></span>
    <span class="padarok"><img src="./img/padarok.svg" alt=""><p>Подарок</p></span>
    </div>
    <div class="sale">
    <span>SALE</span>
    </div>

    </div>
    <div class="item-text">
    <h3>${item.name}</h3>
    <div class="narx">
    <p class="narx-p">${item.newPrice}  ₽</p>
    <del>${item.oldPrice} ₽</del>
    </div>
        </div>
    </a>`;
    list.appendChild(article);
  });
}

select.addEventListener("change", (e) => {
  return fetch(
    `https://cars-pagination.onrender.com/products/category?category=${e.target.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const kerakli = data.slice(0, 12);
      createElement(kerakli);
    });
});

function createTanlov(mebel) {
  tanlov.innerHTML = "";
  mebel.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("list-item");
    article.innerHTML = `
    <a href="about.html?products=${item.id}">
    <div class="rasm-rel">
    <img src="${item.image}" alt="${item.image.alt}" class="rasm-rel-img">
    <div class="rasm-malum">
    <span><p>${
      item.isExist
        ? `<img src="./img/tugri.svg" alt="ha">   B наличии`
        : `<img src="./img/net.svg" alt="yoq">  Нет в наличии`
    }</p></span>
    <span class="padarok"><img src="./img/padarok.svg" alt=""><p>Подарок</p></span>
    </div>
    <div class="sale">
    <span>SALE</span>
    </div>

    </div>
    <div class="item-text">
    <h3>${item.name}</h3>
    <div class="narx">
    <p class="narx-p">${item.newPrice}  ₽</p>
    <del>${item.oldPrice} ₽</del>
    </div>
        </div>
    </a>`;
    tanlov.appendChild(article);
  });
}
fetch("https://cars-pagination.onrender.com/products/category?category=средний")
  .then((res) => res.json())
  .then((data) => {
    const tanlabOlish = data.slice(0, 4);
    createTanlov(tanlabOlish);
  });
