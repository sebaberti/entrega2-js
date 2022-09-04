const pizzas = [
    {id:1,
      nombre:"Muzzarela",
      ingredientes:["salsa","queso"],
      precio:500,
    },
    {id:2,
      nombre:"Especial",
      ingredientes:["salsa","queso","jamon"],
      precio:800,
    },
    {id:3,
      nombre:"Fugazzeta",
      ingredientes:["salsa","queso","cebolla"],
      precio:900
    },
    {id:4,
      nombre:"Napolitana",
      ingredientes:["salsa","queso","tomate","ajo"],
      precio:1000,
    },
    {id:5,
      nombre:"Primavera",
      ingredientes:["salsa","queso","anana"],
      precio:1200,
    },
    {id:6,
      nombre:"Roquefort",
      ingredientes:["salsa","queso","roquefort"],
      precio:1500,
    },
  ];


  const input = document.querySelector(`.number`);
  const form = document.getElementById(`form`);
  const btn = document.querySelector(`.btn`);
const info = document.querySelector(`.info`);
const h2pizza = document.querySelector(`.h2pizza`)
const h4precio = document.querySelector(`.h4precio`);



 const renderPizzas = e => {
     e.preventDefault();
    if(pizzaSearch(pizzas) == undefined){
      alert (`no existe la pizza seleccionada`);
       return;
   
   }else {  h2pizza.textContent = `La pizza  ${pizzaSearch(pizzas).nombre} ` ;
    h4precio.textContent = `Tiene un precio de: $ ${pizzaSearch(pizzas).precio}`;
     number.value = " ";
          
     };
    
 };


const pizzaSearch = p => {
    const valor = number.value;
    const laPizza = p.find(pizza => pizza.id == valor);
    return laPizza;
};

 
  const init = ()=> {
   form.addEventListener(`submit`, renderPizzas);
  };

  init();