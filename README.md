# Bienvenidos a mi porfolio ✔

Estas por hacer un fork del proyecto porfolio? El primer paso despues de descargar los archivos es usar el comando **npm install** para poder instalar todos los modules para que ande de forma correcta el proyecto✨

El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) la version 13.3.0.

## D.E.R ( Diagrama de entidad relacion)

![](/src/assets/diagrama.png)
**La DB está hecha desde netbeans (Java) y solo se uso la cardinalidad para las tablas Usuario y Rol ( Login ). El resto de tablas no tienen relación entre ellas, quiero decir es una base de datos en su mayor parte NoSQL**

## Pruebas API RestFull URL [backEnd desplegado](https://porfolioarg.herokuapp.com/)

**EndPoints ( Ahora dejo los distintos endPoints)**

## Lo siguiente trae una **Lista** de Personas (@GetRequest)
/personas/traer
## Lo siguiene **trae** una Persona por **Id** (@GetRequest)
/personas/traer/1
## Lo siguiente **edita** una Persona por **Id** (@PutMapping)
/personas/editar/1
## Lo siguiente **crea** una Persona (@PostMapping)
/personas/crear
## Lo siguiente **elimina** una Persona por **Id** (@DeleteMaping)
/personas/borrar/1
