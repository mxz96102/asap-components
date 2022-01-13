import { Renderer } from "@antv/g-canvas"; 
import GCanvas from "./base.js";
import './elements'

class GCanvasCanvas extends GCanvas {
  renderer = new Renderer();
}

customElements.define('g-canvas', GCanvasCanvas);
