$(document).ready(function(){
	$('.your-class').slick({
  centerMode: true,
  centerPadding: '70px',
   dots: true,
  slidesToShow: 3,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
         centerMode: true,
        centerPadding: '40px',
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
      arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
      arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
      	 
        arrows: false,
         dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //        dots: true,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});
})