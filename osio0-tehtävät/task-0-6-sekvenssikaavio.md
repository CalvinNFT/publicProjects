## Sekvenssikaavio

Sekvenssikaavio tehty [WebSequenceDiagramsilla](https://www.websequencediagrams.com/), vaikka [Mermaid](mermaid.live) olisikin monipuolisempi ja miellyttävämpikäyttöinen.

### **Tehtävänanto**

> Tee kaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page -versiossa.



## Vastaus

````
title SPA uusi muistiinpano -- sekvenssikaavio

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
palvelin-->selain: Returns confirmation message 201
note over selain:
selain suorittaa päivityksen ja näyttää käyttäjälle päivitetyn listan.
end note
````

#### Tekijä:

_Calvin Otewa_