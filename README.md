# user control

User control es un dashboard de control de contenido de los usuarios, al ingresar se podran ver la lista completa de usuarios de los cuales podras editar información del usuario, ver sus publicaciones, eliminar publicaciones y ver sus álbums respectivos.

## Herramientas
Las herramientas utilizadas para la realización de este proyecto son:
- React js
- Redux Toolkit
- Styled components
- React hook form
- Yup
- Axios
- React router dom
- Framer motion
- Postman
- React Helmet

Para instalar las dependencias necesarias para este proyecto, ejecutar el siguiente comando:

### `yarn`

Para levantar el proyecto ejecutar;
 
 ### `yarn start`
 
 ## Login
 
 Prueba iniciando con esta credencial:
 email: tobias.funke@reqres.in
 password: contraseña123

## IMPORTANTE

En la parte de editar usuario utilice la api de reqres: update user, por lo que la petición se realiza correctamente posteriormente se hace la petición con la lista de usuarios actualizada, pero al ser datos estaticos proporcionados por la api, no se veran cambios reflejados, pero si en el estado de la petición put.
Para los posts realizo la petición de posts por id, pero al eliminar un post el arreglo se manipula de manera local, por lo que si se podra visualizar los cambios en la lista.
