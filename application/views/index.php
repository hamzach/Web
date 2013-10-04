<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico"/>
	<title>World's Largest Professional Network | LinkedIn</title>
	<?php echo link_css('index'); ?>
</head>
<body>
	<header id="TheHeader">
		<div id="HeaderWrapper">
			<div id="logo">
				<a href="#"><img src="http://localhost/base/assets/img/logo.png" /></a>
			</div>
			<ul id="header_links">
				<li><a id="links" href="<?php echo site_url('site/what_is_linkedin') ?>">What is LinkedIn?</a></li>
				<li><a id="links" href="<?php echo site_url('site/join_in') ?>">Join Today</a></li>
				<li><a id="links" href="<?php echo site_url('site/sign_in') ?>">Sign In</a></li>
			</ul>
		</div>
	</header>
	<section id="body_wrapper">
		<div id="bar_wrapper">
			<div id="bar">
				<p>Please correct the marked field(s) below.</p>
			</div>
		</div>
		<div id="Error" class="error">
			<?php echo $Error; ?>
		</div>
		<div id="content">
			<h1>Over 225 million professionals use LinkedIn to exchange information, ideas and opportunities</h1>
			<ul>
				<li id="reconnect">Stay informed about your contacts and industry</li>
				<li id="answers">Find the people & knowledge you need to achieve your goals</li>
				<li id="power">Control your professional identity online</li>
			</ul>
		</div>
		<div id="form">
			<div id="form_header">
				<h2>Join LinkedIn Today</h2>
			</div>
			<div id="form_content">
				<form id="join" method="post" action="<?php echo site_url('site/create_member_index') ?>">
					<ul id="sign_up">
						<li id="sign_up_item">
							<label>First Name:</label>
							<div class="input">
								<span id="fname_error" class="error"></span>
								<input type="text" id="first_name" name="first_name" maxlength="20"/>
							</div>
						</li>
						<li>
							<label>Last Name:</label>
							<div class="input">
								<span id="lname_error" class="error"></span>
								<input type="text" id="last_name" name="last_name" maxlength="40"/>
							</div>
						</li>
						<li>
							<label>Email:</label>
							<div class="input">
								<span id="email_error" class="error"></span>
								<input type="email" id="email" name="email" maxlength="128"/>
							</div>
						</li>
						<li>
							<label>Password:</label>
							<div class="input">
								<span id="passwd_error" class="error"></span>
								<input type="password" id="password" name="password" maxlength="250"/>
							</div>
							<p id="action">6 or more characters</p>
						</li>
					</ul>
					<div id="action">
						<button type="submit" id="submit" class="button">Join Now</button>
						<a href="#agreement">*</a>
					</div>
					<p id="already">
						Already on LinkedIn?
						<a href="<?php echo site_url('site/sign_in') ?>">Sign in.</a>
					</p>
				</form>
			</div>
		</div>
		<div class="bottom_wrapper">
			<div class="bottom_content" id="search">
				<form id="search_form" action="#" method="post">
					<h3>Search for someone by name:</h3>
					<input type="text" id="first" placeholder="First Name">
					<input type="text" id="last" placeholder="Last Name">
					<button type="button" id="search_button" class="button">Go</button>
				</form>
			</div>
			<div id="smaller" class="directory">
				<p id="directory_text">LinkedIn member directory:</p>
				<a href="#">a</a>
				<a href="#">b</a>
				<a href="#">c</a>
				<a href="#">d</a>
				<a href="#">e</a>
				<a href="#">f</a>
				<a href="#">g</a>
				<a href="#">h</a>
				<a href="#">i</a>
				<a href="#">j</a>
				<a href="#">k</a>
				<a href="#">l</a>
				<a href="#">m</a>
				<a href="#">n</a>
				<a href="#">o</a>
				<a href="#">p</a>
				<a href="#">q</a>
				<a href="#">r</a>
				<a href="#">s</a>
				<a href="#">t</a>
				<a href="#">u</a>
				<a href="#">v</a>
				<a href="#">w</a>
				<a href="#">x</a>
				<a href="#">y</a>
				<a href="#">z</a>
				<a href="#">more</a><br/>
				<div id="country">
					Browse members
					<a href="<?php echo site_url('site/countries') ?>">by country</a>
				</div>
			</div>
		</div>
		<div class="agreement_wrapper" id="agreement">
			<div class="agreement_content">
				<div>
					<strong>*</strong> By joining LinkedIn, you agree to LinkedIn's
					<a href="<?php echo site_url('site/user_agreement') ?>">User Agreement</a>,
					<a href="#">Privacy Policy</a> and
					<a href="#">Cookie Policy</a>.
				</div>
			</div>
		</div>
	</section>
	<div id="footer">
		<div id="footer_wrapper">
			<ul id="footer_nav">
				<li><strong><a id="help_center" href="#">Help Center</a></strong></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Press</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Careers</a></li>
				<li><a href="#">Advertising</a></li>
				<li><a href="#">Talent Solotions</a></li>
				<li><a href="#">Tools</a></li>
				<li><a href="#">Mobile</a></li>
				<li><a href="#">Developers</a></li>
				<li><a href="#">Publishers</a></li>
				<li><a href="#">Language</a></li>
				<li id="last"><a href="#">SlideShare</a></li>
			</ul>
			<ul  id="footer_nav">
				<li><a href="#">LinkedIn Updates</a></li>
				<li><a href="#">LinkedIn Influencers</a></li>
				<li><a href="#">LinkedIn Jobs</a></li>
				<li><a href="#">Jobs Directory</a></li>
				<li><a href="#">Company Directory</a></li>
				<li><a href="#">Groups Directory</a></li>
				<li id="last"><a href="#">Title Directory</a></li>
			</ul>
			<div id="copyright">
				<div id="copy_text">&copy; 2013</div>
			</div>
			<ul id="conditions">
				<li><a href="<?php echo site_url('site/user_agreement') ?>">User Agreement</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Community Guidelines</a></li>
				<li><a href="#">Cookie Policy</a></li>
				<li id="last" class="bottom"><a href="#">Copyright Policy</a></li>
			</ul>
		</div>
	</div>
	<!-- To Load The Page Faster -->
	<?php echo link_js('jquery'); ?>
	<?php echo link_js('index'); ?>
</body>
</html>