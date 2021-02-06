<!doctype html>
<html class="no-js" lang="zxx">

<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Directory</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="csrf-token" content="{{ csrf_token() }}">

<link rel="stylesheet" href="{{ asset ('css/backend_css/bootstrap.min.css' ) }}">

<link rel="stylesheet" href="{{ asset ('css/backend_css/style.css' ) }}">

</head>

<body>
	<header>
	</header>

	<div class="bradcam_area bradcam_bg_2">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="bradcam_text text-center">
						<h3></h3>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="root">
	</div>

	<div class="explorer_europe list_wrap">
		<div class="container">
			<div class="row loadcontainer">

			</div>
		</div>
	</div>

	<footer class="footer">
	</footer>

<script src="{{asset('js/app.js')}}"></script>

</body>
</html>