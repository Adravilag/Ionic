# Ionic
 
* Generar un proyecto nuevo con el CLI de Ionic, con esto estamos creando un nuevo proyecto de Ionic 4 para realización de un app basado en Angular.

```
ionic start Focus360Angular blank --type=angular
```

* Generar una página donde mostrar el listado de usuarios
```
ionic g page pages/users
```

* Generar una página donde mostrar el detalle de un usuario
```
ionic g page pages/userDetails
```

* Generar un servicio para los usuarios
```
inoic g service service/user
```

* Añadimos el módulo HttpClientModule en app.mudule.ts para la realización del API REST

* Ejecutamos el servidor (localhost:PORT) 
```
inoic serve
```

* En el fichero app/app-routings.module.ts, eliminamos el path de home. Cambiamos la ruta por defecto
a la ruta de 'user' en lugar de 'home'

* Cambiamos el path: 'user-details' por user/:id. Ya que con esto obtenemos los detalles de los usuarios a partir de la clave, es decir, por su ID.

* Vamos ahora al fichero de services/user.services.ts, añadimos una variable url para el enlace del API REST:
```
https://reqres.in/api/users
```

* Añadimos los SIGUIENTE módulos módulos:
```
	import { HttpClient } from '@angular/common/http'; (para lanzar peticiones a la API)
	import { Observable } from 'rxjs'; (Para declarar método observador a un método)
	import { map } from 'rxjs/operators'; (para crear una estructura de datos del tipo mapa/hash)
```

* Añadimos un parámetro http al constructor
```
  constructor(private http: HttpClient) { }
```

* Creamos dos métodos, uno para mostra todos los usuarios y otro para mostrar información a partir de un identificador.
