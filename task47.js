let selectPizza = document.getElementById("tipo_pizza");
let selectTamano = document.getElementById("tamaño_pizza");
let btnAnadir = document.getElementById("anyadirPizzaAComanda");
let labelPizza = document.getElementById("labelPizzaSel");
let pizzacomanda = document.getElementById("pizzaComandaLabel");
let buttonEliminar = document.getElementById("pizzaComandaEliminar");

function getselectIngredients() {
    let selected = "";
    let ids = ['i1','i2','i3','i4','i5','i6','i7','i8','i9','i10','i11'];

    for(let i = 0; i < ids.length; i++) {
        let checkbox = document.getElementById(ids[1]);
        if (checkbox && checkbox.checked) {
            if (selected != "") {
                selected = selected + "," + checkbox.value
            }
        }
    }
    return selected
}

function addPizza() {
    let name = selectPizza.value;
    let size = selectTamano.value;
    let extras = getselectIngredients();

    if (name == "" ) {
        alert("elige una pizza");
        return
    }

    let info = `Ordenaste: ${name} ( ${size} ) ${extras}`
    if (extras != "") {
        info = info + "Con aditivos: " + extras;
    }

    pizzacomanda.innerHTML = info;
    labelPizza.innerHTML = 'Pizza Seleccionada: ' + name;
}

function clearOrder() {
    pizzacomanda.innerHTML = 'order borrared';
    labelPizza.innerHTML = 'Pizza Seleccionada: ...';
}


btnAnadir.addEventListener("click", addPizza);
buttonEliminar.addEventListener("click", clearOrder);