<!doctype>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico"/>
	<title>Password Change | LinkedIn</title>
	<?php echo link_css('forgot_password'); ?>
</head>
<body>
	<header id="TheHeader">
		<div id="HeaderWrapper">
			<a href="#"><img id="Logo" src="http://localhost/base/assets/img/logo.png" /></a>
			<ul id="LinksList">
				<li><a id="links" href="<?php echo site_url('site/what_is_linkedin') ?>">What is LinkedIn?</a></li>
				<li><a id="links" href="<?php echo site_url('site/join_in') ?>">Join Today</a></li>
				<li><a id="links" href="<?php echo site_url('site/sign_in') ?>">Sign In</a></li>
			</ul>
		</div>
	</header>
	<section id="BodyWrapper">
		<div id="Error1" class="hidden">
			<p>Please correct the marked field(s) below.</p>
		</div>
		<div id="Error" class"shown">
			<?php echo $Error; ?>
		</div>
		<div>
			<form name="PasswordReset" id="PasswordReset" method="POST" action="<?php echo site_url('site/password_reset') ?>">
				<h1> Changing your password is simple</h1>
				<p>
					<div id="Request">Please enter your email address to get instructions.</div>
				</p>
				<div id="Error2" class="hidden">Please enter a value. </br></div>
				<p>
					<input type="email" name="email" value="" id="Passwordreset">
				</p>
				<p>
					<input type="submit" name="submit" value="Continue" id="submit">
				</p>
			</form>
		</div>
	</section>
	<footer id="FooterWrapper">
		<div id="FooterDiv">
			<p id="Copyright">
				<img id="FLogo" src="http://localhost/base/assets/img/footerlogo.png" /> 
			</p>
			<div id="DivYear">
				&copy; 2013
			</div>
			<ul>
				<li id="FirstLink"><a href="<?php echo site_url('site/user_agreement') ?>"> User Agreement </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/forgot_password') ?>"> Privacy Policy </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/forgot_password') ?>"> Community Guidelines </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/forgot_password') ?>"> Cookie Policy </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/forgot_password') ?>"> Copyright Policy </a></li>
			</ul>
		</div>
	</footer>
	<!-- To Load The Page Faster -->
	<?php echo link_js('jquery'); ?>
	<?php echo link_js('forgot_password'); ?>
</body>
</html>