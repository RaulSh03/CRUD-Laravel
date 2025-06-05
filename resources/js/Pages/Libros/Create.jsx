import React from 'react';
import { useForm, Link, Head } from '@inertiajs/react';

export default function Create() {
  const { data, setData, post, errors, processing } = useForm({
    titulo: '',
    descripcion: '',
    autor: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/libros');
  };

  return (
    <>
      <Head title="Crear Libro" />

      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Crear nuevo libro</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              value={data.titulo}
              onChange={(e) => setData('titulo', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              value={data.descripcion}
              onChange={(e) => setData('descripcion', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Autor</label>
            <input
              type="text"
              value={data.autor}
              onChange={(e) => setData('autor', e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.autor && <p className="text-red-500 text-sm mt-1">{errors.autor}</p>}
          </div>

          <div className="flex items-center justify-between">
            <Link href="/libros" className="text-gray-600 hover:underline">Cancelar</Link>
            <button
              type="submit"
              disabled={processing}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
