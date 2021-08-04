# Configuración de NodeJS,ExpressJS con MongoDB 

Para configurar un proyecto con NodeJs, debe tenerse clara la estructura del proyecto. Es importante separar las responsabilidades del Backend y del FrontEnd

El BackEnd de un proyecto es la parte lógica que permite que todas las acciones solicitadas en una página web sean ejecutadas correctamente. El trabajo que realiza, se encuentra del lado del servidor y procesa la información recibida a través del FrontEnd.

El FrontEnd de un proyecto es la parte visual y es la que permite al usuario interactuar con una aplicación.

###1. Archivo .gitignore
Es un archivo de texto en el cual se le indica a Git qué archivos o carpetas ignorar en un proyecto y que no sea necesario almacenarlas en un repositorio.
Este archivo se edita según sea necesario. Cada nueva línea debe incluir un archivo o carpeta adicional requiera ser omitido por Git. Debe crearse en la raíz del proyecto.

En este caso, el proyecto se encuentra en una carpeta raíz, con dos subcarpetas:


		DianaTrianaScrumBoard
			|   backend
			|   frontend

El archivo .gitignore se ubicará por fuera de las carpetas backend y frontend y contendrá las siguientes líneas:

```
/backend/node_modules
/frontend/node_modules