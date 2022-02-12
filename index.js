import states from "./cityData.js"

const inputStateSelect = document.querySelector("#stateSelect")
const inputCitiesSelect = document.querySelector("#citiesSelect")

let selectedState;

const stateOptionsMarkup = states.map(state => `
    <option value="${state.value}" >${state.title}</option>
`).join("");

inputStateSelect.insertAdjacentHTML("afterbegin", stateOptionsMarkup);

selectedState = inputStateSelect.value;

const setCitiesSelect = function () {
    inputCitiesSelect.innerHTML = "";
    const citiesOptionsMarkup = states.find(
        state => state.value === selectedState).cities.map(
            city => `
                <option value="${city.value}" >${city.title}</option>
            `).join("");

    inputCitiesSelect.insertAdjacentHTML("afterbegin", citiesOptionsMarkup)
}

setCitiesSelect()

inputStateSelect.addEventListener("change", function (e) {
    selectedState = e.target.value;
    setCitiesSelect()
})