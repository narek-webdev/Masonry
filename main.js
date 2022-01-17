function move () {
  
  var imageHeight = [];
  var goLeft = 0;
  var goTop = 0;
  var smallHeight;

    for (var i = 0; i < $('img').length; i++) {  
      $('img').eq(i).css({
        'left': goLeft + "px",
        'top': goTop + "px"
      });
  
      goLeft += Math.trunc($(window).width() / 200) + 200;
    }
  
    for (var x = 0; x < Math.trunc($(window).width() / 200); x++) {
      imageHeight.push($('img').eq(x).height());
    }
  
    for (var z = Math.trunc($(window).width() / 200); z < $('img').length; z++) {
      smallHeight = imageHeight.indexOf(Math.min(...imageHeight));
  
      $('img').eq(z).css({
        'left': (Math.trunc($(window).width() / 200) + 200) * smallHeight,
        'top': imageHeight[smallHeight]
      });
  
      imageHeight[smallHeight] = imageHeight[smallHeight] + $('img').eq(z).height();
    }
    
}

$(document).ready(function () {
  move();
})

$(window).resize(function () {
  move();
});