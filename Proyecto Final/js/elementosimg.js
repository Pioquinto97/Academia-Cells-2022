import { LitElement, html, css } from "lit";
import {estilo} from './estilo/estilo.js';
import {links} from './links/links.js';

class ElementosImg extends LitElement {

    static get styles() {
        return [estilo, css` :host {
          display: block;}`]
      }

    render() {
        return [links, html`
          <div class="recipes container grey-text text-darken-1">
            <div class="card-panel recipe white row">
              <img src="/img/dish.png" alt="recipe thumb">
              <div class="recipe-details">
                <div class="recipe-title">Edame Noodles</div>
                <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
              </div>
              <div class="recipe-delete">
                <i class="material-icons">delete_outline</i>
              </div>
            </div>
          
            <div class="card-panel recipe white row">
              <img src="/img/dish.png" alt="recipe thumb">
              <div class="recipe-details">
                <div class="recipe-title">Edame Noodles</div>
                <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
              </div>
              <div class="recipe-delete">
                <i class="material-icons">delete_outline</i>
              </div>
            </div>
          
            <div class="card-panel recipe white row">
              <img src="/img/dish.png" alt="recipe thumb">
              <div class="recipe-details">
                <div class="recipe-title">Edame Noodles</div>
                <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
              </div>
              <div class="recipe-delete">
                <i class="material-icons">delete_outline</i>
              </div>
            </div>
          
            <div class="card-panel recipe white row">
              <img src="/img/dish.png" alt="recipe thumb">
              <div class="recipe-details">
                <div class="recipe-title">Edame Noodles</div>
                <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
              </div>
              <div class="recipe-delete">
                <i class="material-icons">delete_outline</i>
              </div>
            </div>
          </div>
        `];
    }
}
customElements.define('elementos-img', ElementosImg);