const form = document.querySelector(`form`)
const kmInput = form.elements.km
const ageInput = form.elements.age
const ticketPrice = document.getElementById(`ticket-price`)

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

    ticketPrice.innerText = `Questo è il prezzo del bisglietto: ${totalPrice}`
});