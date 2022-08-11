<h1 align="center">ONE - Challenge #1: Encriptador</h1>
<p align="center">Primer proyecto "desafío" del curso ONE (Oracle Next Education)</p>
<hr>
<h2>Preview</h2>
<a align="center"><img src="https://user-images.githubusercontent.com/106234166/184077569-c258ae8f-5bc6-430a-9e03-e956263d55ec.png"></a>
<a href="https://gale-cypher.netlify.app">https://gale-cypher.netlify.app</a>
<h2>¿De qué se trata?</h2>
El "challenge" #1 nos presenta como desafío la creación de una aplicación web que brinde a los usuarios la posibilidad de encriptar así como de desencriptar un texto ingresado por ellos. El <a href="https://www.figma.com/file/trP3p5nEh7XUyB3n2bomjP/Alura-Challenge---Desaf%C3%ADo-1---L%C3%B3gica?node-id=0%3A1">modelo de diseño</a> fue presentado en Figma pero, como se explica en el <a href="https://trello.com/b/WTdfcewC/encriptador-de-texto-alura-challenges-one">tablero de autogestión</a> proporcionado en Trello, nos brindaba total flexibilidad en ese aspecto, permitiendo dar rienda suelta a nuestra creatividad.
<h2>Consignas</h2>
<ul>
<li>Debe funcionar solo con letras minúsculas.</li>
<li>No deben ser utilizadas letras con acentos ni caracteres especiales.</li>
<li>Debe ser posible encriptar una palabra así como también devolver una palabra encriptada a su versión original.<br>Por ejemplo:<br><pre>"gato" => "gaitober"<br>"gaitober" => "gato"</pre>
</li>
<li>La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.</li>
<li>El resultado debe ser mostrado en la pantalla.</li>
<li><b>Extra</b>: un botón que copie el texto encriptado/desencriptado al portapapeles, es decir, que tenga la misma funcionalidad que <code>ctrl + C</code> o que la opción "copiar" del menú de las aplicaciones.</li>
</ul>
<h2>Llaves de encriptación</h2>
<table>
<tr>
<td align="center">e</td>
<td align="center">i</td>
<td align="center">a</td>
<td align="center">o</td>
<td align="center">u</td>
</tr>
<tr>
<td>enter</td>
<td>imes</td>
<td>ai</td>
<td>ober</td>
<td>ufat</td>
</tr>
</table>
<ul>
</ul>
Y en orden inverso para la desencriptación.
<h2>Mi propuesta</h2>
<p>Decidí encarar el proyecto con las siguientes características:</p>
<ul>
<li>Utilizar el paradigma <a href="https://www.ionos.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/">Mobile First.</a></li>
<li>Incorporar un diseño responsive que se adapte a pantallas móviles, de tablets y desktop (utilizando dos media queries).</li>
<li>Hacer que la característica responsive no sólo permita que la aplicación se adapte a diferentes tamaños de pantalla sino que también permita re-posicionar elementos dentro de otros elementos para una visualización más coherente del contenido.</li>
<li>[MODIFICAR]Limitar al módulo con el resultado de la encriptación sólo sea visible al tener contenido en pantallas móviles y de tablets, y que al generar una encriptación o desencrptación se realice un scroll down para visualizar ese resultado.</li>
<li></li>
</ul>
<h2>¿Por qué en inglés?</h2>
Mi proyecto de vida requiere que encare mis proyectos de manera universal. El inglés me acerca a mis objetivos.
<h2>Comentarios</h2>
<ul>
<li>El proyecto me pareció muy entretenido, refrescante respecto de JavaScript a tal punto que re-despertó mi curiosidad por el lenguaje.</li>
<li>La pedagogía detrás del mismo fue muy buena.</li>
</ul>
