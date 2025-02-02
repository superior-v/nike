const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Strom",
    price: 69,
    colors: [
      {
        code: "black",
        img: "./img/aiku.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 69,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 69,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 69,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 69,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});





