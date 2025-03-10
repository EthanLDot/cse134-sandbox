import { getMyComponentCSS } from './my-component-css.js';
class MyRide extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // HTML and inline style as template literals for easy modification
        const style = document.createElement('style');
        style.textContent = getMyComponentCSS();

        const year = this.getAttribute('year') || 'Unknown Year';
        const make = this.getAttribute('make') || 'Unknown Make';
        const model = this.getAttribute('model') || 'Unknown Model';
        const imageUrl = this.getAttribute('image-url') || '';

        // Template for component content
        this.innerHTML = '';
        this.appendChild(style);
        this.innerHTML += `
            <div class="simple-card">
                <hgroup>
                <p class="year">${year}</p>
                <h2 class="model">${make} ${model}</h2>
                </hgroup>
                <img src="${imageUrl}" alt="${make} ${model}">
            </div>
        `;
        this.querySelector('.simple-card').addEventListener('click', () => this.doSomething());

    }
    doSomething() {
        const event = new CustomEvent('do-something', {
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}

// Define the custom element
console.log("custom element defined");
customElements.define('my-ride', MyRide);