var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})



$('.service-card-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
