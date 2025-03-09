//TODO 3: import CSS function getMyComponentCSS()

class MyRide extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // HTML and inline style as template literals for easy modification
        const style = document.createElement('style');
        // TODO 4: Uncomment this once you successfully import the CSS function
        // style.textContent = getMyComponentCSS();

        const year = this.getAttribute('year') || 'Unknown Year';
        const make = this.getAttribute('make') || 'Unknown Make';
        const model = this.getAttribute('model') || 'Unknown Model';
        const imageUrl = this.getAttribute('image-url') || '';

        // Template for component content
        //TODO 1: set up the innerHTML of the component as follows:
        // <div class="simple-card">
        //         <hgroup>
        //         <p class="year">${year}</p>
        //         <h2 class="model">${make} ${model}</h2>
        //         </hgroup>
        //         <img src="${imageUrl}" alt="${make} ${model}">
        //     </div>
        // also have somewhere to append style to

        //TODO 2: Uncomment this once you have the HTML set up
        // this.querySelector('.simple-card').addEventListener('click', () => this.doSomething());

    }
    doSomething() {
        //TODO 6: set up const event as a new CustomEvent, which will bubble up to the DOM root
        // 02-event-delegation.html may help with this (see line 58) but you won't need message or detail
        //dont forget to add this.dispatchEvent(event) at the end
    }
}

// Define the custom element
console.log("custom element defined");
customElements.define('my-ride', MyRide);