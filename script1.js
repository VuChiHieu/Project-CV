$(document).ready(function () {
  // Tab chuyển slide học tập
  $('.edu-tab').click(function () {
    let tabId = $(this).data('tab');

    // Chuyển nút active
    $('.edu-tab').removeClass('active');
    $(this).addClass('active');

    // Ẩn hiện slide tương ứng
    $('.edu-slide').removeClass('active');
    $('#' + tabId).addClass('active');
  });
});


$(document).ready(function () {
  $('.edu-tab').click(function () {
    const tabId = $(this).data('tab');

    // Cập nhật tab và slide
    $('.edu-tab').removeClass('active');
    $(this).addClass('active');

    $('.edu-slide').removeClass('active');
    $('#' + tabId).addClass('active');

    // Reset width thanh kỹ năng
    $('.language-bar .fill').css('width', '0');

    // Nếu chuyển sang slide 1, chạy hiệu ứng fill
    if (tabId === 'edu-slide-1') {
      setTimeout(() => {
        $('.language-bar .fill').each(function () {
          const targetWidth = $(this).data('width');
          $(this).animate({ width: targetWidth }, 1000);
        });
      }, 100); // delay nhẹ để tránh lỗi khi DOM chưa sẵn sàng
    }
  });
});

$(document).ready(function () {
  $('.exp-tab').click(function () {
    const tabId = $(this).data('tab');

    $('.exp-tab').removeClass('active');
    $(this).addClass('active');

    $('.exp-slide').removeClass('active');
    $('#' + tabId).addClass('active');

    // Reset fill
    $('.skills .fill').css('width', '0');

    // Khi chuyển sang slide kỹ năng nghề nghiệp → animate
    if (tabId === 'exp-slide-2') {
      setTimeout(() => {
        $('.skills .fill').each(function () {
          const width = $(this).data('width');
          $(this).animate({ width: width }, 1000);
        });
      }, 100);
    }
  });
});

$(document).ready(function () {
  $('.nav-link').click(function (e) {
    e.preventDefault(); // Ngăn reload

    const targetId = $(this).attr('href');
    const targetOffset = $(targetId).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 700); // 700ms cho hiệu ứng mượt
  });
});
