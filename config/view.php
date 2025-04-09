<?php

return [

    /*
    |--------------------------------------------------------------------------
    | View Storage Paths
    |--------------------------------------------------------------------------
    |
    | Here you may specify an array of paths that should be checked for your
    | views. The first path will be checked first, and the others will be
    | checked in the order they are listed. You may also include paths
    | from other packages, if necessary.
    |
    */

    'paths' => [
        resource_path('views'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Compiled View Path
    |--------------------------------------------------------------------------
    |
    | This option determines where all the compiled Blade templates will be
    | stored for your application. Typically, this is within the storage
    | directory. You may change this path if necessary, but it's best
    | to keep it within the storage folder for optimal performance.
    |
    */

    'compiled' => '/tmp/laravel_views',

];
