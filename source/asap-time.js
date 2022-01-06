import dayjs from "dayjs";

class ASAPTime extends HTMLElement {
  getTime() {
    const format = this.getAttribute("format") || "YYYY-MM-DD HH:mm:ss";
    let time = this.getAttribute("time");

    if (time === null) {
      time = undefined;
    } else if (!Number.isNaN(Number(time))) {
      time = Number(time);
    }
    const result = dayjs(time).format(format);
    return result;
  }
  constructor() {
    super();
    const result = this.getTime();
    const shadow = this.attachShadow({
      mode: "closed"
    });
    this.element = document.createElement("span");
    this.element.textContent = result;
    shadow.appendChild(this.element);
  }
  static get observedAttributes() {return ['format', 'name']; }
  attributeChangedCallback(name) {
    if (['format', 'time'].includes(name)) {
      const result = this.getTime();
      this.element.textContent = result;
    }
  }
}

if (!customElements.get('asap-time')) {
  customElements.define("asap-time", ASAPTime);
}