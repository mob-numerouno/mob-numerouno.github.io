// Option 2 - jQuery Smooth Scrolling
$('.pic').on('click', event => {
  event.preventDefault();
  const hash = '#' + event.target.className.split(' ')[1];
  $('html, body').animate(
    {
      scrollTop: $(hash).offset().top - 250,
    },
    700,
  );
});

// $('.bio').hide()

// $(window).scroll(() => {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     $('header').animate({ height: '60px' }, 400);
//     // document.getElementsByTagName('header')[0].style.height= '60px';
//   } else {
//     $('header').animate({ height: '160px' }, 400);

//     // document.getElementsByTagName('header')[0].style.height= '180px';
//   }
// });
