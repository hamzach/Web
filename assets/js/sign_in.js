// JavaScript for sign_in

$('#submit').click(function(){
	// check if both are null
	if( $("#email").val()==""  && $("#password").val()=="")
	{
		$("#Error1").removeClass("hidden").addClass("shown");
		$("#Error2").removeClass("hidden").addClass("shown");
		$("#Error2 p").text("Please enter a value.");
		$("#Error3").removeClass("hidden").addClass("shown");
		$("#Error3 p").text("Please enter a password.");
		$("#email").removeClass("Ihidden").addClass("Ishown");
		$("#password").removeClass("Ihidden").addClass("Ishown");
	}
	// check if email is null & password is not null
	else if( $("#email").val()==""  && $("#password").val()!="")
	{
		$("#Error1").removeClass("hidden").addClass("shown");
		$("#Error2").removeClass("hidden").addClass("shown");
		$("#Error2 p").text("Please enter a value.");
		$("#Error3").removeClass("shown").addClass("hidden");
		$("#email").removeClass("Ihidden").addClass("Ishown");
		$("#password").removeClass("Ishown").addClass("Ihidden");
	}
	// check if email is not null & password is null
	else if( $("#email").val()!=""  && $("#password").val()=="")
	{
		$("#Error1").removeClass("hidden").addClass("shown");
		$("#Error2").removeClass("shown").addClass("hidden");
		$("#Error3").removeClass("hidden").addClass("shown");
		$("#Error3 p").text("Please enter a password.");
		$("#email").removeClass("Ishown").addClass("Ihidden");
		$("#password").removeClass("Ihidden").addClass("Ishown");
	}
	var check = 0;
	if( $("#email").val()!="" )
	{
		// check if length is less than 3
		if( $("#email").val().length < 3 ) 
		{
			$("#Error1").removeClass("hidden").addClass("shown");
			$("#Error2").removeClass("hidden").addClass("shown");
			$("#Error2 p").text("The text you provided is too short (the minimum length is 3 characters, your text contains "+$("#email").val().length+" characters).");
			$("#email").removeClass("Ihidden").addClass("Ishown");
		}
		else if( $("#email").val().length < 129 )
		{
			// Check if there are not more than 1 @ symbol
			var pos = 0;
			var num1 = 0;
			var index = -1;
			var i = -1;
			while (pos != -1)
			{
				pos = $('#email').val().indexOf("@", i + 1);
				if ( pos != -1 )
				{
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
								$("#Error2").removeClass("shown").addClass("hidden");	
								$("#email").removeClass("Ishown").addClass("Ihidden");
								check = 1;
							}
							else
							{
								$("#Error1").removeClass("hidden").addClass("shown");
								$("#Error2").removeClass("hidden").addClass("shown");
								$("#Error2 p").text("Please enter a valid email address.");	
								$("#email").removeClass("Ihidden").addClass("Ishown");
							}
						}
						else
						{
							$("#Error1").removeClass("hidden").addClass("shown");
							$("#Error2").removeClass("hidden").addClass("shown");
							$("#Error2 p").text("Please enter a valid email address.");	
							$("#email").removeClass("Ihidden").addClass("Ishown");
						}
					}
					else
					{
						$("#Error1").removeClass("hidden").addClass("shown");
						$("#Error2").removeClass("hidden").addClass("shown");
						$("#Error2 p").text("Please enter a valid email address.");	
						$("#email").removeClass("Ihidden").addClass("Ishown");
					}  	
				}
				else
				{
					$("#Error1").removeClass("hidden").addClass("shown");
					$("#Error2").removeClass("hidden").addClass("shown");
					$("#Error2 p").text("Please enter a valid email address.");	
					$("#email").removeClass("Ihidden").addClass("Ishown");
				}    
			}
			else
			{
				$("#Error1").removeClass("hidden").addClass("shown");
				$("#Error2").removeClass("hidden").addClass("shown");
				$("#Error2 p").text("Please enter a valid email address.");	
				$("#email").removeClass("Ihidden").addClass("Ishown");
			}
		}
		else
		{
			$("#Error1").removeClass("hidden").addClass("shown");
			$("#Error2").removeClass("hidden").addClass("shown");
			$("#Error2 p").text("The text you provided is too long (the maximum length is 128 characters, your text contains "+$("#email").val().length+" characters).");	
			$("#email").removeClass("Ihidden").addClass("Ishown");
		}
	}
	if ( $("#password").val()!="" )
	{
		// check if password is less than 6
		if ( $("#password").val().length < 6 )
		{
			$("#Error1").removeClass("hidden").addClass("shown");
			$("#Error3").removeClass("hidden").addClass("shown");
			$("#Error3 p").text("The password must have at least 6 characters.");
			$("#password").removeClass("Ihidden").addClass("Ishown");
		}
		// check if password is less than 251
		else if ( $("#password").val().length < 251 )
		{
			// check if email is correct
			if ( check == 1 )
			{
				$('#Error').removeClass("shown").addClass("hidden");
				return true;
			}		
			else
			{
				$("#Error1").removeClass("hidden").addClass("shown");
				$("#Error3").removeClass("shown").addClass("hidden");
				$("#Error3 p").text("Please enter a password.");
				$("#password").removeClass("Ishown").addClass("Ihidden");
				$("#Error2").removeClass("hidden").addClass("shown");
				$("#email").removeClass("Ihidden").addClass("Ishown");
			}
		}
		// check if password is more than 250
		else
		{	
			$("#Error1").removeClass("hidden").addClass("shown");
			$("#Error3").removeClass("hidden").addClass("shown");
			$("#Error3 p").text("The password must have at most 250 characters.");
			$("#password").removeClass("Ihidden").addClass("Ishown");
		}
	}

	$('#Error').removeClass("shown").addClass("hidden");
	
	return false;
});