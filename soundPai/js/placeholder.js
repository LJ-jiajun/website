$(function(){
       handlePlaceholderForIE();
	   $('input[type="password"]').each(
      function() {
        var pwdField    = $(this);  
        var pwdVal      = pwdField.attr('placeholder');  
        var pwdId       = pwdField.attr('id');  
        // 重命名该input的id为原id后跟1
        pwdField.after('<input id="' + pwdId +'1" type="text" value='+pwdVal+' autocomplete="off" />');  
        var pwdPlaceholder = $('#' + pwdId + '1');  
        pwdPlaceholder.show();  
        pwdField.hide();  
          
        pwdPlaceholder.focus(function(){  
          pwdPlaceholder.hide();  
          pwdField.show();  
          pwdField.focus();  
        });  
          
        pwdField.blur(function(){  
          if(pwdField.val() == '') {  
            pwdPlaceholder.show();  
            pwdField.hide();  
          }  
        });  
      }
    );
});
 function handlePlaceholderForIE() {
            // placeholder attribute for ie7 & ie8
            if (jQuery.browser.msie && jQuery.browser.version.substr(0, 1) <= 9) {

                // ie7&ie8
                jQuery('input[placeholder], textarea[placeholder]').not("input[type='password']").each(function () {
                    var input = jQuery(this);
                    jQuery(input).val(input.attr('placeholder'));
                    jQuery(input).focus(function () {
                        if (input.val() == input.attr('placeholder')) {
                            input.val('');
                        }
                    });
                    jQuery(input).blur(function () {
                        if (input.val() == '' || input.val() == input.attr('placeholder')) {
                            input.val(input.attr('placeholder'));
                        }
                    });
                });
            }
        }