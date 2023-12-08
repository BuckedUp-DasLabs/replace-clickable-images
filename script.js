const replaceClickableImages = (mainId) =>{
  const images = document.querySelectorAll(".clickable-img-grid img");
  const mainImage = document.getElementById(mainId);
  images[0].classList.add("active")
  mainImage.innerHTML = images[0].outerHTML
  images.forEach(img=>{
    img.addEventListener("click",()=>{
      Array.from(images).filter(img=>img.classList.contains("active"))[0].classList.remove("active");
      img.classList.add("active");
      mainImage.innerHTML = img.outerHTML;
    })
  })
}