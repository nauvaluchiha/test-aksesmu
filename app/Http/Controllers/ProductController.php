<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::all();

        return view('main', compact('products'));
    }

    public function addProduct(ProductRequest $request): ProductResource
    {
        
        $data = $request->validated();

        $product = Product::create($data);

        return new ProductResource($product);
    }


    public function getProducts(Request $request)
    {
        $products = Product::all();

        return view('components.products-list', compact('products'));
    }

    public function editProduct(ProductRequest $request, Product $product): ProductResource
    {
        $data = $request->validated();

        $product->update($data);

        return new ProductResource($product);
    }

    public function deleteProduct(Product $product): \Illuminate\Http\JsonResponse
    {
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}
