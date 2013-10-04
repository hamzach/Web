<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico"/>
	<title>World's Largest Professional Network | LinkedIn</title>
	<?php echo link_css('home'); ?>
</head>
<body>
	<header id="TheHeader">
		<div id="HeaderWrapper">
			<div id="logo">
				<a href="#"><img src="http://localhost/base/assets/img/logo.png" /></a>
			</div>
			<ul id="header_links">
				<li><a id="links" href="<?php echo site_url('site/sign_out') ?>">Sign Out</a></li>
			</ul>
		</div>
	</header>
	<section id="body_wrapper">
		<h1><?php echo $FName; ?>, Welcome to Ur Home Page</h1>
	</section>
</body>
</html>