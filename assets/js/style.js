"use strict";
const imageCount = 4;
const apiKey = "";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${imageCount}`;

const loaderElement = document.querySelector(".loader");
const imgContainer = document.querySelector(".column");
// Show Loader in page and hide in fetch data progress
function showLoading() {
  loaderElement.hidden = false;
  imgContainer.hidden = true;
}

// Hide Loader in page and show in fetched data
function hideLoading() {
  loaderElement.hidden = true;
  imgContainer.hidden = false;
}
async function getPhotos() {
  try {
    showLoading();
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    jsonData.map((item) => {
      // Destructuring image object
      let { urls, links } = item;
      let divSelector = document.querySelector(".column");

      // Generate image A link outer image
      let imgLinkGenerator = document.createElement("a");
      imgLinkGenerator.href = links.html;
      imgLinkGenerator.classList = "img-fluid";
      imgLinkGenerator.target = "_blank";
      divSelector.appendChild(imgLinkGenerator);

      // Generate Fetched image element
      let imgGenerator = document.createElement("img");
      imgGenerator.src = urls.small;
      document.querySelector(".img-fluid").appendChild(imgGenerator);
      console.log(divSelector);
      return;
    });
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
  hideLoading();
}

// Initialize image loading
getPhotos();
