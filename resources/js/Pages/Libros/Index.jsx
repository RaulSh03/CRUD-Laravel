import React from 'react';
import { Link, usePage, useForm } from '@inertiajs/react';

export default function Index() {
  const { libros, flash, auth } = usePage().props;
  const { post, delete: destroy, processing } = useForm();

  const handleGenerate = () => {
    post('/libros/generate');
  };

  const handleVaciar = () => {
    if (confirm('¿Estás seguro de que quieres eliminar todos los libros?')) {
      destroy('/libros/vaciar');
    }
  };

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      destroy(`/libros/${id}`);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    post(route('logout'));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Listado de Libros</h1>
        <form onSubmit={handleLogout}>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
          >
            Cerrar sesión
          </button>
        </form>
      </div>

      {flash?.success && (
        <div className="mb-4 p-3 rounded bg-green-100 text-green-700 border border-green-300">
          {flash.success}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Link
          href="/libros/create"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Crear nuevo
        </Link>
        <button
          onClick={handleGenerate}
          disabled={processing}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow disabled:opacity-50"
        >
          {processing ? 'Generando...' : 'Generar Libros'}
        </button>
        <button
          onClick={handleVaciar}
          disabled={processing}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow disabled:opacity-50"
        >
          Vaciar tabla
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Título</th>
              <th className="px-4 py-2 border-b">Autor</th>
              <th className="px-4 py-2 border-b">Descripción</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {libros.data.map((libro) => (
              <tr key={libro.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{libro.id}</td>
                <td className="px-4 py-2 border-b font-semibold">{libro.titulo}</td>
                <td className="px-4 py-2 border-b">{libro.autor}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">
                  {libro.descripcion}
                </td>
                <td className="px-4 py-2 border-b">
                  <Link
                    href={`/libros/${libro.id}/edit`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(libro.id)}
                    disabled={processing}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {libros.data.length === 0 && (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                  No hay libros registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6 space-x-2">
        {libros.links.map((link, i) => (
          <Link
            key={i}
            href={link.url || '#'}
            className={`px-3 py-1 rounded border text-sm ${
              link.active
                ? 'bg-blue-600 text-white border-blue-600'
                : link.url
                ? 'text-blue-600 border-gray-300 hover:bg-gray-100'
                : 'text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}
