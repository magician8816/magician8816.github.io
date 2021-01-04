// 美化返回顶部按钮样式（导入utils.js中实现）
(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return
  }

  var isShow = false, lock = false;
  var $div = $('.back-to-top');

  $(document).scroll(function () {
    if (lock) return

    if ($(this).scrollTop() >= 1000) {
      if (!isShow) $div.addClass('load')
      isShow = true
    } else {
      if (isShow) {
        $div.removeClass('load')
        isShow = false
      }
    }
  })

  $div.click(function () {
    lock = true
    $div.addClass('ani-leave')

    $("html, body").animate({ scrollTop: 0 }, 800);

    setTimeout(function () {
      $div.removeClass('ani-leave').addClass('leaved')
    }, 390)

    setTimeout(function () {
      $div.addClass('ending')
    }, 120)

    setTimeout(function () {
      $div.removeClass('load')
    }, 1500);

    setTimeout(function () {
      lock = false
      isShow = false
      $div.removeClass('leaved ending')
    }, 2000);
  })
})();