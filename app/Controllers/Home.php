<?php

namespace App\Controllers;

class Home extends BaseController
{
	public function index()

	{
		return view('index');
	}
	public function  saveImg(){
		$request = \Config\Services::request();
		helper(['form', 'url']);
		if($this->request->isAJAX()){
			$done = $request->getPost();
			echo "<pre/>";
			print_r($done);
			die();
		}
	}

		// if ($file = $this->request->getFile('banner')) {
		// 	if ($file->isValid() && !$file->hasMoved()) {
		// 		$name = $file->getName();
		// 		$ext = $file->getClientExtension();
		// 		$newName = $file->getRandomName();
		// 		if ($file->move('upload/editImg/', $newName)) {
	// 				if($request->getPost('livecourse') == 'on'){
	// 					$post['is_live_course'] = 1;
	// 				}else{
	// 					$post['is_live_course'] = 0;
	// 				}
	// 				if ($request->getPost('is_top_course') && $request->getPost('is_top_course') == 'on') {
	// 					$post['top_course'] = 1;
	// 				} else {
	// 					$post['top_course'] = 0;
	// 				}
	// 				if ($comman->insert_data('courses', $post)) {
	// 					session()->setFlashdata('message', array(
	// 						'msg' => 'Course added successfully, Now you need to add details on page setting',
	// 						'msg_class' => 'success',
	// 					));
	// 					return redirect()->to(site_url('manage-courses'));
	// 				} else {
	// 					session()->setFlashdata('message', array(
	// 						'msg' => 'Unable to add course',
	// 						'msg_class' => 'danger',
	// 					));
	// 				}
	// 			} else {
	// 				session()->setFlashdata('message', array(
	// 					'msg' => 'Unable to upload file',
	// 					'msg_class' => 'danger',
	// 				));
	// 			}
	// 		} else {
	// 			session()->setFlashdata('message', array(
	// 				'msg' => 'File not uploaded',
	// 				'msg_class' => 'danger',
	// 			));
	// 		})
	// 	}
	// })
}
