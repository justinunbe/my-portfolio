
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['white', 'white', 'white', 'white', 'white'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: false,
  slidesNavigation: false,
  controlArrows: false,
  verticalCentered: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    console.log("afterLoad", index);
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    console.log("onLeave", index);
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    console.log("afterSlideLoad", index, "slideIndex", slideIndex);
    if(anchorLink == 'secondSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', 'white');
      $(this).find('h2').css('color', 'black');
      $(this).find('h3').css('color', 'black');
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    console.log("onSlideLeave", index, "slideIndex", slideIndex);
    if(index == 2 && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      console.log("yay");
    }
  }
});


$(document).ready(function(){
      $('.slick-slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500
      });
    });
