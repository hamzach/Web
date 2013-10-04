<?php // if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class Login extends CI_Controller{

		function __construct(){
			//parent::CI_Controller();
			$this->is_logged_in();
		}

		function Home(){
			$this->load->view('home');
		}

		function is_logged_in(){
			$is_logged_in = $this->session->userdata('is_logged_in');

			if(!isset($is_logged_in) || $is_logged_in != true)
			{
				echo 'You don\'t have permission';
				die();
			}
		}
	}