$(document).ready(function(){

	$('#bar').hide();
	$('#bar_wrapper').hide();

	$('#submit').click(function(){
		var error1 = 0 , error2 = 0 , error3 = 0 , error4 = 0;
		if($('#first_name').val() == "")
		{
			$('#fname_error').text('Please enter a value');
			error1 = 1;
		}
		else
		{
			$('#fname_error').text('');
			error1 = 0;
		}	
		if($('#last_name').val() == "")
		{
			$('#lname_error').text('Please enter a value');
			error2 = 1;
		}
		else
		{
			$('#lname_error').text('');
			error2 = 0;
		}
		var check = 0;
		if($('#email').val() == "")
		{
			$('#email_error').text('Please enter a value');
			error3 = 1;
		}
	    else if( $("#email").val()!="" )
	    {
			// check if length is less than 3
		   if( $("#email").val().length < 3 ) 
		   {
				$('#email_error').text("The text you provided is too short (the minimum length is 3 characters, your text contains "+$("#email").val().length+" characters).");
				error3 = 1;
			}
			else if( $("#email").val().length > 128 ) 
		   {
				$('#email_error').text("The text you provided is too long (the maximum length is 128 characters, your text contains "+$("#email").val().length+" characters).");
				error3 = 1;
			}
			else
			{
				// Check if there are not more than 1 @ symbol
				error3 = 1;
				var pos = 0;
				var num1 = 0;
				var index = -1;
				var i = -1;
				while (pos != -1)
				{
					pos = $('#email').val().indexOf("@", i + 1);
					if ( pos != -1 ){
						num1 += 1;
					}

					i = pos;
				}
				if ( num1 == 1 )
				{
					// Check that @ symbol & . symbol should come on other than 0 Index
					i = $('#email').val().indexOf("@");
					var j = $('#email').val().indexOf(".");
					if ( i > 0 && j > 0 )
					{
						// Check that . symbol should not come right after @ symbol
						if ( $('#email').val().indexOf(".") - 1 != i )
						{
							// Check to get last . symbol & no two . symbol could occur together
							i = $('#email').val().indexOf("@") +1;
							pos = 0;
							num1 = 0;
							var num2 = -1;
							while (pos != -1)
							{
								pos = $('#email').val().indexOf(".", i + 1);
								if ( pos != -1 )
								{
									num2 = pos;
									num1++;
									if ( $('#email').val().indexOf(".", num2 + 1) - num2 == 1 )
									{
										pos = -1;
										num1 = 555;
									}	
								}
								i = pos;
							}
							if ( num1 != 555 )
							{	
								// Check if the string exists between last . symbol & @ symbol & atleast string of 2 characters comes after last . symbol
								num1 = $('#email').val().indexOf('@');
								var num3 = $("#email").val().length;
								if ( ( num2 - num1 > 1 ) && ( num3 - num2 - 1 > 1 ) )
								{
									// Email Format Correct
									$("#email_error").text("");	
									error3 = 0;
								}
								else
								{
									$("#email_error").text("Please enter a valid email address.");	
								}
							}
							else
							{
								$("#email_error").text("Please enter a valid email address.");
							}
						}
						else
						{
							$("#email_error").text("Please enter a valid email address.");
						}  	
					}
					else
					{
						$("#email_error").text("Please enter a valid email address.");		
					}    
				}
				else
				{
					$("#email_error").text("Please enter a valid email address.");
				}
			}
		}
		if($('#password').val() == "")
		{
			$('#passwd_error').text('Please enter a value');
			error4 = 1;
		}
		else if($('#password').val().length < 6)
		{
			$('#passwd_error').text('The password you provided must have atleast 6 characters');
			error4 = 1;
		}
		else if($('#password').val().length > 250)
		{
			$('#passwd_error').text('The password you provided must have atmost 250 characters');
			error4 = 1;
		}
		else
		{
			$('#passwd_error').text('');
			error4 = 0;	
		}
		if(error1 == 1 || error2 == 1 || error3 == 1 || error4 == 1)
		{
			$('#bar').show();
			$('#bar_wrapper').show();
			return false;
		}
		else
		{
			$('#bar').hide();
			$('#bar_wrapper').hide();	
			return true;
		}
	});

});