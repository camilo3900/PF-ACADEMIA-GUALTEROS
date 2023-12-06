# PF-ACADEMIA
 * El desarrollo consiste en un panel administrativo para una academia. 
 * Se utilizaron rutas con lazyloadings, guards para acceso a otros modulos, pipes personalizados, peticiones a una api con el modulo httpClient y organizacion en modulos(core, shared y ferature). 

## Pasos para arrancar el proyecto:
Primero debe clonarse el repositorio del proyecto: [Links](https://github.com/camilo3900/PF-ACADEMIA.git)
Se instalan las dependencias mediante el comando: ** npm install**
Se hace inicia el servidor mediante: **json-server  api/db.json**
Se abre la app en el navegador mediante el comando: **ng serve -o --port 4200**

-----------------------
### 1. Auth:
El modulo de autenticación presenta un formulario sencillito de login, en donde se pide el correo y la password del usuario que desea ingresar. Se utilizaron el rol Admin y Usuario. El admin puede hacer las modificaciones listar, modificar, y eliminar, mientras que el Usuario no puede hacer cambios.
### 1.1 Para login: 

####  ROL ADMIN
>correo: carlos@mail.com
>password: carlos.1234

------------------------
####  ROL USUARIO
>correo: juan@email.com
>password: juan.1234


### 2. Dashboard: ### 
En el dashboard viene acompañado una toolbar con el nombre de la aplicacion y un sideBar permite cargar con lazyloadings los componentes del home, alumnos, cursos, profesores.

#### 2.1 Home:
Muestra una screen de bienvenida cada vez que se loguea una persona.
#### 2.2 Alumnos:
En este modulo muestra la tabla de alumnos que se puede listar, modificar y eliminar solo para Admin. 
#### 2.3 Cursos:
En este modulo muestra la tabla de cursos  que se pueden listar, modificar y eliminar solo para Admin.
#### 2.4 Profesores: 
En este modulo muestra la tabla de profesores que se pueden listar, modificar y eliminar solo para Admin.
#### 2.5 Inscripciones:
En este modulo se puede inscribir alumnos a los cursos disponibles.
