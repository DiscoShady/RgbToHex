$(document).ready(function() {
    var numericField = $(".numeric");

    numericField.keydown(function (e)
    {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||     // Allow: backspace, delete, tab, escape, enter
            (e.keyCode === 65 && (e.metaKey || e.ctrlKey) === true) ||  // Keycode for Command/Ctrl + A
            (e.keyCode >= 35 && e.keyCode <= 39))                       // Allow: home, end, left, right
        {
           
            return;
        }

    
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    numericField.keyup(function()
    {
    
        if ($(this).val() > 255)
        {
            $(this).val(255);
        }

        
        if (parseInt($(this).val().length, 10) === parseInt($(this).attr('maxlength'), 10))
        {
            $(this).next(':input').focus();
        }
    });

    numericField.on("click", function() {
        event.stopPropagation();

        if ($(this).val() === "255")
        {
            $(this).val("");
        }
    });

    numericField.on("blur", function () {
        var rgbValues = $("#rgbValues");

       
        var rgbOne   = parseInt(rgbValues.find("input[name=rgb_1]").val(), 10).toString(16);
        var rgbTwo   = parseInt(rgbValues.find("input[name=rgb_2]").val(), 10).toString(16);
        var rgbThree = parseInt(rgbValues.find("input[name=rgb_3]").val(), 10).toString(16);

        
        rgbOne   = (rgbOne.length   === 1) ? "0" + rgbOne : rgbOne;
        rgbTwo   = (rgbTwo.length   === 1) ? "0" + rgbTwo : rgbTwo;
        rgbThree = (rgbThree.length === 1) ? "0" + rgbThree : rgbThree;

        
        var hexColor = "#" + rgbOne + rgbTwo + rgbThree;

        $("#hexValue").html(hexColor);
        $("#hexValue").css("color", hexColor);
    });
});