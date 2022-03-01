# javascript-fundamentals

Notas sobre sincronismo

## Resumen

Resolvimos nuestro reto con las tres implementaciones que hemos aprendido y ahora ha llegado el momento de entender las ventajas y desventajas que tiene para nosotros El uso de callback, promesas y asyc y await en nuestros proyectos. 

## Callbacks

Esto nos permite nosotros garantizar que tenemos una función que recibe otra función y va ejecutarse sin ningún problema. Si bien esta analogía es fácil de implementar y no tiene ninguna complejidad, y también un detalle muy importante de los call back, es que son universales. Esto significa que corren en cualquier navegador, ya sea viejo o moderno, pues eso nos da la garantía de que vamos a poder utilizar sin ningún problema desventajas que podemos llegar a tener:

La composición suele ser un poco tosca y esto es como podemos tener esta estructura que nosotros tenemos y que estamos anidando cada vez más elementos. Y yo quisiera hacer una cuarta petición tendría que ni darla en dentro de este fetch data y obviamente esto se vuelve un poco complejo y llegamos al concepto de Callback Hell, el cual es más que nada, una forma en la que nosotros anidadamos una gran cantidad de callbacks, lo cual puede llegar a ser no soportado por el desarrollador que lo este viendo y pueda perderse en cómo está su composición y todos estos detalles que le van a dar garantía de leer el código que estás creando. Y recuerda, estas creando código para humanos.

Obviamente, la máquina no va a interpretar y va a hacer funcionar este código, pero cuando nosotros estemos haciendo esto que tenemos aquí es código para humanos entonces debemos de ser fácil de leer. Partiendo de esto tiene un flujo poco intuitivo que es esta parte como if, fetchData, if, fetchData, y se vuelve un poco ahí complejo nuevamente y su manejo de errores, como lo puedes ver, es if error y sino ejecutemos, if, error y ejecutemos. Esto se vuelve también un poco tedioso para nosotros por no poder manejar una excepción. Tonces ten en cuenta estas ventajas y desventajas que tienen los callbacks.

## Promesas

Es facilmente enlazable. Esa es una de las principales ventajas que tiene una promesa que yo puedo tener un then y la puedo enlazar con el return siguiente Puedo tener otro then y enlazarla con un return y así sucesivamente. Tener un de una gran cantidad de llamadas que yo pueda necesitar es un poco más fácil, intuitivo de leer y eso, obviamente, es la garantía de usar promesas. 

Es poderoso. Eso significa que nos permiten tener una gran capacidad de trabajar con asincronismo hijo. Entonces ten en cuenta que esta es una de las recomendaciones que la mayoría de los desarrolladores actualmente utilizamos para nuestros proyectos y tenerlo en cuenta.

Como esa ventaja y las desventajas que podemos llegar a tener es que no maneja excepciones, sino que tenemos un catch al final y de esta forma ahí es donde vamos a capturar nuestro error. También tenemos que tener cuidado porque podemos llegar a ser propensos errores sin nosotros, no retornamos el siguiente llamado, pues hay que tener mucho cuidado con ese detalle.

Y también hay un detalle interesante y es que requieren un polyfile (Un polyfill es un fragmento de código (generalmente JavaScript en la Web) que se utiliza para proporcionar una funcionalidad moderna en navegadores antiguos que no lo admiten de forma nativa) y fácil para funcionar en todos los navegadores Esto significa que tengo que transpilar este código con una herramienta como puede ser Babel para que pueda funcionar en todos los navegadores.  viejos y modernos, pues hay que tener en cuenta esto a la hora de trabajar con las promesas. 

## Async y Await

Obviamente podemos utilizar el tradicional try-cacth. Es algo importante porque vamos a poder manejar esas excepciones y poder trabajar fluidamente dentro de la construcción de nuestro programa. Y también un detalle interesante es que para mí son más fáciles de leer. Tienen una comprensión de decir que estoy haciendo Hay que hacer Y cómo va a suceder en este caso? También vamos a esperar a que algo sus esté sucediendo como hey espera, ejecuta esto Ya resolví ok que ejecuta. 

De esta forma el entendimiento es más fácil Partiendo de esto es tener en cuenta algo también muy particularq que es que tenemos de desventaja. Si es ese poder que podemos decir. Y qué significa esto? Que acabo de decir? Pues que tenemos que esperar por cada uno de estos llamados Entonces, si nosotros quisiéramos hacer otros llamados, tenemos que esperar a que esto suceda. 

Y bueno, como lo mencionaba con las promesas también requerimos de un pollyfill para tras Pilar. Y esto es utilizar una herramienta como Babel para convertir este código a algo que pueda funcionar o algo Hallaba escriptor función en todos los navegadores pero se infla nuevamente nuestra construcción. Entonces, ya que entiendes estos elementos de async y await y hemos repasado por cada uno, que es lo que estamos Teniendo de ventaja y desventaja Mi conclusión como tales Toma la decisión basada en este conocimiento Esto significa que en algún momento te vas a topar un call back y vas a decir lo que yo esto lo puedo volver una promesa y puedo optimizar este recurso o no hay necesidad de moverlo.

Está bien ese callback? Yo sé que existe. No está entrando en un callback hell, todo bien. Y avanzó también Obviamente, como te lo mencionaba Es preferible que tú como desarrollador, empiezas a implementar tus promesas en toda la construcción de tus proyectos y obviamente utilizar async y awaut porque te va a dar una sintaxis más amigable y vas a controlar el flujo de tu aplicación.