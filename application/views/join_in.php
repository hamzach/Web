<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico">
	<title>Join LinkedIn | LinkedIn</title>
	<?php echo link_css('join_in'); ?>
</head>
<body>
	<div id="big_wrapper">
		<header id="the_header">
			<div id="logo_container">
				<a href="#"><img src="http://localhost/base/assets/img/black_logo.png"></a>
			</div>
			<div id="sign_in" class="smaller">
				Already on LinkedIn?
				<a href="<?php echo site_url('site/upload_email_contacts') ?>">Sign in</a>
			</div>
		</header>
		<section id="main_section">
			<div id="bar_wrapper">
				<div id="bar">
					<p>Please correct the marked field(s) below.</p>
				</div>
			</div>
			<div id="Error" class="error">
				<?php echo $Error; ?>
			</div>
			<div id="main_section_header">
				<h1>To join LinkedIn, sign up below...it's free!</h1>
			</div>
			<div id="arrow">
				<img src="http://localhost/base/assets/img/arrow.png" width="22" height="11">
			</div>
			<div id="form_wrapper">
				<form id="join_in" action="<?php echo site_url('site/create_member') ?>" method="post">
					<ul>
						<li>
							<label>First Name:</label>
							<div id="form_element">
								<div id="fname_error" class="error"></div>
								<input type="text" id="first_name" name="first_name" maxlength="20"/>
							</div>
						</li>
						<li>
							<label>Last Name:</label>
							<div id="form_element">
								<span id="lname_error" class="error"></span>
								<input type="text" id="last_name" name="last_name" maxlength="40"/>
							</div>
						</li>
						<li>
							<label>Email:</label>
							<div id="form_element">
								<span id="email_error" class="error"></span>
								<input type="email" id="email" name="email" maxlength="128"/>
							</div>
						</li>
						<li>
							<label>New Password:</label>
							<div id="form_element">
								<span id="password_error" class="error"></span>
								<input type="password" id="password" name="password" maxlength="250"/>
							</div>
							<p>6 or more characters</p>
						</li>
					</ul>
					<P id="submit">
						<button type="submit" id="submit">Join LinkedIn</button>
						<abbr title="By clicking Join LinkedIn, you are indicating that you have read, understood, and agree to LinkedIn's User Agreement and Privacy Policy">*</abbr>
					</P>
					<div id="already">
						Already on LinkedIn?
						<a href="<?php echo site_url('site/sign_in') ?>">Sign in</a>
					</div>
				</form>
			</div>
			<div id="fb_wrapper">
				<div>
					<div id="writing">
						<img src="http://localhost/base/assets/img/handwritten.png">
					</div>
					<a id="sign_up_fb" href="http://www.facebook.com">
						<span>Sign up with Facebook</span>
					</a>
					<abbr title="By clicking Join LinkedIn, you are indicating that you have read, understood, and agree to LinkedIn's User Agreement and Privacy Policy">*</abbr>
				</div>
			</div>
			<div id="agreement">
				<p>
					* By joining LinkedIn, you agree to LinkedIn's
					<a href="<?php echo site_url('site/user_agreement') ?>">User Agreement</a>,
					<a href="<?php echo site_url('site/join_in') ?>">Privacy Policy</a> and
					<a href="<?php echo site_url('site/join_in') ?>">Cookie Policy</a>
				</p>
			</div>
		</section>
		<footer id="the_footer">
			<p id="copywrite">LinkedIn Corporation &copy; 2013</p>
			<p id="terms">
				Commercial use of this site without express authorization is prohibited.
			</p>
		</footer>
	</div>
	<!-- To Load The Page Faster -->
	<?php echo link_js('jquery'); ?>
	<?php echo link_js('join_in'); ?>
</body>
</html>