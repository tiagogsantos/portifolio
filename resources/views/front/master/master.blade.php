<html lang="pt-br">
<head>

    <!-- Meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSS Base -->
    <link rel="stylesheet" href="{{ mix_e('front/assets/css/vendor.css') }}">
    <link rel="stylesheet" href="{{ mix_e('front/assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ mix_e('front/assets/css/color-theme.css') }}">

    <title>Portifólio - Tiago Gonçalves</title>

    <meta name="description" content="Portifólio do Tiago Gonçalves, desenvolvedor Web e Designer Gráfico." />

    @yield('stylesheet')

</head>
<body>

@include('front.includes.header')

@yield('content')

@include('front.includes.footer')


<script src="{{ mix_e('front/assets/js/vendor.js') }}"></script>
<script src="{{ mix_e('front/assets/js/main.js') }}"></script>
@yield('scripts')

<script src="https://maps.google.com/maps/api/js?sensor=false"></script>

<script src="setting/main-demo.js"></script>

</body>
</html>
