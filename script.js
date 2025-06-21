$(document).ready(function () {
  const $target = $('#thongtin .info-grid');
  $target.css('opacity', 0);

  let hasShown = false;

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const elementTop = $target.offset().top;
    const windowHeight = $(window).height();

    if (!hasShown && scrollTop + windowHeight > elementTop + 100) {
      $target.animate({ opacity: 1 }, 800);
      hasShown = true;
    }
  });

  // Toggle từng mục trong phần Sở thích
  $('.interest-toggle').on('click', function () {
    const target = $(this).data('target');

    // Ẩn tất cả list khác
    $('.interest-list').not(target).slideUp().removeClass('show');

    // Toggle chính mục vừa bấm
    if ($(target).hasClass('show')) {
        $(target).slideUp().removeClass('show');
    } else {
        $(target).addClass('show').hide().fadeIn(300);
    }
    });

  const $educationEntries = $('.education-entry');

  $(window).on('scroll', function () {
    $educationEntries.each(function () {
      const elementTop = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementTop + 50) {
        $(this).addClass('visible');
      }
    });
  });

  $(window).on('scroll', function () {
    $('.cert-card').each(function () {
        const top = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (scroll + windowHeight > top + 50) {
            $(this).addClass('visible');
        }
    });
  });

  const $langBars = $('.lang-fill');
  let languageAnimated = false;

  $(window).on('scroll', function () {
    const sectionTop = $('#ngonngu').offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (!languageAnimated && scrollTop + windowHeight > sectionTop + 50) {
      $langBars.each(function () {
        const percent = $(this).data('percent');
        $(this).css('width', percent + '%');
      });
      languageAnimated = true;
    }
  });

  let index = 0;
  const $imgs = $('.language-slideshow img');
  const total = $imgs.length;

  setInterval(() => {
    $imgs.eq(index).fadeOut(800);
    index = (index + 1) % total;
    $imgs.eq(index).fadeIn(800);
  }, 4000); 

  const $expCards = $('.exp-card');
  let expShown = false;

  $(window).on('scroll', function () {
    const sectionTop = $('#kinhnghiem').offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (!expShown && scrollTop + windowHeight > sectionTop + 50) {
      $expCards.each(function (i) {
        const card = $(this);
        setTimeout(() => {
          card.addClass('visible');
        }, i * 200); // Hiện từng cái cách nhau 200ms
      });
      expShown = true;
    }
  });

  const $skills = $('.skill-fill');
  let skillsAnimated = false;

  $(window).on('scroll', function () {
    const sectionTop = $('#kynang').offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (!skillsAnimated && scrollTop + windowHeight > sectionTop + 50) {
      $skills.each(function () {
        const percent = $(this).data('percent');
        let color = '#1f8ef1'; // default: blue

        if (percent < 30) color = '#e74c3c';      // đỏ
        else if (percent < 70) color = '#f1c40f'; // vàng
        else color = '#2ecc71';                   // xanh

        $(this).css({
          width: percent + '%',
          backgroundColor: color
        });
      });
      skillsAnimated = true;
    }
  });
 
});
