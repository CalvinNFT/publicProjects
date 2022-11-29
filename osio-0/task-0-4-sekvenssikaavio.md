## Sekvenssikaavio

Sekvenssikaavio tehty [WebSequenceDiagramsilla](https://www.websequencediagrams.com/), vaikka [Mermaid](mermaid.live) olisikin monipuolisempi ja miellyttävämpikäyttöinen.

### **Tehtävänanto**

> Tee vastaavanlainen kaavio, joka kuvaa mitä tapahtuu tilanteessa, missä käyttäjä luo uuden muistiinpanon ollessaan sivulla https://studies.cs.helsinki.fi/exampleapp/notes, eli kirjoittaa tekstikenttään jotain ja painaa nappia tallenna.


**Esimerkki**

````
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
````

## Vastaus

````
title Sekvenssikaavio

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
palvelin-->selain: 302 Found and URL redirect instructions
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: notes.html
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js
note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: data.json
palvelin-->selain: [{ content: "Käyttäjän uusi muistiinpano", date: "2022-11-28T17:43" }, ...]
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
palvelin-->selain: favicon.ico
note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
````

#### Tekijä:

_Calvin Otewa_