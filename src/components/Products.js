import SVGInject from "@iconfu/svg-inject";

import starIcon from "../images/star.svg";
import "../css/products.scss";

export function Products(products) {
  var fragment = document.createDocumentFragment();
  var elements = products.map(createNode);

  for (var element of elements) {
    fragment.appendChild(element);
  }

  return fragment;
}

function createNode(product) {
  var { name, price, rating, image_url } = product,
    elContainer = document.createElement("div"),
    elTitle = document.createElement("h2"),
    elPrice = document.createElement("div"),
    elRating = document.createElement("div"),
    elImage = document.createElement("div"),
    elButton = document.createElement("button");

  elContainer.className = "product";
  elTitle.className = "product__title";
  elPrice.className = "product__price";
  elRating.className = "product__rating";
  elImage.className = "product__image";

  elTitle.textContent = name;
  elPrice.textContent = `$${price.toFixed(2)}`;
  elRating.innerHTML = showStars(rating);
  elImage.innerHTML = `<img src="${image_url}" alt="Image of ${name}" />`;
  elButton.textContent = "Add to cart";

  elImage.appendChild(elButton);
  SVGInject(elRating.querySelectorAll("img.star"));

  elContainer.appendChild(elImage);
  elContainer.appendChild(elTitle);
  elContainer.appendChild(elPrice);
  elContainer.appendChild(elRating);

  elButton.addEventListener("click", addToCart, false);

  return elContainer;
}

function addToCart(evt) {
  var parEl = evt.target.closest(".product");
  parEl.classList.toggle("product--in-cart");

  if (parEl.classList.contains("product--in-cart")) {
    evt.target.textContent = "Remove from cart";
    parEl.dataset.inCart = "In Cart";
  } else {
    evt.target.textContent = "Add to cart";
    delete parEl.dataset.inCart;
  }

  setTimeout(() => {
    // button remains visible on focus (a11y), so blur it after a couple of seconds.
    evt.target.blur();
  }, 2000);
}

function showStars(numOfStars) {
  var stars = "";
  const total = 5;

  for (let i = 0; i < numOfStars; i++) {
    stars += `<img class="star" src="${starIcon}" alt="Filled star" />`;
  }

  for (let i = 0; i < total - numOfStars; i++) {
    stars += `<img class="star star--empty" src="${starIcon}" alt="Empty star" />`;
  }

  return stars;
}
