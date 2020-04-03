<?php

class mainClass {
	public $base_url;

	function __construct() {
		$this->base_url = "http://localhost/TF2";
	}

	function header($title, $others="") {
		$header = "
		<!DOCTYPE html>
		<html>
		<head>
			<title>$title</title>
			<link rel='icon' href='$this->base_url/assets/img/icons/tf2logo.png'>

			<script src='$this->base_url/script/jquery.min.js'></script>
			<link rel='stylesheet' type='text/css' href='$this->base_url/style/bootstrap-4.3.1/dist/css/bootstrap.min.css'>
			<link rel='stylesheet' type='text/css' href='$this->base_url/style/bootstrap-4.3.1/dist/js/bootstrap.min.js'>
			<script src='$this->base_url/style/bootstrap-4.3.1/dist/js/bootstrap.min.js'></script>

			<link rel='stylesheet' type='text/css' href='$this->base_url/style/main.css'>
			<script src='$this->base_url/script/mainScript.js'></script>

			$others

		</head>
		";

		return $header;
	}
}

$mainClass = new mainClass();

?>