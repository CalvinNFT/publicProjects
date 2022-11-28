## Sekvenssikaavio

Sekvenssikaavio tehty [WebSequenceDiagramsilla](https://www.websequencediagrams.com/), vaikka [Mermaid](mermaid.live) olisikin monipuolisempi ja miellyttävämpikäyttöinen.

### **Tehtävänanto**

> Tee kaavio tilanteesta, jossa käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa eli muistiinpanojen Single Page App-versioon



## Vastaus

````
title SPA avaus -- sekvenssikaavio

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
palvelin-->selain: returns html page
note over selain:
selain alkaa suorittaa htlm-koodia, joka hakee css stylesheetiä (main.css) ja script tägille javascriptiä (spa.js)
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
palvelin-->selain: spa.js
note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: data.json
palvelin-->selain: [{ content: "Käyttäjän uusi muistiinpano", date: "2022-11-28T17:43" }, ...]
note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
palvelin-->selain: favicon.ico
````

#### Tekijä:

_Calvin Otewa_