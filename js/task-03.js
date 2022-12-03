const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const backgroundColorWindow = document.querySelector("body");
backgroundColorWindow.style.backgroundColor = "#f6cf92";

const imageGallery = document.querySelector(".gallery");
imageGallery.style.backgroundColor = "#FFE5B4";
imageGallery.style.display = "flex";
imageGallery.style.maxWidth = "1200px";
// imageGallery.style.flexDirection = "column";
imageGallery.style.listStyle = "none";
imageGallery.style.justifyContent = "space-around";
imageGallery.style.alignItems = "center";
imageGallery.style.margin = "0 auto";
imageGallery.style.paddingLeft = "0";
imageGallery.style.borderRadius = "20px";

const imageEl = images
  .map(
    (image) =>
      `<li><img class = "photo" src = ${image.url} alt = ${image.alt}></li>`
  )
  .join("");

imageGallery.insertAdjacentHTML("afterbegin", imageEl);
