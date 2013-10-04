<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<base href="<?php echo base_url(); ?>" />
	<link rel="icon" href="http://localhost/base/assets/img/favicon.ico">
	<title>Build Your Profile | LinkedIn</title>
	<?php echo link_css('build_profile'); ?>
</head>
<body>
	<div id="big_wrapper">
		<header id="the_header">
			<div id="logo_container">
				<a href="#"><img src="http://localhost/base/assets/img/black_logo.png"></a>
			</div>
		</header>
		<section id="main_section">
			<div id="bar_wrapper">
				<div id="bar">
					<p>Please correct the marked field(s) below.</p>
				</div>
			</div>
			<div id="main_section_header">
				<h1><span><?php echo $LName; ?></span>, let's start creating your professional profile</h1>
			</div>
			<div id="notes">
				<div id="help">
					<strong>A LinkedIn profile helps you...</strong>
					<ul>
						<li>Showcase your skills and experience</li>
						<li>Be found for new opportunities</li>
						<li>Stay in touch with colleagues and friends</li>
					</ul>
				</div>
			</div>
			<div id="form_wrapper">
				<form id="join_in" action="<?php echo site_url('site/create_profile') ?>" method="post">
					<ul id="form_items">
						<li>
							<label><abbr title="This is a required field."><em>*</em></abbr>Country</label>
							<div id="form_element">
								<div id="country_error" class="error"></div>
								<select id="country" name="country">
									<option value="Pakistan">Pakistan</option>
									<option value="Afghanistan">Afghanistan</option>
									<option value="Dubai">Dubai</option>
									<option value="India">India</option>
									<option value="Iran">Iran</option>
									<option value="Iraq">Iraq</option>
									<option value="Lebnon">Lebnon</option>
									<option value="Oman">Oman</option>
									<option value="Qatar">Qatar</option>
									<option value="Saud-i-Arabia">Saud-i-Arabia</option>
									<option value="Syria">Syria</option>
								</select>
							</div>
						</li>
						<li>
							<label>Postal Code</label>
							<div id="form_element">
								<span id="postal_error" class="error"></span>
								<input type="text" id="postal_code" name="postal_code">
							</div>
						</li>
						<li id="choice">
							<label>I am currently:</label>
							<div id="form_element">
								<span id="email_error" class="error"></span>
								<div id="inline_label">
									<label><input type="radio" id="Button1" name="user_type" value="Employed" checked="checked">Employed</label>
									<label><input type="radio" id="Button1" name="user_type" value="Job Seeker">Job Seeker</label>
									<label><input type="radio" id="Button1" name="user_type" value="Student">Student</label>
								</div>
							</div>
						</li>
						<li id="title">
							<label id="type"><abbr title="This is a required field."><em>*</em></abbr>Job Title</label>
							<div id="form_element">
								<span id="job_error" class="error"></span>
								<input type="text" id="job" name="job">
								<input type="checkbox" id="self_employed" name="self_employed"><span id="self_label">I am self-employed</span>
							</div>
						</li>
						<li id="alternative">
							<label id="comapany_lable"><abbr title="This is a required field."><em>*</em></abbr>Company</label>
							<div id="form_element">
								<span id="company_error" class="error"></span>
								<input type="text" id="company" name="company">
							</div>
						</li>
					</ul>
					<P id="submit">
						<button type="submit" id="submit">Create My Profile</button>
					</P>
					<div id="required" class="small">
						<em>*</em>indicates required fields.
					</div>
				</form>
			</div>

			<div id="clear"></div>
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
	<?php echo link_js('build_profile'); ?>
</body>
</html>