Nombre del proyecto: Kuna Store

## Funcionamiento de la página

* Es un e-commerce basado en venta de ropa de vestir creado para fines educativos. La tienda es una SPA (Single Page App) creada con ReactJS.

* En un inicio se muestran los productos que están en ItemListContainer, al hacer click en "detalle del producto" se muestra el ItemDetail que este a su vez tiene un contador y un botón para agregar al carrito. Estando en el carrito, se muestra el detalle de lo seleccionado con su precio total, al dar click en "ir al checkout" encontramos un formulario con validación de datos. Por último, al darle "finalizar compra" se activa un alert para redireccionar al usuario a su ticket con su numero de orden de compra que es asignado aletoriamente por firebase.

* Se insertó el contador (ItemCount) dentro de ItemDetail de manera que cada producto tenga su propio contador. 

* El botón de la marca KUNA STORE en el nav regresa al home y el menú como Polo, Polera y Zapatilla, filtra por "categoría" al hacer click.

### CartWidget

Se agregó un componente llamado CartWidget.js con su respectiva hoja de estilos en su propia carpeta /CartWidget

Este CartWidget tiene un ícono de react icon (un carrito de compras), en donde elnúmero cambia en base a los productos que se aumentan o se quitan del carrito.

Posteriormente, se montó el CartWidget dentro del component NavBar.

Un poco de la distribución para este proyecto que es relativamente pequeño:

* |--src/
* |--|--components/
* |--|--context/
* |--|--firebase/


### Librerías y lenguajes usados
* React JS v18.1.0 // Biblioteca Javascript diseñada para crear interfaces de usuario que facilita el desarrollo de aplicaciones en una sola página
* React Router Dom v-6.3.0 // Agrega enrutado a la aplicación. 
* FireBase v-9.8.1 // Se utilizó principalmente para la administración de la base de datos.
* Sweetalert v-2.1.2 // Decidí usar esta librería por que las alertas son configurables y sencilla de implementar. Se instaló SweetAlert para utilizarlo como una alert personalizada al finalizar la compra.
* Use Bootstrap v-5.1.3 para darle estilo al proyecto por que es sencillo a la hora de implementarlo. Se usó en el NavBar, a los cards del ItemListContainer, el spinner de espera y también a los botones de la página.
* Se instaló React icon v-4.3.1, Librería de iconos. Decidí utilizar esta librería por que es de facil acceso y tiene varias opciones de íconos. Se utilizó en el NavBar como un icono de carrito de compra.
* CSS3 // Lenguaje de diseño gráfico para definir y crear el estilo del e-commerce.

### Deploy
El deploy del sitio fue realizado en Netlify, se encuentra en este link => https://willowy-youtiao-57f225.netlify.app