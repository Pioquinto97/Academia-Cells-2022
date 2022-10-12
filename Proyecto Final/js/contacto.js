import { LitElement, html, css } from 'lit'
import './top-nav.js'
import { estilo } from "./estilo/estilo.js";
import {links} from './links/links.js';

class Contacto extends LitElement {

    static get styles() {
        return [estilo, css` :host {
          display: block;}`]
      }

    render() {
        return [links, html`
          <top-nav></top-nav>
          <div class="container grey-text">
            <h5 class="center">Contact Us</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro 
              voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet 
              suscipit inventore unde maxime atque impedit officia nobis laboriosam!
            </p>
            <div class="divider"></div>
            <h6>Find us at:</h6>
            <ul>
              <li>123 Spicy Noodle Road</li>
              <li>Manchester, UK</li>
            </ul>
            <img src="/img/contact.jpg" alt="" srcset="">
          </div>
        `];
    }
}
customElements.define('con-tacto', Contacto);