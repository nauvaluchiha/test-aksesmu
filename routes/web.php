<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/', function () {

    $products = \App\Models\Product::all();

    return view('main', compact('products'));
});

Route::get('/products/partial', function () {
    $products = \App\Models\Product::all();
    
    return view('components.products-list', compact('products'));
});
