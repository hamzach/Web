<!doctype>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico"/>
	<title>Sign In | LinkedIn</title>
	<?php echo link_css('sign_in'); ?>
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
		<div>
			<h1> Sign in to LinkedIn </h1>
		</div>
		<div id="Error1" class="hidden">
			<p>
				There were one or more errors in your submission. Please correct the marked fields below.
			</p>
		</div>
		<div id="Error" class"shown">
			<?php echo $Error; ?>
		</div>
		<div id="Form">
			<form name="Login" id="Login" method="POST" action="<?php echo site_url('site/validate_credentials') ?>" >
				<ul>
					<li>
						<label>Email address:</label>
						<div id="Error2" class="hidden">
							<p>
								Please enter a value.
							</p>
						</div>
						<div id="DivEmail">
							<input class="Ihidden" type="text" name="email" value="" id="email">
						</div>
					</li>
					<li>
						<label>Password:</label>
						<div id="DivPassword">
							<div id="Error3" class="hidden">
							<p>
								Please enter a password.
							</p>
						</div>
							<input class="Ihidden" type="password" name="password" value="" id="password">
							<a id="ForgetPassword" href="<?php echo site_url('site/forgot_password') ?>">Forgot password?</a>
						</div>
					</li>
					<li id="button">
						<input type="submit" name="submit" value="Sign In" id="submit">
						<div id="Join">
							or <a href="<?php echo site_url('site/join_in') ?>">Join LinkedIn</a>
						</div>
					</li>
				</ul>
			</form>
		</div>
	</section>
	<footer id="FooterWrapper">
		<div id="FooterDiv">
			<p id="Copyright">
				<img id="FLogo" src="http://localhost/base/assets/img/footerlogosignin.png" /> 
			</p>
			<div id="DivYear">
				&copy; 2013
			</div>
			<ul>
				<li id="FirstLink"><a href="<?php echo site_url('site/user_agreement') ?>"> User Agreement </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/sign_in') ?>"> Privacy Policy </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/sign_in') ?>"> Community Guidelines </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/sign_in') ?>"> Cookie Policy </a></li>
				<li id="FirstLink"><a href="<?php echo site_url('site/sign_in') ?>"> Copyright Policy </a></li>
			</ul>
		</div>
	</footer>
	<!-- To Load The Page Faster -->
	<?php echo link_js('jquery'); ?>
	<?php echo link_js('sign_in'); ?>
</body>
</html>