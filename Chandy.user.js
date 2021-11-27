// ==UserScript==
// @name         Chandy
// @namespace    Chandy
// @version      0.3
// @description  Secret
// @author       You
// @match        https://kempkens-juweliere.de/*
// @download https://github.com/AStorzC24/Testing/raw/main/Chandy.user.js
// @update https://github.com/AStorzC24/Testing/raw/main/Chandy.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    var element = document.querySelector('* > main > div > div')

    if (window.location.href.indexOf("start") > -1){
    element.innerHTML = `
    <form action="/kapitel-1" method="post">
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" required pattern="[Cc]harline Hermine Viktoria Kempkens">
  </li>

  <li class="button">
    <button type="submit">Bestätigen</button>
  </li>
 </ul>
</form>`
    }
     if (window.location.href.indexOf("kapitel-1") > -1){
         element.innerHTML = `
    <div>"Sag Freund und tritt ein"</div>
    <form action="/kapitel-321" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="Antwort" required pattern="3667">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
             if (window.location.href.indexOf("kapitel-2") > -1){
         element.innerHTML = `
    <div>Wirklich Charly? Also so einfach wird das hier nicht...</div>`
     }
         if (window.location.href.indexOf("kapitel-321") > -1){
         element.innerHTML = `
    <div>"3667" führt zu welcher Zahl in der unheimlichen Villa? Hinweis: Roter </div>
    <form action="/kapitel-321" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
        if (window.location.href.indexOf("notdefined") > -1){
         element.innerHTML = `
    <div>'Suche' die Sportart, die wir auf Teneriffa gemacht haben</div>
    <form action="/3990" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="3667">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
            if (window.location.href.indexOf("3990") > -1){
         element.innerHTML = `
    <div>Und, welches Jahr hast du gefunden?</div>
    <form action="/kapitel-1900" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
})();

/**

  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email">
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>
  **/
