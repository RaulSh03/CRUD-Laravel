<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LibroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Libros/Index', [
            'libros' => Libro::orderBy('id', 'asc')->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Libros/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|max:255',
            'descripcion' => 'required',
            'autor' => 'required|max:255',
        ]);

        Libro::create($request->all());

        return redirect()->route('libros.index')->with('success', 'Libro creado exitosamente.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Libro $libro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Libro $libro)
    {
      //  dd($libro);
        return Inertia::render('Libros/Edit', [
            'libro' => $libro,
        ]);
    }

    public function update(Request $request, Libro $libro)
    {
        $request->validate([
            'titulo' => 'required|max:255',
            'descripcion' => 'required',
            'autor' => 'required|max:255',
        ]);

        $libro->update($request->all());

        return redirect()->route('libros.index')->with('success', 'Libro actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Libro $libro)
    {
        $libro->delete();

        return redirect()->route('libros.index')->with('success', 'Libro eliminado correctamente.');
    }

    public function generate()
    {
        Libro::factory()->count(10)->create();
        return redirect()->route('libros.index')->with('success', 'Libros generados correctamente');
    }
    public function vaciar()
    {
        Libro::truncate();
        return redirect()->route('libros.index')->with('success', 'Libros eliminados correctamente');
    }
}
