<?php
use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('index'); // Ensure your view is set up to load the React app
})->where('any', '.*');
