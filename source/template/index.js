
export class ASAPComponent extends HTMLElement {
  tag = 'SPAN';
  element = null;

  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "closed"
    });
    this.element = document.createElement(this.tag);
    shadow.appendChild(this.element);
  }

  render() {}

  destroy() {}
  
  connectedCallback() {
    this.render()
  }

  static get observedAttributes() {return []; }
  attributeChangedCallback(name) {
    if (this.partRender) {
      this.partRender(name)
    } else {
      this.render();
    }
  }

  disconnectedCallback() {
      this.destroy();
      this.element.remove();
  }
}