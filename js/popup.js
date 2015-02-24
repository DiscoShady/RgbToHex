$(document).ready(function(){
  $("#rgb").bind("keyup blur focus", function(e) {
    e.preventDefault();
    var expre = /[^0-9 ,]/g;
    if ($(this).val().match(expre))
    $(this).val($(this).val().replace(expre,''));
  });
  $("form").submit(function(){
    var color = $("#rgb").val();
    $(".result").html("<span class='alert alert-success'>"+colorToHex('rgb('+color+')')+"</span>");
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


    var getVal = $('#rgb').val();
    if(getVal > 9){
    	alert("lawl");
    }
  };

  $(document).ready(function() {
    $("#rgb").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 188]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            
            e.preventDefault();
        }
    });
});


})
