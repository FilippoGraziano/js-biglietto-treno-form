//r calcolo prezzo biglietto con sconti per età

const form = document.querySelector(`form`)
const kmInput = form.elements.km
const ageInput = form.elements.age
const ticketPrice = document.getElementById(`ticket-price`)
const inputtedKm = document.getElementById(`inputted-km`)
const inputtedAge = document.getElementById(`inputted-age`)

form.addEventListener(`submit`, event => {

    event.preventDefault()

    //r calcolo prezzo
    const cleanAge = parseInt(ageInput.value);
    const cleanKm = parseInt(kmInput.value);
    const priceForKm = 0.21;
    let totalPrice = cleanKm * priceForKm

    if (cleanAge < 18) totalPrice -= (0.2 * totalPrice)
    else if (cleanAge > 65) totalPrice -= (0.4 * totalPrice)
    else totalPrice;

    //r   € value
    totalPrice = totalPrice.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'EUR',
    });

    //r gestione Km
    inputtedKm.innerHTML = `Chilometri inseriti: <span class="bedge">${cleanKm}</span>`;

    //r gestione Età
    inputtedAge.innerHTML = `Età inserita: <span class="bedge">${cleanAge}</span>`;

    //r gestione Prezzo Totale
    ticketPrice.innerHTML = `Prezzo del Biglietto: <span class="bedge">${totalPrice}</span>`;
});

//r dropdown event

const dropdownStart = document.getElementById(`dropdown-start`)
const dropdownList = document.getElementById(`dropdown-list`)
const nav = document.querySelector(`nav`)

let removeMenù = false

dropdownStart.addEventListener(`click`, () => {

    //r add and remove list item
    dropdownList.classList.toggle(`open`);

    //r change the hamburger menù with the cross, and vice versa
    if (!removeMenù) {

        dropdownStart.innerHTML = `<i class="bi bi-x"></i>`
        removeMenù = true
        console.log(`hamburger menù`)
    } else {

        dropdownStart.innerHTML = `<i class="bi bi-list"></i>`
        removeMenù = false
        console.log(`rimuovi lista`)
    }
});