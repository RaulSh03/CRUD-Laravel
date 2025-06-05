<?php

use App\Http\Controllers\LibroController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;






Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::middleware(['auth'])->group(function () {
    Route::delete('/libros/vaciar', [LibroController::class, 'vaciar'])->name('libros.vaciar');
    Route::post('/libros/generate', [LibroController::class, 'generate'])->name('libros.generate');
    Route::resource('libros', LibroController::class);
    Route::get('/', [LibroController::class, 'index'])->name('libros.index');
});

require __DIR__ . '/auth.php';
