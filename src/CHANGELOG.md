#Changelog

##v1.0.0 (versión inicial del proyecto)

    - Pantalla de inicio de sesión con botones ingresar, recuperar contraseña y registrarse. Campos para usuario y contraseña. Mensajes de error en caso de que sea necesario.
    - Pantalla para recuperar contraseña con información, campo para el correo, botón de enviar y botón de atrás. Mensajes de error en caso de que sea necesario.
    - Pantalla de registro con campos para los datos, * para campos obligatorios y botones de aceptar y atrás. Mensajes de error en caso de que sea necesario.
    - Pantalla de top con fotos, contadores y botones de likes y comentarios, campos para comentar, recuadros para enseñar comentarios y menú (top, desafío, mis mascotas, perfil).
    - Pantalla de desafíos con título del concurso, fotos, contadores y botones de likes y comentarios, campos para comentar, recuadros para enseñar comentarios, botón de participar y menú (top, desafío, mis mascotas, perfil).
    - Pantalla de mis mascotas con foto de perfil y nombre del usuario y de cada mascota. Botón para añadir mascotas y menú (top, desafío, mis mascotas, perfil).
    - Pantalla de perfil con foto del usuario, usuario, nombre y ubicación. Foto de cada una de sus mascotas, botón para editar perfil y menú (top, desafío, mis mascotas, perfil).
    - Pantalla para editar perfil con foto y nombre del usuario. Opciones fijas del perfil y opciones a editar, botón de atrás y menú (top, desafío, mis mascotas, perfil).



##v1.1.0

###Añadido
    - Implementación del back-end para la gestión de usuarios en las pantallas de inicio de sesión y registro. Ahora los datos de los usuarios se almacenan.
    - Guardar los likes y comentarios de un usuario (si da like/comenta y vuelve a iniciar sesión, que sigan) en top.
    - Dejar botón de like rojo si se ha dado like en top.
    - Mejorar el formato de los botones (menú inferior) top - desafio - mascotas - perfil
###Eliminado
    - Se ha eliminado el archivo 'usuarios.csv' ya que al implementar el back-end para la gestión de usuarios ya no es necesario.  

##v.1.2.0
 
###Añadido
    - Pantalla para agregar mascotas (desde el botón + de mascotas.html). En esta aparecen los campos nombre, raza,y foto.
    - Para añadir una foto, se abren los archivos del ordenador y podemos seleccionar una foto.
    - Al completar todo y darle a agregar nos informa que se ha agregado correctamente y vuelve a mascotas.html.
    - En la pantalla de mascotas podemos eliminar, con un botón, la mascota y antes de borrarla nos pide confirmación.
    - Botón de cerrar sesión en perfil.html que lleva a la pantalla de login.

##v.1.3.0
 
###Añadido
    - Editar perfil tiene opcion de editar usuario, ubicacion  -> aparecerá actualizado en perfil.html
    - Formulario para subir fotos al perfil 

##v.1.4.0
 
###Añadido
    - Opción para subir fotos al perfil con venta emergente para seleccionar la foto y su descripción.
    - Aparecen las fotos en el perfil.
    - Cada foto tiene un botón para eliminarla (mensaje de confirmación antes de borrarla).


