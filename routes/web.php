<?php

use App\Http\Controllers\indexController;

Route::get('/', function () {
    return view('/index/index');
});
Route::get('subcategorii/{id}', function () {
    return view('/index/subcategorii');
});
Route::get('subcategorie/{nume}', function () {
    return view('/index/subcategorie');
});

Route::get('index','indexController@index');
Route::get('subcategoriile/{id}','indexController@viewSubcategorii');
Route::get('minmaxprice/{id}','indexController@displayMinMaxPrice');
Route::post('changeslider/{id}','indexController@changeValueSlider');
Route::get('subcategory/{nume}','indexController@viewSubcategorie');
Route::get('search/{cuvant}','SearchController@show');
Route::get('morecategories','indexController@moreCategories');
Route::get('diplaybackgroundimage/{id}','indexController@diplayBackgroundImage');
Route::get('imagesgridlist/{nume}','indexController@diplayGridList');
Route::post('openclosed/{id}','indexController@openClosedPlaces');