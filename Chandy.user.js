// ==UserScript==
// @name         Chandy
// @namespace    Chandy
// @version      1.0
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

    if (window.location.href.indexOf("/Kapitel-0") > -1){
    element.innerHTML = `
    <form action="/Kapitel-1" method="post">
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
     if (window.location.href.indexOf("/Kapitel-1") > -1){
         element.innerHTML = `
    <div>"Sag Freund und tritt ein"</div>
    <form action="/kapitel-321" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="Antwort" required pattern="3652">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
             if (window.location.href.indexOf("/Kapitel-2") > -1){
         element.innerHTML = `
    <div>Wirklich Charly? Also so einfach wird das hier nicht...</div>`
     }
         if (window.location.href.indexOf("/kapitel-321") > -1){
         element.innerHTML = `
    <div>Glückwunsch, du hast einen Besuch in der unheimlichen Villa gewonnen!</div>
    <form action="/kapitel-sport" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="2">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
            if (window.location.href.indexOf("/kapitel-sport") > -1){
         element.innerHTML = `
    <div>Welche Sportart haben wir vor unserem ersten Kuss gemacht?</div>
    <form action="/daswartoll" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="[Bb]adminton">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
        if (window.location.href.indexOf("/daswartoll") > -1){
         element.innerHTML = `
    <div>'Suche' die Sportart, die wir auf Teneriffa gemacht haben</div>
    <form action="/3990" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="1194">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
            if (window.location.href.indexOf("3990") > -1){
         element.innerHTML = `
    <div>Wie ist die Hausnummer unseres gemeinsamen Hauses?</div>
    <form action="/erst-der-Anfang" method="post">
 <ul>
  <li>
    <label for="name">Antwort:</label>
    <input type="text" id="name" name="user_name" required pattern="11">
  </li>

  <li class="button">
    <button type="submit">Sicher?</button>
  </li>
 </ul>
</form>`
     }
                if (window.location.href.indexOf("erst-der-Anfang") > -1){
         element.innerHTML = `
    <div>Nimm die Quersumme und schaue dir den Tag an, viel Erfolg!</div>`
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
