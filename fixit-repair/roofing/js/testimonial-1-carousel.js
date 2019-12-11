$(document).ready(function() {
 
  $(".testimonial").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 3000,
      paginationSpeed : 400,
      items : 3,
      pagination:true,
      autoPlay:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});