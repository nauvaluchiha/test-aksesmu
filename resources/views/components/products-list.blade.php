<div class="grid grid-cols-2 xl:grid-cols-3 gap-2.5 rounded-xl bg-white p-5 max-[500px]:grid-cols-1">
    @foreach ($products as $product)
        <div class="rounded-lg border-2 border-green-600 p-4 products-list">
            <div class="">
                <p class="line-clamp-1 text-lg font-semibold">
                    {{ $product->name }}
                </p>
                <p class="line-clamp-3">
                    {{ $product->description }}
                </p>
            </div>
            <div class="flex justify-between pt-1">
                <p class="">Stok: {{ $product->stock }}</p>
                <p class="font-semibold">Rp{{ $product->price }}</p>
            </div>
            <div class="flex justify-end gap-2 pt-2">
                <button
                    class="rounded-md bg-red-400 px-3 py-1.5 text-white"
                    onclick="deleteProduct(this)"
                    data-product-id="{{ $product->id }}"
                >
                    Hapus
                </button>
                <button
                    id="product-{{ $product->id }}"
                    class="rounded-lg bg-lime-300 px-3 text-black"
                    onclick="selectProduct(this)"
                    data-product-id="{{ $product->id }}"
                    data-product-name="{{ $product->name }}"
                    data-product-description="{{ $product->description }}"
                    data-product-price="{{ $product->price }}"
                    data-product-stock="{{ $product->stock }}"
                >
                    Ubah
                </button>
            </div>
        </div>
    @endforeach

    <div
        id="products-loading"
        class="cols-span-3 col-start-2 hidden place-content-center"
    >
        <div class="flex h-32 items-center justify-center">
            <div
                class="h-28 w-28 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"
            ></div>
        </div>
    </div>

    @if ($products->isEmpty())
        <div
            class="cols-span-3 col-start-2 flex place-content-center items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-white p-4"
        >
            <div
                class="flex size-20 items-center justify-center rounded-full border-4 border-dashed border-gray-400"
            >
                <label for="name">
                    <span class="text-4xl text-gray-400">+</span>
                </label>
            </div>
        </div>
    @endif
</div>
