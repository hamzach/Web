// JavaScript for forgot_password

$('#submit').click(function(){
   // check if email is null
   if( $("#Passwordreset").val() == "" )
   {
		$("#Error1").removeClass("hidden").addClass("shown");
		$("#Error2").removeClass("hidden").addClass("shown");
		$("#Request").text("Please enter your email address to get instructions.");
		$("#Error2").text("Please enter a value.");
   }
   // check if length of email is < 3 
   else if( $("#Passwordreset").val().length < 3 ) 
   {
		$("#Error1").removeClass("hidden").addClass("shown");
		$("#Error2").removeClass("hidden").addClass("shown");
		$("#Request").text("We'll send instructions to the email below.");
		$("#Error2").text("The text you provided is too short (the minimum length is 3 characters, your text contains "+$("#Passwordreset").val().length+" characters).");
	}               
	else if( $("#Passwordreset").val().length > 128 )
	{
		$("#Error1").removeClass("hidden").addClass("shown");
		$("#Error2").removeClass("hidden").addClass("shown");
		$("#Request").text("We'll send instructions to the email below.");
		$("#Error2").text("The text you provided is too long (the maximum length is 128 characters, your text contains "+$("#Passwordreset").val().length+" characters).");
	}     
	else
	{
		// Check if there are not more than 1 @ symbol
		var pos = 0;
		var num1 = 0;
		var index = -1;
		var i = -1;
		while (pos != -1)
		{
			pos = $('#Passwordreset').val().indexOf("@", i + 1);
			if ( pos != -1 )
			{
				num1 += 1;	
			}
			i = pos;
		}
		if ( num1 == 1 )
		{
			// Check that @ symbol & . symbol should come on other than 0 Index
			i = $('#Passwordreset').val().indexOf("@");
			var j = $('#Passwordreset').val().indexOf(".");
			if ( i > 0 && j > 0 )
			{
				// Check that . symbol should not come right after @ symbol
				if ( $('#Passwordreset').val().indexOf(".") - 1 != i )
				{
					// Check to get last . symbol & no two . symbol could occur together
					i = $('#Passwordreset').val().indexOf("@") +1;
					pos = 0;
					num1 = 0;
					var num2 = -1;
					while (pos != -1)
					{
						pos = $('#Passwordreset').val().indexOf(".", i + 1);
						if ( pos != -1 )
						{
							num2 = pos;
							num1++;
							if ( $('#Passwordreset').val().indexOf(".", num2 + 1) - num2 == 1 )
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
						num1 = $('#Passwordreset').val().indexOf('@');
						var num3 = $("#Passwordreset").val().length;
						if ( ( num2 - num1 > 1 ) && ( num3 - num2 - 1 >= 2 ) )
						{
							// Email Format Correct
							$("#Request").text("We'll send instructions to the email below.");
							$("#Error2").text("Correct");
							return true;
						}
						else
						{
							$("#Error1").removeClass("hidden").addClass("shown");
							$("#Error2").removeClass("hidden").addClass("shown");
							$("#Request").text("We'll send instructions to the email below.");
							$("#Error2").text("Please enter a valid email address.");	
						}
					}
					else
					{
						$("#Error1").removeClass("hidden").addClass("shown");
						$("#Error2").removeClass("hidden").addClass("shown");
						$("#Request").text("We'll send instructions to the email below.");
						$("#Error2").text("Please enter a valid email address.");	
					}
				}
				else
				{
					$("#Error1").removeClass("hidden").addClass("shown");
					$("#Error2").removeClass("hidden").addClass("shown");
					$("#Request").text("We'll send instructions to the email below.");
					$("#Error2").text("Please enter a valid email address.");	
				}  	
			}
			else
			{
				$("#Error1").removeClass("hidden").addClass("shown");
				$("#Error2").removeClass("hidden").addClass("shown");
				$("#Request").text("We'll send instructions to the email below.");
				$("#Error2").text("Please enter a valid email address.");	
			}    
		}
		else
		{
			$("#Error1").removeClass("hidden").addClass("shown");
			$("#Error2").removeClass("hidden").addClass("shown");
			$("#Request").text("We'll send instructions to the email below.");
			$("#Error2").text("Please enter a valid email address.");	
		}
	}
	return false;
});