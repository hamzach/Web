$(document).ready(function(){

	$('#bar').hide();
	$('#bar_wrapper').hide();
	var exist = false;

	$('#company').focus(function(){
    	if(!($('#industry').length)) {
			$('#form_items').append("<li id='industry' style='margin-top:10px;'><label><abbr title='This is a required field.'><em>*</em></abbr>Industry</label><div id='form_element'><span id='industry_error' class='error'></span><select name='industryChooser' id='industryChooser'><option value='-' selected=''>-</option><option value='accounting'>Accounting</option><option value='Airlines'>Airlines/Aviation</option><option value='120'>Alternative Dispute Resolution</option><option value='125'>Alternative Medicine</option><option value='127'>Animation</option><option value='19'>Apparel &amp; Fashion</option><option value='50'>Architecture &amp; Planning</option><option value='111'>Arts and Crafts</option><option value='53'>Automotive</option><option value='52'>Aviation &amp; Aerospace</option><option value='41'>Banking</option><option value='12'>Biotechnology</option><option value='36'>Broadcast Media</option><option value='49'>Building Materials</option><option value='138'>Business Supplies and Equipment</option><option value='129'>Capital Markets</option><option value='54'>Chemicals</option><option value='90'>Civic &amp; Social Organization</option><option value='51'>Civil Engineering</option><option value='128'>Commercial Real Estate</option><option value='118'>Computer &amp; Network Security</option><option value='109'>Computer Games</option><option value='3'>Computer Hardware</option><option value='5'>Computer Networking</option><option value='4'>Computer Software</option><option value='48'>Construction</option><option value='24'>Consumer Electronics</option><option value='25'>Consumer Goods</option><option value='91'>Consumer Services</option><option value='18'>Cosmetics</option><option value='65'>Dairy</option><option value='1'>Defense &amp; Space</option><option value='99'>Design</option><option value='69'>Education Management</option><option value='132'>E-Learning</option><option value='112'>Electrical/Electronic Manufacturing</option><option value='28'>Entertainment</option><option value='86'>Environmental Services</option><option value='110'>Events Services</option><option value='76'>Executive Office</option><option value='122'>Facilities Services</option><option value='63'>Farming</option><option value='43'>Financial Services</option><option value='38'>Fine Art</option><option value='66'>Fishery</option></select></div></li>");
    		exist = true;
    	}
    });

	$('input:radio[name="user_type"]').change(
    	function() {
	        if ($(this).is(':checked') && $(this).val() == 'Employed') {
	        	if (!exist && ($('#industry').length)) {
	        		$('#industry').remove();
	        	}
	        	if($('#time_period').length) {
	        		$('#time_period').remove();
	        	}
	        	if($('#dates_attended').length) {
	        		$('#dates_attended').remove();
	        	}
	        	if($('#expected').length) {
	        		$('#expected').remove();
	        	}

	        	$('#type').replaceWith("<label id='type'><abbr title='This is a required field.'><em>*</em></abbr>Job Title</label>");

	        	if(!($('#self_employed').length)) {
	        		$('#title').append("<input type='checkbox' id='self_employed' name='self_employed' class='self_employed'><span id='self_label'>I am self-employed</span>");
	        	}
	        	$('#alternative').show();
	        	if(exist && !($('#industry').length)) {
	        		$('#form_items').append("<li id='industry' style='margin-top:10px;'><label><abbr title='This is a required field.'><em>*</em></abbr>Industry</label><div id='form_element'><span id='company_error' class='error'></span><select name='industryChooser' id='industryChooser'><option value='-' selected=''>-</option><option value='accounting'>Accounting</option><option value='Airlines'>Airlines/Aviation</option><option value='120'>Alternative Dispute Resolution</option><option value='125'>Alternative Medicine</option><option value='127'>Animation</option><option value='19'>Apparel &amp; Fashion</option><option value='50'>Architecture &amp; Planning</option><option value='111'>Arts and Crafts</option><option value='53'>Automotive</option><option value='52'>Aviation &amp; Aerospace</option><option value='41'>Banking</option><option value='12'>Biotechnology</option><option value='36'>Broadcast Media</option><option value='49'>Building Materials</option><option value='138'>Business Supplies and Equipment</option><option value='129'>Capital Markets</option><option value='54'>Chemicals</option><option value='90'>Civic &amp; Social Organization</option><option value='51'>Civil Engineering</option><option value='128'>Commercial Real Estate</option><option value='118'>Computer &amp; Network Security</option><option value='109'>Computer Games</option><option value='3'>Computer Hardware</option><option value='5'>Computer Networking</option><option value='4'>Computer Software</option><option value='48'>Construction</option><option value='24'>Consumer Electronics</option><option value='25'>Consumer Goods</option><option value='91'>Consumer Services</option><option value='18'>Cosmetics</option><option value='65'>Dairy</option><option value='1'>Defense &amp; Space</option><option value='99'>Design</option><option value='69'>Education Management</option><option value='132'>E-Learning</option><option value='112'>Electrical/Electronic Manufacturing</option><option value='28'>Entertainment</option><option value='86'>Environmental Services</option><option value='110'>Events Services</option><option value='76'>Executive Office</option><option value='122'>Facilities Services</option><option value='63'>Farming</option><option value='43'>Financial Services</option><option value='38'>Fine Art</option><option value='66'>Fishery</option></select></div></li>");
	        	}

	        	$('#comapany_lable').replaceWith("<label id='comapany_lable'><abbr title='This is a required field.'><em>*</em></abbr>Company</label>");
	        }



	        else if ($(this).is(':checked') && $(this).val() == 'Job Seeker') {
	        	$('#type').replaceWith("<label id='type'><abbr title='This is a required field.'><em>*</em></abbr>Most recent job title</label>");

	        	if(!($('#self_employed').length)) {
	        		$('#title').append("<input type='checkbox' id='self_employed' name='self_employed' class='self_employed'><span id='self_label'>I am self-employed</span>");
	        	}
	        	$('#alternative').show();

	        	$('#comapany_lable').replaceWith("<label id='comapany_lable'><abbr title='This is a required field.'><em>*</em></abbr>Most recent company</label>");
	        	
	        	if(!($('#industry').length)) {
	        		$('#form_items').append("<li id='industry' style='margin-top:10px;'><label><abbr title='This is a required field.'><em>*</em></abbr>Industry</label><div id='form_element'><span id='industry_error' class='error'></span><select name='industryChooser' id='industryChooser'><option value='-' selected=''>-</option><option value='accounting'>Accounting</option><option value='Airlines'>Airlines/Aviation</option><option value='120'>Alternative Dispute Resolution</option><option value='125'>Alternative Medicine</option><option value='127'>Animation</option><option value='19'>Apparel &amp; Fashion</option><option value='50'>Architecture &amp; Planning</option><option value='111'>Arts and Crafts</option><option value='53'>Automotive</option><option value='52'>Aviation &amp; Aerospace</option><option value='41'>Banking</option><option value='12'>Biotechnology</option><option value='36'>Broadcast Media</option><option value='49'>Building Materials</option><option value='138'>Business Supplies and Equipment</option><option value='129'>Capital Markets</option><option value='54'>Chemicals</option><option value='90'>Civic &amp; Social Organization</option><option value='51'>Civil Engineering</option><option value='128'>Commercial Real Estate</option><option value='118'>Computer &amp; Network Security</option><option value='109'>Computer Games</option><option value='3'>Computer Hardware</option><option value='5'>Computer Networking</option><option value='4'>Computer Software</option><option value='48'>Construction</option><option value='24'>Consumer Electronics</option><option value='25'>Consumer Goods</option><option value='91'>Consumer Services</option><option value='18'>Cosmetics</option><option value='65'>Dairy</option><option value='1'>Defense &amp; Space</option><option value='99'>Design</option><option value='69'>Education Management</option><option value='132'>E-Learning</option><option value='112'>Electrical/Electronic Manufacturing</option><option value='28'>Entertainment</option><option value='86'>Environmental Services</option><option value='110'>Events Services</option><option value='76'>Executive Office</option><option value='122'>Facilities Services</option><option value='63'>Farming</option><option value='43'>Financial Services</option><option value='38'>Fine Art</option><option value='66'>Fishery</option></select></div></li>");
	        	}
	        	if($('#dates_attended').length) {
	        		$('#dates_attended').remove();
	        	}
	        	if($('#expected').length) {
	        		$('#expected').remove();
	        	}
	        	if(!($('#time_period').length)) {
	        		$('#form_items').append("<li id='time_period' style='margin-top:10px;'><label><abbr title='This is a required field.'><em>*</em></abbr>Time period</label><div id='form_element'><span id='date_error' class='error'></span><select class='dates' name='timefrom' id='timefrom'><option value='-'>-</option><option value='2013'>2013</option><option value='2012'>2012</option><option value='2011'>2011</option><option value='2010'>2010</option><option value='2009'>2009</option><option value='2008'>2008</option><option value='2007'>2007</option><option value='2006'>2006</option><option value='2005'>2005</option><option value='2004'>2004</option><option value='2003'>2003</option><option value='2002'>2002</option><option value='2001'>2001</option><option value='2000'>2000</option><option value='1999'>1999</option><option value='1998'>1998</option><option value='1997'>1997</option><option value='1996'>1996</option><option value='1995'>1995</option><option value='1994'>1994</option><option value='1993'>1993</option><option value='1992'>1992</option><option value='1991'>1991</option><option value='1990'>1990</option><option value='1989'>1989</option><option value='1988'>1988</option><option value='1987'>1987</option><option value='1986'>1986</option><option value='1985'>1985</option><option value='1984'>1984</option><option value='1983'>1983</option><option value='1982'>1982</option><option value='1981'>1981</option><option value='1980'>1980</option><option value='1979'>1979</option><option value='1978'>1978</option><option value='1977'>1977</option><option value='1976'>1976</option><option value='1975'>1975</option><option value='1974'>1974</option><option value='1973'>1973</option><option value='1972'>1972</option><option value='1971'>1971</option><option value='1970'>1970</option><option value='1969'>1969</option><option value='1968'>1968</option><option value='1967'>1967</option><option value='1966'>1966</option><option value='1965'>1965</option><option value='1964'>1964</option><option value='1963'>1963</option><option value='1962'>1962</option><option value='1961'>1961</option><option value='1960'>1960</option><option value='1959'>1959</option><option value='1958'>1958</option><option value='1957'>1957</option><option value='1956'>1956</option><option value='1955'>1955</option><option value='1954'>1954</option><option value='1953'>1953</option><option value='1952'>1952</option><option value='1951'>1951</option></select><span class='between'>to</span><select class='dates' name='timeto' id='timeto'><option value='-'>-</option><option value='Present'>Present</option><option value='2013'>2013</option><option value='2012'>2012</option><option value='2011'>2011</option><option value='2010'>2010</option><option value='2009'>2009</option><option value='2008'>2008</option><option value='2007'>2007</option><option value='2006'>2006</option><option value='2005'>2005</option><option value='2004'>2004</option><option value='2003'>2003</option><option value='2002'>2002</option><option value='2001'>2001</option><option value='2000'>2000</option><option value='1999'>1999</option><option value='1998'>1998</option><option value='1997'>1997</option><option value='1996'>1996</option><option value='1995'>1995</option><option value='1994'>1994</option><option value='1993'>1993</option><option value='1992'>1992</option><option value='1991'>1991</option><option value='1990'>1990</option><option value='1989'>1989</option><option value='1988'>1988</option><option value='1987'>1987</option><option value='1986'>1986</option><option value='1985'>1985</option><option value='1984'>1984</option><option value='1983'>1983</option><option value='1982'>1982</option><option value='1981'>1981</option><option value='1980'>1980</option><option value='1979'>1979</option><option value='1978'>1978</option><option value='1977'>1977</option><option value='1976'>1976</option><option value='1975'>1975</option><option value='1974'>1974</option><option value='1973'>1973</option><option value='1972'>1972</option><option value='1971'>1971</option><option value='1970'>1970</option><option value='1969'>1969</option><option value='1968'>1968</option><option value='1967'>1967</option><option value='1966'>1966</option><option value='1965'>1965</option><option value='1964'>1964</option><option value='1963'>1963</option><option value='1962'>1962</option><option value='1961'>1961</option><option value='1960'>1960</option><option value='1959'>1959</option><option value='1958'>1958</option><option value='1957'>1957</option><option value='1956'>1956</option><option value='1955'>1955</option><option value='1954'>1954</option><option value='1953'>1953</option><option value='1952'>1952</option><option value='1951'>1951</option></select></div></li>");
	        	}
	        }

	        

	        else if ($(this).is(':checked') && $(this).val() == 'Student') {
	            $('#type').replaceWith("<label id='type'><abbr title='This is a required field.'><em>*</em></abbr>School/University</label>");
	            if ($('#industry').length) {
	        		$('#industry').remove();
	        	}
	        	if ($('#time_period').length) {
	        		$('#time_period').remove();
	        	}
	        	if ($('#self_employed').length) {
	        		$('#self_employed').remove();
	        	}
	        	if ($('#self_label').length) {
	        		$('#self_label').remove();
	        	}
	        	$('#alternative').hide();
	        	if(!($('#dates_attended').length)) {
	        		$('#form_items').append("<li id='dates_attended' style='margin-top:10px;'><label><abbr title='This is a required field.'><em>*</em></abbr>Time period</label><div id='form_element'><span id='date_error' class='error'></span><select class='dates' name='timefrom' id='timefrom'><option value='-'>-</option><option value='2013'>2013</option><option value='2012'>2012</option><option value='2011'>2011</option><option value='2010'>2010</option><option value='2009'>2009</option><option value='2008'>2008</option><option value='2007'>2007</option><option value='2006'>2006</option><option value='2005'>2005</option><option value='2004'>2004</option><option value='2003'>2003</option><option value='2002'>2002</option><option value='2001'>2001</option><option value='2000'>2000</option><option value='1999'>1999</option><option value='1998'>1998</option><option value='1997'>1997</option><option value='1996'>1996</option><option value='1995'>1995</option><option value='1994'>1994</option><option value='1993'>1993</option></select><span class='between'>to</span><select class='dates' name='timeto' id='timeto'><option value='-'>-</option><option value='Present'>Present</option><option value='2020'>2020</option><option value='2019'>2019</option><option value='2018'>2018</option><option value='2017'>2017</option><option value='2016'>2016</option><option value='2015'>2015</option><option value='2014'>2014</option><option value='2013'>2013</option><option value='2012'>2012</option><option value='2011'>2011</option><option value='2010'>2010</option><option value='2009'>2009</option><option value='2008'>2008</option><option value='2007'>2007</option><option value='2006'>2006</option><option value='2005'>2005</option><option value='2004'>2004</option><option value='2003'>2003</option><option value='2002'>2002</option><option value='2001'>2001</option><option value='2000'>2000</option><option value='1999'>1999</option><option value='1998'>1998</option><option value='1997'>1997</option><option value='1996'>1996</option><option value='1995'>1995</option><option value='1994'>1994</option><option value='1993'>1993</option></select></div></li>");
	        	}
	        	if(!($('#expected').length)) {
	        		$('#dates_attended').append("<p id='expected' class='expected'>Current students: enter your expected graduation year</p>");
	        	}
        	}
    	}
    );


	$('#submit').click(function(){
		// If job & company is null
		var error1 = 0 , error2 = 0 , error3 = 0 , error4 = 0, ierror = 0;
		if( $("#job").val()=="" || $("#company").val()=="")
		{
			if( $("#job").val()=="" )
			{ 
				$("#job_error").text("Please enter your title.");
				error1 = 1;
			}
			if( $("#company").val()=="" )
			{
				$("#company_error").text("Please enter a company.");
				error2 = 1;
			}
		}
		// If job's length is > 50
		if( $("#job").val().length > 50 )
		{
			$("#job_error").text("The maximum length is 50 characters.");
			error1 = 1;
		}
		else if( $("#job").val().length != 0 )
		{
			$("#job_error").text("");
			error1 = 0;
		}
		// If company's length is > 100
		if( $("#company").val().length > 100 )
		{
			$("#company_error").text("The maximum length is 100 characters.");
			error2 = 1;
		}
		else if( $("#company").val().length != 0 )
		{
			$("#company_error").text("");
			error2 = 0;
		}

		if ($('input[type="radio"]:checked').val() == 'Employed') {
			error3 = 0;
			error4 = 0;
		}

		if($('#industryChooser').val() == '-') {
			$('#industry_error').text("Please select an industry.");
			ierror = 1;
		}
		else {
			$('#industry_error').text("");
			ierror = 0;
		}

		if ($('input[type="radio"]:checked').val() == 'Job Seeker') {
			if($('#industryChooser').val() == '-') {
				$('#industry_error').text("Please select an industry.");
				ierror = 1;
			}
			else {
				$('#industry_error').text("");
				ierror = 0;
			}
			if($('#timefrom').val() == '-' || $('#timeto').val() == '-' || $('#timefrom').val() > $('#timeto').val()) {
				$('#date_error').text("Please select a valid time period below.");
				error4 = 1;
			}
			else {
				$('#date_error').text("");
				error4 = 0;
			}

		}

		if ($('input[type="radio"]:checked').val() == 'Student') {
			error3 = 0;
			error4 = 0;
			if( $("#job").val()=="" )
			{ 
				$("#job_error").text("Please enter your School/University.");
				error1 = 1;
			}
			else {
				$('#job_error').text("");
				error1 = 0;
			}
			if($('#timefrom').val() == '-' || $('#timeto').val() == '-' || $('#timefrom').val() > $('#timeto').val()) {
				$('#date_error').text("Please select a valid time period below.");
				error2 = 1;
			}
			else {
				$('#date_error').text("");
				error2 = 0;
			}

		}

		// Checking everything if we want to submit form or not
		if ( error1 == 0 && error2 == 0 && error3 == 0 && error4 == 0  && ierror == 0)
		{
			return true;
		}
		else
		{
			$('#bar').show();
			$("#bar_wrapper").show();
			return false;
		}
	});
});