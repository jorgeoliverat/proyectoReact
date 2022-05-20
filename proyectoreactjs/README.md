Nombre del proyecto: Kuna Store

* Es un e-commerce basado en venta de ropa de vestir.
* Usé Bootstrap para darle estilo al NavBar y también a los botones de la página 
* Se instalo react router dom
* Se insertó el contador (ItemCount) dentro de ItemDetail de manera que al hacer click a cualquier producto cada prenda tenga su propio contador. 
* El boton de la marca KUNA STORE en el nav regresa al home y el menú como Polo, Polera y Zapatilla, filtra por categoría de producto al hacer click.

Un poco de la distribución para este proyecto que es relativamente pequeño:

|--src/
|--|--components/
|--|--|--styles/
|--helpers/


## Creando un CartWidget

En mi caso, he creado un componente llamado CartWidget.js con su respectiva hoja de estilos en la carpeta /styles

### CartWidget

Este CartWidget tiene un ícono de react icon (un carrito de compras). En el futuro este número cambiará en base a los productos que tenga en mi carrito.

Posteriormente, monté el CartWidget dentro de mi component NavBar 