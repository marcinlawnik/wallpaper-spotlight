<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use League\Flysystem\Dropbox\DropboxAdapter;
use League\Flysystem\Filesystem;
use Dropbox\Client;

Route::get('/', function () {
    //Display a random list of wallpapers
    $wallpapers = \App\Wallpaper::all()->shuffle()->take(35);
    return view('index')->withWallpapers($wallpapers);
});

Route::get('/search', function () {
    //Search
    return view('welcome');
});

Route::post('/search', function () {
    //Search results
    return view('welcome');
});

Route::get('/wallpaper/{id}', function ($id) {
    //Display a single wallpaper with id (hashids?)
    $hashids = new Hashids('this is my salt', 8, 'abcdefghij1234567890');

    $id = $hashids->encode(1, 2, 3);
    $numbers = $hashids->decode($id);

    var_dump($id, $numbers);

});

Route::get('/tags', function () {
    //Display alist of all tags
    return view('welcome');
});

Route::get('/tag/{tag}', function ($tag) {
    //Display all wallpapers associated with tag
    return view('welcome');
});

//Route::get('/image/{name}', function($name){
//    if(!Flysystem::has($name)) {
//        //TODO: Actual 404
//        return '404';
//    }
//    $contents = Flysystem::read($name);
//    $response = Response::make($contents, 200);
//    $response->header('Content-Type', Flysystem::getMimetype($name));
//    return $response;
//});

Route::group(['prefix' => 'a'], function () {
    Route::get('phpinfo', function () {
        phpinfo();
    });
    
    Route::get('phpinfo', function () {
        phpinfo();
    });
});
