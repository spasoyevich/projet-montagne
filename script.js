jQuery(document).ready(function(){
    $('.menu-item').addClass('menu-trigger');
    $('.menu-trigger').click(function(){
        $('#menu-trigger').toggleClass('clicked');
        $('.container').toggleClass('push');
        $('.menu-type').toggleClass('open');
    });
});




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}