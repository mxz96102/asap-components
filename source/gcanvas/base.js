import { Canvas } from '@antv/g';

class GCanvas extends HTMLElement {
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

export default GCanvas;