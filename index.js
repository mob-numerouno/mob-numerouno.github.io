
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
