$(function () {
  /*动态响应式轮播图*/
  banner();
  /*产品页签*/
  initTabs();
  /*初始化提示工具*/
  $('[data-toggle="tooltip"]').tooltip();
});

/*动态响应式轮播图*/
function banner() {

  /*准备数据 */
  var data = [{
    mImg: 'images/slide_01_640x340.jpg',
    pcImg: 'images/slide_01_2000x410.jpg'
  }, {
    mImg: 'images/slide_02_640x340.jpg',
    pcImg: 'images/slide_02_2000x410.jpg'
  }, {
    mImg: 'images/slide_03_640x340.jpg',
    pcImg: 'images/slide_03_2000x410.jpg'
  }, {
    mImg: 'images/slide_04_640x340.jpg',
    pcImg: 'images/slide_04_2000x410.jpg'
  }];

  /*动态渲染*/
  var renderHtml = function () {
    /*窗口宽度*/
    var width = $(window).width();
    /*是不是移动端*/
    var isMobile = width > 768 ? false : true;

    /*把后台数据转化成html结构  */
    var templatePointContent = $('#point_template').html();
    var templateImageContent = $('#image_template').html();

    var pointFuc = _.template(templatePointContent);
    var imageFuc = _.template(templateImageContent);

    var pointHtml = pointFuc({ list: data });
    var imageHtml = imageFuc({ list: data, isM: isMobile });

    /* 转好html结构 渲染在html页面当中*/
    //$('.carousel-indicators').html(pointHtml);
    $('.carousel-indicators').html(_.template($('#point_template').html())({ list: data }));
    $('.carousel-inner').html(imageHtml);

  }

  /*模拟多重终端*/
  $(window).on('resize', function () {
    renderHtml();
  }).trigger('resize');

  /*移动端手势滑动*/
  var startX = 0;
  var moveX = 0;
  var distanceX = 0;
  var isMove = false;

  $('.wjs_banner')
    .on('touchstart', function (e) {
      /*jquery originalEvent 是用来装移动端事件对象*/
      startX = e.originalEvent.touches[0].clientX;
    })
    .on('touchmove', function (e) {
      moveX = e.originalEvent.touches[0].clientX;
      distanceX = moveX - startX;
      isMove = true;
    })
    .on('touchend', function (e) {
      /*手势滑动的条件*/
      if (isMove && Math.abs(distanceX) > 50) {
        /*判断方向*/
        if (distanceX > 0) {
          /*上一张*/
          $('.carousel').carousel('prev');
        } else {
          /*下一张*/
          $('.carousel').carousel('next');
        }
      }

      /*重置*/
      startX = 0, moveX = 0, distanceX = 0, isMove = false;
    })

}

/*初始化页签页*/
function initTabs() {

  /*父容器 */
  var parent = $('.nav-tabs-parent');
  /*子容器*/
  var child = parent.find('ul');
  /*所有的页签*/
  var lis = child.find('li');

  /*计算ul的宽度  = 所有li的宽度只和*/
  var width = 0;

  $.each(lis, function () {
    width += $(this).outerWidth(true);
  });

  /*把宽度设置在子容器上*/
  console.log(width);
  child.width(width);

  /*初始化滑动组件*/
  wjs.iScroll({
    swipeDom: parent.get(0),
    swipeType: 'x',
    swipeDistance: 50
  });
}
