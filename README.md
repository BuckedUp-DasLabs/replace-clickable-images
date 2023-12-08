# Script for adding clickable images into instapage

## Header
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/replace-clickable-images@latest/style.css" />
```

## Footer
```
<script src="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/replace-clickable-images@latest/script.js"></script>
<script>
  replaceClickableImages("element-")
  new Swiper('.swiper-banner', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 9,
    speed: 500,
    scrollbar: {
      el: '.swiper-banner-scroll',
    },
  });
  document.querySelectorAll(".swiper").forEach(swiper => { swiper.parentElement.style.height = "100%" })
</script>
```

## Html Block Desk

```
<div class="clickable-img-grid">
  <img class="clickable-img-img" src="" alt="">
</div>
```

## Html Block Mobile

```
<div class="swiper swiper-banner has-scroll">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="" alt="">
    </div>
  </div>
  <div class="swiper-scrollbar swiper-banner-scroll"></div>
</div>
```
