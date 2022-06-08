
// Set the date we're counting down to
var countDownDate = new Date("May 3, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML ='<span id="day">'+ days + '</span>' +  '<span id="hours">'+ hours + '</span>'
  // + '<span id="minutes">'+ minutes + '</span>' + '<span id="seconds">'+ seconds + '</span>';
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="day">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }

    // document.getElementById("after-expire").setAttribute("id","offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    // document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
    }

    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl:true,
    items: 4,
    loop: true,
    margin: 0,
    nav:true,
    dots:true,
    center: true,
    autoplay: true,
    slideBy:3,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:2,
          nav:true,
        },
        1000:{
          items:3,
          center: true,
        },
        1200:{
          items:4,
          center: true,
      }
    }
  });
});




$(".tt").tooltip("show");
$('.popovers').popover({
  trigger: 'hover'
})
$(".popovers").popover("show");
$(".tot").toast("show");



$(document).ready(function(){
  $('.search-box-wrapper button').click(function(){
    $('.search-box-wrapper input').toggle();
  });
});


$(window).scroll(function(){
  if($(this).scrollTop() >= 50){
    $('nav#nav-menu').addClass('custom-navbar-menu navbar-menu-sticky');
  }
  else{
    $('nav#nav-menu').removeClass('navbar-menu-sticky');
  }
});


$(window).scroll(function(){
  if($(this).scrollTop() >= 50){
    $('.services-chat-image').css({
      bottom: "0px"
    });
  }
  else{
    $('.services-chat-image').css({
      bottom: "-200px"
    });
  }
});

$(document).ready(function(){
  $('.services-chat-image').click(function(){
    $('.technical-services-box').toggle();
  });
  $('.technical-services-header span').click(function(){
    $('.technical-services-box').css({
      display: "none"
    });
  });
});


$(document).ready(function(){
  var urls = [
    '../image/mini-slide-2.png',
    '../image/mini-slide-5.png',
    '../image/mini-slide-3.png',
    '../image/mini-slide-4.png'
  ];
  $('#Product-images-gallery').zoomy(urls, {
    width: 600,
    height: 450
  });
});


$(document).ready(function(){
  $('#nextbutton-1').click(function(){
    $('.fieldset-1').css({
      display: 'none'
    });
    $('.fieldset-2').css({
      display: 'block'
    });
    $('.progress-inner li.personal-detail').addClass('active');
  });
  $('#nextbutton-2').click(function(){
    $('.fieldset-2').css({
      display: 'none'
    });
    $('.fieldset-3').css({
      display: 'block'
    });
    $('.progress-inner li.personal-detail').addClass('active-2');
  });
  $('#previousbutton-1').click(function(){
    $('.fieldset-2').css({
      display: 'none'
    });
    $('.fieldset-1').css({
      display: 'block'
    });
  });
  $('#previousbutton-2').click(function(){
    $('.fieldset-3').css({
      display: 'none'
    });
    $('.fieldset-2').css({
      display: 'block'
    });
  });
  $('#submitbutton').click(function(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'ثبت نام موفقیت آمیز بود'
    })
  });
});