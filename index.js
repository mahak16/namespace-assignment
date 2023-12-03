
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    /* scrollbar: {
      el: '.swiper-scrollbar',
    }, */
  });


const allItems = [{
    name:'Farm Pizza',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/pizza5.jpeg'
},
{
    name:'Veg Pizza',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/pizza1.webp'
},
{
    name:'Cheese Pizza',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/pizza2.jpeg'
},
{
    name:'Extravegenza Pizza',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/pizza3.jpeg'
},
{
    name:'Chicken Pizza',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/pz1.jpeg'
},
{
    name:'Meat Pizza',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/vegpizza1.jpeg'
},
{
    name:'Finger chips',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/vegpizza2.jpeg'
},
{
    name:'Garlic Bread',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/garlic bread.jpeg'
},
{
    name:'Coffee',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/coffee.jpeg'
},
{
    name:'cold drink',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/coke.jpeg'
},
{
    name:'sweetcorn',
    Desc:'All Farm vegetables',
    price:'$20',
    img:'images/sweetcorn.jpeg'
}

]

//DOM
const menuListEle = document.querySelector('.menu_items');
const sampleCardEle = document.querySelector('.menu_item')
allItems.forEach(item =>{
    const clonedCard = sampleCardEle.cloneNode(true);
   clonedCard.querySelector('img').src = item.img
    clonedCard.querySelector('.title').innerText = item.name;
    clonedCard.querySelector('.desc').innerText = item.Desc;
    clonedCard.querySelector('.price').inner = item.price

    menuListEle.appendChild(clonedCard)
})