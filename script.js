const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 2500);

const products = [
  ['Croquetas cachorro', '$180', '🥣'], ['Croquetas adulto', '$220', '🥣'], ['Correa sencilla', '$90', '🦮'], ['Collar ajustable', '$75', '📿'],
  ['Cama chica', '$250', '🛏️'], ['Cama grande', '$420', '🛏️'], ['Juguete mordedera', '$60', '🦴'], ['Pelota', '$45', '🎾'],
  ['Shampoo mascota', '$95', '🧴'], ['Cepillo', '$80', '🪮'], ['Plato comida', '$70', '🍽️'], ['Bebedero', '$85', '💧'],
  ['Placa identificación', '$55', '🏷️'], ['Transportadora', '$550', '📦'], ['Arena para gato', '$160', '🐱'], ['Rascador', '$300', '🪵'],
  ['Suéter mascota', '$190', '🧥'], ['Cobija', '$120', '🧺'], ['Kit higiene', '$210', '🧼'], ['Donación simbólica', '$50', '❤️']
];

const productsContainer = document.getElementById('products');
products.forEach(product => {
  const card = document.createElement('article');
  card.className = 'product';
  card.innerHTML = `
    <div class="product-img">${product[2]}</div>
    <h3>${product[0]}</h3>
    <p>${product[1]}</p>
    <button>Agregar</button>
  `;
  productsContainer.appendChild(card);
});

document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Mensaje enviado. Este formulario es parte del prototipo no funcional.');
});
