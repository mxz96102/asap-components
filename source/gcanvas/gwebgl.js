import { Renderer } from "@antv/g-webgl"; 
import { Canvas } from "@antv/g";
import './elements'

class GWebGL extends HTMLElement {
  renderer = new Renderer();
  gElement = null;
  connectedCallback() {
    const {clientWidth, clientHeight} = this;
    const shadow = this.attachShadow({ mode: 'closed' });
    const element = document.createElement('div');
    shadow.appendChild(element)
    this.gElement = new Canvas({
      container: element,
      width: clientWidth || 0,
      height: clientHeight || 0,
      renderer: this.renderer
    });
  }
}

customElements.define('g-webgl', GWebGL);
