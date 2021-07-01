<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/post', 'APIController@postList');
Route::post('/createPost', 'APIController@createPost');
Route::get('/remove/post/{id}', 'APIController@removePost');
Route::get('/post/{id}', 'APIController@postDetail');

