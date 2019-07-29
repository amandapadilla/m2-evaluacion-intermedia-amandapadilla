# m2-evaluacion-intermedia-amandapadilla

Ejercicio de evaluación intermedia - Módulo 2
El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número".
Antes de empezar, tenéis que crear un nuevo repositorio en GitHub desde GitHub Classroom usando este enlace. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.
El juego consiste en que el programa genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final el jugador acierta el número.
En la parte principal, el jugador introduce un número y da al botón de "prueba". En la parte azul aparecen las pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, el juego termina.
Pasos para realizar el juego
Para realizar una versión sencilla del juego tenemos que realizar las siguientes funcionalidades desde JavaScript:

1. crear una maquetación mínima con el input, el botón, el espacio para feedback y el espacio para el contador de intentos
2. generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola (podéis usar la función de este codepen)
3. al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
5. actualizar el contador de intentos cada vez que el usuario pruebe
   Según vayáis trabajando en el ejercicio, id haciendo nuevas versiones del mismo y subid los cambios a GitHub. De esta forma podremos ver cómo vais avanzando. También publicad el resultado usando GitHub Pages (en las
   preferencias del proyecto) y poned el enlace a GitHub Pages al lado de la descripción del repo.
   ¡A jugar!
