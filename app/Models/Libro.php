<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Libro extends Model
{
    use HasFactory;

    protected $fillable = ['titulo', 'descripcion', 'autor']; // ✅


    public function vaciar()
    {
        Libro::truncate();
    }
}
