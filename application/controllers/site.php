<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class Site extends CI_Controller{

		function index(){

			$this->load->helper('url');
			
			$is_logged_in = $this->session->userdata('validated');

			if( !isset($is_logged_in) || $is_logged_in != true )
			{
				$var['Error'] = "";
				$this->load->view('index' , $var);	
			}
			else
			{
				$var['FName'] = $this->session->userdata('first_name');
				$this->load->view('home' , $var);
				$this->is_logged_in();
			}
		}

		function What_is_linkedin(){
			$this->load->view('what_is_linkedin');
		}

		function Join_in(){
			$var['Error'] = "";
			$this->load->view('join_in', $var);
		}

		function Sign_in(){
			$var['Error'] = "";
			$this->load->view('sign_in', $var);
		}

		function Forgot_password(){
			$var['Error'] = "";
			$this->load->view('forgot_password', $var);
		}	

		function Home(){
			$var['FName'] = "";
			$this->load->view('home' , $var);
			$this->is_logged_in();
		}

		function Sign_out(){
			$this->session->sess_destroy();
			$this->load->view('sign_out');
		}

		function password_reset() {
			$temp['email'] = $this->input->post('email');
			$this->load->model('sign_in_model');
			$querry = $this->sign_in_model->check_email();
			if ($querry) {
				$config = array(
						'protocol' => 'smtp',
						'smtp_host' => 'ssl://smtp.googlemail.com',
						'smtp_port' => 465,
						'smtp_user' => '11l4117@gmail.com',
						'smtp_pass' => 'bilal51472'
					);

				$this->load->library('email' , $config);
				$this->email->set_newline("\r\n");

				$this->email->from('11l4117@gmail.com', 'LinkedIn');
				$this->email->to($this->input->post('email'));

				$this->email->subject('Reset Your LinkedIn Password');
				$this->email->message('Changing your password is simple. Use the given link.');

				if ( $this->email->send())
				{
					$this->check_your_email();					
				}
				else
				{
					show_error( $this->email->print_debugger() );
				}
			}
			else 
			{
				$var['Error'] = "Email does not Exists!";
				$this->load->view('forgot_password', $var);
			}
		}

		function Countries(){
			$this->load->view('countries');	
		}

		function User_agreement(){
			$this->load->view('user_agreement');	
		}

		function build_profile(){
			$this->load->view('build_profile');
		}

		function Upload_email_contacts(){
			$this->load->view('upload_email_contacts');	
		}

		function Connect_contacts(){
			$this->load->view('connect_contacts');	
		}

		function validate_credentials(){
			$this->load->model('sign_in_model');
			$querry = $this->sign_in_model->validate();

			if($querry)
			{
				$var['FName'] = $this->session->userdata('first_name');
				$this->load->view('home' , $var);
				$this->is_logged_in();
			}
			else
			{
				$var['Error'] = "Email or password was Incorrect.";
				$this->load->view('sign_in', $var);
			}
		}

		function is_logged_in(){
			$is_logged_in = $this->session->userdata('validated');

			if(!isset($is_logged_in) || $is_logged_in != true)
			{
				echo 'You don\'t have permission <br/><a href="../site/sign_in">Sign in</a>';
				die();
			}
		}

		function check_your_email(){
			$this->load->view('check_your_email');	
		}

		function Create_member(){
			$this->load->model('sign_in_model');
			$result = $this->sign_in_model->create_account();
			
			if ( $result )
			{
				$var['LName'] = $this->session->userdata('first_name');
				$this->load->view('build_profile',$var);
			}
			else
			{
				$var['Error'] = "Email already Exists!";
				$this->load->view('join_in', $var);		
			}
		}
		
		function Create_member_index(){
			$this->load->model('sign_in_model');
			$result = $this->sign_in_model->create_account();
			
			if ( $result )
			{
				$var['LName'] = $this->session->userdata('first_name');
				$this->load->view('build_profile',$var);
			}
			else
			{
				$var['Error'] = "Email already Exists!";
				$this->load->view('index', $var);		
			}
		}

		function Create_profile(){
			$this->load->model('sign_in_model');
			$this->sign_in_model->create_profile();
			$this->session->sess_destroy();
			$this->sign_in();
		}
		/*
		private function _importContacts($accountUserName, $accountPassword) {
			$this->load->library('zend');
			$this->zend->load('Zend/Loader');
			Zend_Loader::loadClass('Zend_Gdata');
			Zend_Loader::loadClass('Zend_Gdata_ClientLogin');
			Zend_Loader::loadClass('Zend_Http_Client');
			Zend_Loader::loadClass('Zend_Gdata_Query');
			Zend_Loader::loadClass('Zend_Gdata_Feed');
			
			try {
				//perform account login and set protocol version
				$client = Zend_Gdata_ClientLogin::getHttpClient($accountUserName, $accountPassword, 'cp');
				$gData = new Zend_Gdata( $client );
				$gData->setMajorProtocolVersion(3);

				//perform query and get result from feed
				$query = new Zend_Gdata_Query('http://www.google.com/m8/feeds/contacts/default/full');
				$query->startIndex = 0;
				$query->maxResults = 25; $query->setParam('orderby', 'lastmodified');
				$query->setParam('sortorder', 'descending');
				$feed = $gData->getFeed($query);
				$this->data['AccountTitle'] = $feed->title;
				$this->data['currentNumber'] = 25;
				$this->data['TotalResults'] = $feed->totalResults;
				$this->data['contactList'] = $this->_processFeedResult($feed);
			}

			catch(Exception $e) {
				die('Error: ' . $e->getMessage());
			}
		}

		function import() {
			$this->_importContacts('hamza.net@live.com', 'kuchnahimangun');
		}
		*/
	}