$(document).ready(function(){
  $("#rgb").bind("keyup blur focus", function(e) {
    e.preventDefault();
    var expre = /[^0-9 ,]/g;
    if ($(this).val().match(expre))
    $(this).val($(this).val().replace(expre,''));
  });
  $("form").submit(function(){
    var color = $("#rgb").val();
   	$(".result").html("<span>"+colorToHex('rgb('+color+')')+"</span>");
   	var tcolor = $(".result").text();
    $(".result").css("color", tcolor);
    return false;
  });
  function colorToHex(color) {
    if(color.substr(0, 1) === '#'){
      return color;
    }
    var digits = /(.*?)rgb\((\d+),? ?(\d+),? ?(\d+)\)/.exec(color);
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);

  };
})
