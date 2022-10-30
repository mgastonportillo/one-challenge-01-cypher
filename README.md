<h1 align="center">ONE - Challenge: Text Encryption</h1>
<p align="center">Challenge #1 for ONE (Oracle Next Education) programme</p>
<hr>
<h2>Preview</h2>
<a align="center"><img src="https://user-images.githubusercontent.com/106234166/184077569-c258ae8f-5bc6-430a-9e03-e956263d55ec.png"></a>
<a href="https://gale-cypher.netlify.app">Live preview</a>
<hr>
<h2>What's this about?</h2>
The first challenge is an invitation to create a web application that allows the users to encrypt and decrypt text, following a set pattern of rules. The <a href="https://www.figma.com/file/trP3p5nEh7XUyB3n2bomjP/Alura-Challenge---Desaf%C3%ADo-1---L%C3%B3gica?node-id=0%3A1">prototype design</a> was delivered through Figma, but as explained within the <a href="https://trello.com/b/WTdfcewC/encriptador-de-texto-alura-challenges-one">kanban board</a> in Trello, it allows complete freedom creativity-wise.
<hr>
<h2>Instructions</h2>
<ul>
<li>Must work with lowercase characters only.</li>
<li>Characters with accents and other special characters are forbidden.</li>
<li>The user must have the ability to encrypt a text as well as to decrypt it.<br>Example:<br><pre>"catto" => "caittober"<br>"caittober" => "catto"</pre>
</li>
<li>The (web) app must provide a field for the user to write down their text, and they should always be able to decide whether they want to decrypt or to encrypt it.</li>
<li>The outcome text must be displayed on the screen.</li>
<li><b>Extra</b>: a button that copies the outcome text to the clipboard, allowing the same functionality that <code>ctrl + C</code> or the "copy" option from app menus.</li>
</ul>
<hr>
<h2>Encryption keys</h2>
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
And reverse order for decryption.
<hr>
<h2>My solution</h2>
<p>I decided to approach the project with the following characteristics in mind:</p>
<ul>
<li>Utilise the <a href="https://www.ionos.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/">Mobile First</a> paradigm.</li>
<li>Make it a responsive web app, able to work on mobile, tablets and desktop screens.</li>
<li>Practice and showcase some DOM manipulation with JavaScript.</li>
<li>Limit the container div for the outcome text to be displayed in mobile and tablet screens only if there's an outcome, and once it's generated then scroll down to display it.</li>
<li>Add a button to scruoll up on mobile and tablet screens.</li>
<li>Add custom notification messages to display errors or successful actions, using fancy animations.</li>
<li>Add a favicon.</li>
<li>Display my personal brand (gale).</li>
</ul>
<hr>
<h2>Concepts and Technologies</h2>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Vanilla</li>
<li>Strings methods</li>
<li>DOM manipulation</li>
<li>Problem solving</li>
</ul>
