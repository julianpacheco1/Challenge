# challenge-dru

## Empezando

Este FrontEnd esta conectado a un Backend que es necesario para poder operar

### Instalación

## Follow these steps

1. Clona el repositorio en tu local
   
```sh
git clone https://github.com/julianpacheco1/Challenge.git
```

```
npm install
```

## Go to Back

```
1) cd Back
2) cd api
3) npm install
```

## To raise the server

```
nodemon app.js
```
## Next
```
cd..
cd..
```

## Compiles and hot-reloads for development

```
npm run serve
```

### Technology stack

- Vue.js 2
- Vuetify
- Express
- Axios
- CSS


##Breve Roadmap

- Pagina Home, donde vamos a encontrar una navbar, un carrusel, un logo,y un footer.
En la navbar, arriba a la izquierda, encontramos un boton-link hacia "Productos"; esto nos va a renderizar una grilla de productos (relatedProducts), en forma de cards, con bastante informacion. Al pié de cada Card, hay un boton de "PRODUCTO ID", esto, nos va a renderizar la vista principal(la solicitada para el challenge), con los detalles del producto, y un carrusel al pié de la página.

## Sobre el proyecto

Tenemos un back muy simple, con un solo endpoint; donde retornamos la data necesaria para la visualizacion requerida.
En el front, nos encontramos con 4 carpetas escenciales:

1- View : Donde se renderizan todas las vistas de la app.
2- Components : Donde se encuentran los componentes que se renderizan en cada vista, y en algunos casos pueden ser reutilizables.
3- Services : En esta carpetas realizamos la llamada a la api, para poder utilizarla en los componentes necesarios.
3- Router : 

See [Configuration Reference](https://cli.vuejs.org/config/).
