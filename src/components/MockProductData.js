import blueFlowerImg from "../images/blue-flower.png";
import orangeFlowerImg from "../images/orange-flower.png";
import pinkFlowerImg from "../images/pink-flower.png";

export default function MockProductData() {
  return new Promise(function retrieveData(resolve) {
    const productData = [
      {
        name: "Blue Flower",
        price: 80,
        rating: 4,
        image_url: blueFlowerImg
      },
      {
        name: "Orange Flower",
        price: 17.7,
        rating: 3,
        image_url: orangeFlowerImg
      },
      {
        name: "Pink Flower",
        price: 40,
        rating: 5,
        image_url: pinkFlowerImg
      },
      {
        name: "Blue Flower",
        price: 80,
        rating: 4,
        image_url: blueFlowerImg
      },
      {
        name: "Orange Flower",
        price: 17.7,
        rating: 3,
        image_url: orangeFlowerImg
      },
      {
        name: "Pink Flower",
        price: 40,
        rating: 5,
        image_url: pinkFlowerImg
      },
      {
        name: "Blue Flower",
        price: 80,
        rating: 4,
        image_url: blueFlowerImg
      },
      {
        name: "Orange Flower",
        price: 17.7,
        rating: 3,
        image_url: orangeFlowerImg
      },
      {
        name: "Pink Flower",
        price: 40,
        rating: 5,
        image_url: pinkFlowerImg
      }
    ];

    resolve(productData);
  });
}
