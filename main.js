
  $(window).on('load', function () {
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 767.98,
      hideTimeOut: 0
    });
  });

  $(document).on('ready', function () {
    //initialization of header
    $.HSCore.components.HSHeader.init($('#header'));
    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
      afterOpen: function () {
        //$(this).find('input[type="search"]').focus();
      }
    });
    // initialization of text animation (typing)
    var typed = new Typed(".u-text-animation--typing", {
      strings: ["more professional.", "perfect in every way.", "astonishing."],
      typeSpeed: 60,
      loop: true,
      backSpeed: 25,
      backDelay: 1500
    });
  });

  let co = document.querySelector('.wrapper');

window.addEventListener('load', function (e){
               co.parentElement.removeChild(co);
});


