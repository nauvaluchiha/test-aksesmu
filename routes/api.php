<?php

use Illuminate\Support\Facades\Route;

Route::post('/products', [\App\Http\Controllers\ProductController::class, 'addProduct']);
Route::get('/products', [\App\Http\Controllers\ProductController::class, 'getProducts']);
Route::put('/products/{product}', [\App\Http\Controllers\ProductController::class, 'editProduct']);
Route::delete('/products/{product}', [\App\Http\Controllers\ProductController::class, 'deleteProduct']);
