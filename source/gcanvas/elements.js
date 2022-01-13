import {
  Circle,
  Ellipse,
  Text,
  Rect,
  Path,
  Polygon
} from '@antv/g';

const hasOrDefine = (tag, el) => customElements.get(tag) || customElements.define(tag, el);

class GElement extends HTMLElement {
  gElement = null;
  connectedCallback() {
    if (this.parentElement.gElement) {
      const Element = this.callClass;
      const style = (Object.fromEntries(Array.from(this.attributes).map(e => [e.name, Number.isNaN(Number(e.value)) ? e.value : Number(e.value)])));
      if (this.innerText) {
        style.text = this.innerText;
      }
      this.gElement = new Element({
        style
      });
      this.parentElement.gElement.appendChild(this.gElement);
    }
  }
  static get observedAttributes() {
    return ['x', 'y', 'z', 'visibility', 'zIndex', 'cursor', 'width', 'height', 'zIndex', 'r', 'path', 'points', 'fill', 'stroke', 'opacity', 'text'];
  }
  attributeChangedCallback(name, last, val) {
    if (this.gElement) {
      this.gElement.attr(name, Number.isNaN(Number(val)) ? val : Number(val))
    }
  }
  disconnectedCallback() {
    this.gElement.remove();
    this.gElement = null
  }

}

class GCircle extends GElement {
  callClass = Circle;
}

hasOrDefine('g-circle', GCircle);

class GEllipse extends GElement {
  callClass = Ellipse;
}

hasOrDefine('g-ellipse', GEllipse);

class GText extends GElement {
  callClass = Text;
}

hasOrDefine('g-text', GText);

class GRect extends GElement {
  callClass = Rect;
}

hasOrDefine('g-rect', GRect);

class GPath extends GElement {
  callClass = Path;
}

hasOrDefine('g-path', GPath);

class GPolygon extends GElement {
  callClass = Polygon;
}

hasOrDefine('g-polygon', GPolygon);