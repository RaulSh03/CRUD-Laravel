# CRUD


## 1. Crear el proyecto de Laravel

Primero, crea un nuevo proyecto de Laravel utilizando Composer. Luego, accede a la carpeta del proyecto.


## 2. Instalar Breeze con React e Inertia.js

Instala el paquete Laravel Breeze, que ofrece autenticación básica y la integración con Inertia.js y React.
composer require laravel/breeze --dev

## 3. Crear el modelo, la migración, el factory y el seeder

Utiliza el comando Artisan para generar el modelo de `Libro` junto con su migración y fábrica de datos .
php artisan make:model Libro -mf

## 4. Definir la estructura de la tabla en la migración

Definimos esta estructura:

        Schema::create('libros', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('autor');
            $table->string('descripcion');
            $table->timestamps();
        });

## 5. Configurar la fábrica de datos (factory)

Definimos un factory para que cree datos acorde a la base de datos.

## 6. Ajuste de los archivos existentes

Ajustar las rutas existentes en web.php quedando las que se necesite. Ademas de cambiar los archivos de react de login y register,para que te redireccione a la rutas nuevas y para evitar pantallas innecesarias.

## 7. Registrar las rutas en el archivo `web.php`

Define las rutas necesarias para el CRUD utilizando  `Route::resource('libros', LibroController::class);`. Agrúpalas dentro del middleware `auth` para que sean rutas protegidas.

## 8. Crear las páginas en React

Dentro de la carpeta `resources/js/Pages`, crea una subcarpeta con el nombre `Libros`. En ella, crea los siguientes componentes:

- **Index.jsx**: muestra la lista de registros y enlaces para crear, editar o eliminar.
- **Create.jsx**: contiene el formulario para crear un nuevo registro.
- **Edit.jsx**: contiene el formulario para editar un registro existente.

## 9. Creacion de los metodos del controller

En el controller que se creo llamas a las vistas de react y se pasa los datos de la base de datos a traves de los metodos de eloquent. A parte de crear las funciones nuevas como vaciar y generate, en el caso de vaciar se crea tambien en el model.

## 10. Probar la aplicación

Inicia el proyecto a traves del comando `php artisan serve`. Luego, accede a la aplicación en el navegador, crea un usuario, accede con él y prueba todas las funciones del CRUD:

- Crear un nuevo registro
- Ver el listado
- Editar un registro existente
- Eliminar un registro
- Generacion de multiples registros 
- Vaciar
