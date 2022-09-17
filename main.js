const pizzas = [
  {
    id: 1,
    nombre: "Muzzarela",
    ingredientes: ["salsa", "queso"],
    precio: 500,
    imgSrc: "./imgg/pizzamuzza.jpg",
  },
  {
    id: 2,
    nombre: "Especial",
    ingredientes: ["salsa", "queso", "jamon", "morron"],
    precio: 800,
    imgSrc: "./imgg/pizza-especial-salsa.jpg",
  },
  {
    id: 3,
    nombre: "Fugazzeta",
    ingredientes: ["salsa", "queso", "cebolla"],
    precio: 900,
    imgSrc: "./imgg/pizza-fugga.jpg",
  },
  {
    id: 4,
    nombre: "Napolitana",
    ingredientes: ["salsa", "queso", "tomate", "ajo"],
    precio: 1000,
    imgSrc: "./imgg/pizzanapo.jpg",
  },
  {
    id: 5,
    nombre: "Roquefort",
    ingredientes: ["salsa", "queso", "roquefort"],
    precio: 1500,
    imgSrc: "./imgg/pizzaroquw.jpg",
  },
  {
    id: 6,
    nombre: "Primavera",
    precio: 1800,
    ingredientes: ["salsa", "queso", "anana"],
    imgSrc: "./imgg/pizzaanana.jpg"
  },
];

const input = document.querySelector(`.number`);
const form = document.getElementById(`form`);
const btn = document.querySelector(`.btn`);
const card = document.querySelector(`.card`)



const saveLocalStorage = () => {
  localStorage.setItem('pizzas', JSON.stringify(pizzas));
};

const renderPizzas = e => {
  e.preventDefault();
  const valor = number.value;
  if (!valor.length) {
    card.innerHTML = `<div class="error"><p>Por favor ingrese un valor</p></div>`
  }
  else if (pizzaSearch(pizzas) == undefined) {
    card.innerHTML = `<div class="error"><p>No hay ninguna pizza con el numero elegido</p></div>`;
    number.value = " ";
  } else {
    card.innerHTML = `<div class="carda"><img src="${pizzaSearch(pizzas).imgSrc}" class="imgs"/><h1> Pizza ${pizzaSearch(pizzas).nombre}</h1> <p>Ingredientes: ${pizzaSearch(pizzas).ingredientes}</p> <h3>$ ${pizzaSearch(pizzas).precio}</h3> <button type="submit" class="btnn">Comprar</button></div>`;
    number.value = " ";

  };

};


const pizzaSearch = p => {
  const valor = number.value;
  const laPizza = p.find(pizza => pizza.id == valor);
  return laPizza;
};


const init = () => {
  form.addEventListener(`submit`, renderPizzas);
  saveLocalStorage(pizzas);
};

init();




