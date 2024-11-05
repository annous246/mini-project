const currencies = [
  "USD",
  "EURO",
  "YEN",
  "POUND",
  "AUSTRALIAN DOLLAR",
  "CANADIAN DOLLAR",
  "SWISS FRANC",
  "RENMINBI",
  "KRONA",
];
const symblos = ["$", "€", "¥", "£", "AU$", "CA$", "CHF", "CN¥", "kr"];
const ratios = [
  "0.32",
  "0.30",
  "48.96",
  "0.25",
  "0.49",
  "0.45",
  "0.28",
  "2.29",
  "3.46",
];
let currentSelection = 0;

function handleSelection(e) {
  currentSelection = e.target.value;
  currency.textContent = symblos[currentSelection];
  if (display.textContent.length) {
    display.textContent = (
      parseFloat(inp.value) * ratios[currentSelection]
    ).toPrecision(4);
  }
}

const selections = document.getElementById("selection");
const currency = document.getElementById("currency");
const inp = document.getElementById("currencyInput");
const display = document.getElementById("display");
currency.textContent = symblos[currentSelection];

if (selections) {
  for (let i = 0; i < currencies.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = currencies[i];
    selections.append(option);
  }
}

//selection dynamics
selections.addEventListener("change", (e) => handleSelection(e));

//input restrictions
inp.addEventListener("input", (e) => {
  const val = e.target.value;
  const parsed = parseFloat(val);
  if (!val.length || (!isNaN(parsed) && parsed > 0)) {
    if (!val.length) {
      display.textContent = "";
      inp.value = "";
    } else
      display.textContent = (parsed * ratios[currentSelection]).toPrecision(4);
  } else {
    alert("Valeur Input Non Valide");
    inp.value = "";
    display.textContent = "";
  }
});

//animation styles
inp.addEventListener("blur", (e) => {
  const deaditem = document.getElementById("deadItem");
  if (inp.value.length) {
    deaditem.style.setProperty(
      "transform",
      "translate(-20%, -305%)",
      "important"
    );
    deaditem.style.setProperty(
      "border-bottom",
      "0.4em solid white",
      "important"
    );
    // deaditem.style.
  } else {
    deaditem.style.removeProperty("transform");
    deaditem.style.removeProperty("border");
  }
});
