var hamburger = $('.menu-link');
  hamburger.click(function() {
    hamburger.toggleClass('bactive');
    return false;
  });

var $menu = $('#menu'),
$menulink = $('.menu-link');

$menulink.click(function(e) {
  e.preventDefault();       
  $menu.toggleClass('active');
});