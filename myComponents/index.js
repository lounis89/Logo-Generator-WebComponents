const getBaseURL = () => {
  return new URL('.', import.meta.url);
};

class MyLogo extends HTMLElement {
  style = `
    @import url('https://fonts.googleapis.com/css?family=Arial|Arial+Black|Impact|Lucida+Sans+Unicode|Tahoma|Verdana|Courier+New|Lucida+Console|Roboto');
   
    html, body{
      }

h1 { 
  background:  linear-gradient(to top, #30cfd0 0%, #330867 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
    color: #111;  
    sans-serif; font-size: 40px; 
    font-weight: bold; letter-spacing: -1px; 
    text-align: center; 
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    
  }


    #logo {
      color:blue;
      font-size: 60px;
      border:2px solid black;
      height: 120%;
      vertical-align: middle;
      position: relative;
      margin:auto;
      display:table;
    }
    #choix {
      font-family: 'Roboto', sans-serif;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
      line-height: 2em;
      margin-top:5%;
      margin-left:5%;
      margin-right:5%;
      

  }
    .slide-in-bck-center {
    -webkit-animation: slide-in-bck-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: slide-in-bck-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .focus-in-expand {
        -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .focus-in-expand-fwd {
        -webkit-animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .tracking-in-expand {
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    .rotate-in-bottom {
      -webkit-animation: rotate-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
              animation: rotate-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }


    /* ----------------------------------------------
 * Generated by Animista on 2021-9-26 12:28:9
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation rotate-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes rotate-in-bottom {
  0% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
}
@keyframes rotate-in-bottom {
  0% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
}



    /* ----------------------------------------------
 * Generated by Animista on 2021-9-26 11:4:24
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bck-center
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bck-center {
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-bck-center {
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}

    /* ----------------------------------------------
 * Generated by Animista on 2021-9-13 11:7:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

    /* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:19:32
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand-fwd
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:22:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

    `;
  html = `

  <h1 class="title"><center>Créateur de Logo </h1></center>
  <br>
  <div id="logo">
      Master Miage
       <!-- <img src="./images/flammes.jpg" width=200> -->
      
  </div>
  <br>
    <div id="choix">
        <br>
        Couleur du texte : <input type="color" id="selecteurCouleur">
        <br>
        Taille : 5 <input type="range" val=40 min=5 max=100 id="selecteurTaille"> 100
        <br>
        Nom du Logo : <input type="text" val=40 min=5 max=100 id="nomLogo">
        <br>
        Opacité : 
        <input type="range" min="0" max="1" step="0.01" id="selecteurOpacite"> 1
        <br>
        <label>Police :</label>
        <select name="fontSelect" id="fontSelect">
        <option>Georgia</option>
        <option>Palatino Linotype</option>
        <option>Book Antiqua</option>
        <option>Times New Roman</option>
        <option>Arial</option>
        <option>Arial Black</option>
        <option>Impact</option>
        <option>Lucida Sans Unicode</option>
        <option>Tahoma</option>
        <option>Verdana</option>
        <option>Courier New</option>
        <option>Lucida Console</option></select>
        <br>
        <label>Changer l'animation</label>
        <select id="animationChanger">
        	<option value="slide-in-bck-center">Slide in Back Center</option>
	        <option value="focus-in-expand-fwd">Focus</option>
	        <option value="tracking-in-expand">Tracking in Expand</option>
          <option value="rotate-in-bottom">Rotate</option>
        </select>
        <br>
        <label for="avatar">Choisir l'image de fond: (dossier /images)</label>
        <input type="file"
               id="fond" name="fond"
               accept="image/png, image/jpeg">
        <br>
        <label>
          Couleur bordure <input id="borderColor" type="color">
        </label>
      </div>

    `;

  constructor() {
    super();
    // On crée le "shadow DOM"
    this.attachShadow({ mode: "open" });

    // récupérer les propriétés/attributs HTML
    this.couleur = this.getAttribute("couleur");
    if (!this.couleur) this.couleur = "white";

    //console.log("couleur récupérée = " + this.couleur);

    this.text = this.getAttribute("text");
    this.opacity = this.getAttribute("opacite");
    console.log(this.opacity)
    this.animationClass = this.getAttribute("animation");
    this.controls = this.getAttribute("controls");
    this.size = this.getAttribute("size");
    this.logo = this.getAttribute("nomLogo")
  }

  connectedCallback() {
    // ici on instancie l'interface graphique etc.
    this.shadowRoot.innerHTML = `<style>${this.style}</style>`
      + this.html;

    this.logo = this.shadowRoot.querySelector("#logo");
    // affecter les valeurs des attributs à la création
    this.logo.style.color = this.couleur;
    this.logo.classList.add(this.animationClass);
    this.declareEcouteurs();

    // On modifie les URLs relatifs
    this.fixRelativeURLs();
  }

  fixRelativeURLs() {
    let images = this.shadowRoot.querySelectorAll('img');
    images.forEach((e) => {
      console.log("dans le foreach")
      let imagePath = e.getAttribute('src');
      e.src = getBaseURL() + '/' + imagePath;
    });

    console.log(getBaseURL() + "images/pexels-fiona-art.jpg")
    this.logo.style.background = "url(" + getBaseURL() + "images/pexels-fiona-art.jpg)";
    this.logo.style.backgroundSize = "cover";
  }

  declareEcouteurs() {
    this.shadowRoot.querySelector("#selecteurCouleur")
      .addEventListener("input", (event) => {
        this.changeCouleur(event.target.value);
      });

      this.shadowRoot.querySelector("#borderColor")
      .addEventListener("input", (event) => {
        this.updateBorderColor(event.target.value);
      });

      this.shadowRoot.querySelector("#fond")
      .addEventListener("change", (event) => {
        this.updateImage(event.target.value);
      });

    this.shadowRoot.querySelector("#selecteurTaille")
      .addEventListener("input", (event) => {
        this.changeSize(event.target.value);
      });

    this.shadowRoot.querySelector("#selecteurOpacite")
      .addEventListener("input", (event) => {
        this.updateOpacity(event.target.value);
      });

    this.shadowRoot.querySelector("#nomLogo")
      .addEventListener("input", (event) => {
        this.changeNomLogo(event.target.value);
      });

    this.shadowRoot.querySelector("#animationChanger")
      .addEventListener("change", (event) => {
        this.updateAnimation(event.target.value);
      });

    this.shadowRoot.querySelector("#fontSelect")
      .addEventListener("change", (event) => {
        this.fontSelected(event.target.value);
      });
  }

  // Fonction
  changeCouleur(val) {
    this.logo.style.color = val;

  }
  

  changeSize(val) {
    this.logo.style.fontSize = val + "px";
  }

  updateBorderColor(val) {
    this.logo.style.borderColor  = val;
  }

  changeNomLogo(val) {
    if (val == "") {
      this.logo.textContent = "Master Miage"
    }
    else {
      this.logo.textContent = val;
    }
  }

  fontSelected(val) {
    this.logo.style.fontFamily = val;
    this.shadowRoot.getElementById("fontSelect").value = val
  }

  updateOpacity(val) {
    console.log(this.logo.style.opacity)
    this.logo.style.opacity = val;
  }
  
  updateAnimation(val){
    this.logo.classList.remove(this.animationClass)
    this.logo.classList.add(val)
  }
  
  updateImage(val){
  let file_array = val.split("\\");
  this.logo.style.background = "url(" + getBaseURL() + "images/" + file_array[2] +")";
  this.logo.style.backgroundSize = "cover";
  }



}

customElements.define("my-logo", MyLogo);
