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
    if (isNaN(cleanKm)) inputtedKm.innerText = `Dovresti mettere un numero intero nei km`;
    else inputtedKm.innerText = `Chilometri inseriti: ${cleanKm} km`;

    //r gestione Età
    if (isNaN(cleanAge)) inputtedAge.innerText = `Dovresti mettere un numero intero nell'età`;
    else inputtedAge.innerText = `Età inserita: ${cleanAge} anni`;

    //r gestione Prezzo Totale
    if (isNaN(cleanKm) || isNaN(cleanAge)) ticketPrice.innerText = `Errore`;
    else ticketPrice.innerText = `Prezzo del Biglietto: ${totalPrice}`;
});