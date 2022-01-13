import dayjs from "dayjs";
import { ASAPComponent } from "../template";

class ASAPTime extends ASAPComponent {
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

  render() {
    this.element.textContent = this.getTime()
  }
  static get observedAttributes() {return ['format', 'name']; }
}

if (!customElements.get('asap-time')) {
  customElements.define("asap-time", ASAPTime);
}