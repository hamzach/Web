<?php

class Sign_in_model extends CI_Model{
	function validate(){
		$this->db->where('email',$this->input->post('email'));
		$this->db->where('password',$this->input->post('password'));

		$querry = $this->db->get('User');

		if ($querry->num_rows == 1)
		{
			$row = $querry->row();
			$data = array(
					'first_name' => $row->first_name,
					'last_name' => $row->last_name,
					'email' => $row->email,
					'password' => $row->password,	
					'validated' => true
					);
			$this->session->set_userdata($data);
			return true;
		}
		return false;
	}

	function create_account(){
		$this->db->where('email',$this->input->post('email'));
		$querry = $this->db->get('User');

		if ($querry->num_rows == 1)
		{
			return false;
		}
		else
		{
			$data = array(
				'first_name' => $this->input->post('first_name'),
				'last_name' => $this->input->post('last_name'),
				'email' => $this->input->post('email'),
				'password' => $this->input->post('password'),
			);

			$this->db->insert('user' , $data);
			$this->session->set_userdata($data);
						
			return true;
		}
	}

	function create_profile(){
		$data = array(
				'email' => $this->session->userdata('email'),
				'country' => $this->input->post('country'),
				'postal_code' => $this->input->post('postal_code'),
				'user_type' => $this->input->post('user_type')
			);

		$this->db->insert('profile_info' , $data);

		if( $this->input->post('user_type') =='Employed')
		{
			$data2 = array(
					'email' => $this->session->userdata('email'),
					'job_title' => $this->input->post('job'),
					'company' => $this->input->post('company'),
					'industry' => $this->input->post('industryChooser')
				);

			$this->db->insert('employed' , $data2);
		}
		else if( $this->input->post('user_type') =='Job Seeker')
		{
			$data2 = array(
					'email' => $this->session->userdata('email'),
					'most_recent_job_title' => $this->input->post('job'),
					'most_recent_company' => $this->input->post('company'),
					'start_date' => $this->input->post('timefrom'),
					'end_date' => $this->input->post('timeto'),
					'industry' => $this->input->post('industryChooser')
				);

			$this->db->insert('job_seeker' , $data2);
		}
		else if( $this->input->post('user_type') =='Student')
		{
			$data2 = array(
					'email' => $this->session->userdata('email'),
					'school/university' => $this->input->post('job'),
					'start_date' => $this->input->post('timefrom'),
					'end_date' => $this->input->post('timeto')
				);

			$this->db->insert('student' , $data2);
		}
	}

	function check_email() {
		$this->db->where('email',$this->input->post('email'));
		$querry = $this->db->get('User');

		if ($querry->num_rows == 1)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}