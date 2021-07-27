// Scrolltop Offset -100

$('.header-main a[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 50
      }, 'fast');
      return false;
    }
  }
});

// Swiper JS

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Form Validation

function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  let y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }

  let z = document.forms["myForm"]["message"].value;
  if (z == "") {
    alert("Message must be filled out");
    return false;
  }
}
