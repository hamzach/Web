<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico">
	<title>Upload Webmail Contacts | LinkedIn</title>
	<?php echo link_css('upload_email_contacts'); ?>
</head>
<body>
	<div id="big_wrapper">
		<header id="the_header">
			<div id="logo_container">
				<a href="#"><img src="http://localhost/base/assets/img/black_logo.png"></a>
			</div>
		</header>
		<section id="main_section">
			<div id="header">
				<h1>
					Grow your network on LinkedIn
				</h1>
				<div id="default_bar">
					<div id="progress_bar"></div>
				</div>
				<p id="progress">
					Step <strong>2</strong> of <strong>7</strong>
				</p>
			</div>
			<div id="content">
				<div id="para">
					<p id="intro">
						Get started by adding your email address.
					</p>
				</div>
				<form id="form_import" action="<?php echo site_url('site/import') ?>">
					<div id="main">
						<label>Your email: </label>
						<input type="email" name="email" id="email"/>
					</div>
					<div id="button">
						<input type="submit" id="submit" name="submit" value="Continue">
					</div>
				</form>
				<div id="note">
					<h2>
						We will not share your password or email with anyone without your permission.
					</h2>
				</div>
			</div>
			<div id="skip_step">
				<a href="#">Skip this step </a><span class='smaller'>>></span>
			</div>
		</section>
		<footer id="the_footer">
			<p id="copywrite">LinkedIn Corporation &copy; 2013</p>
			<p id="terms">
				Commercial use of this site without express authorization is prohibited.
			</p>
		</footer>
	</div>
</body>
</html>