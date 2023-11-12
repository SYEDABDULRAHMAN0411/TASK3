document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
  
    // Replace these paths with your actual image paths
    const imagePaths = [
      "images1.jpg",
      "images2.jpg",
      "images3.jpg",
      "images4.jpg",
      "images5.jpg",
      "images6.jpg",
      "images7.jpg",
      "images8.jpg",
      "images9.jpg",
      "images10.jpg",
      
    ];
  
    imagePaths.forEach((path) => {
      const imageDiv = createImageDiv(path);
      imageContainer.appendChild(imageDiv);
    });
  });
  
  function createImageDiv(imagePath) {
    const imageDiv = document.createElement("div");
    imageDiv.className = "col-md-4 resizable-image";
  
    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = "Image";
    imageDiv.appendChild(image);
  
    const iconDiv = document.createElement("div");
    iconDiv.className = "center-icon";
  
    const icon = document.createElement("img");
    // Replace this with your actual icon path
    icon.src = "icon.png";
    icon.alt = "Center Icon";
  
    iconDiv.appendChild(icon);
    imageDiv.appendChild(iconDiv);
  
    return imageDiv;
  }
  