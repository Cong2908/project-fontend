const btn = document.querySelectorAll('.shop-item-button')
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener('click',function(event){
  var btnItem = event.target
  var product = btnItem.parentElement
  var productImg = product.querySelector('img').src
  var productName = product.querySelector('.shop-item-title').innerText
  var productPrice = product.querySelector('.shop-item-price').innerText
  // console.log(productImg, productName, productPrice)
  addcart(productImg, productName, productPrice)
  
})
  
})
function showcountsp(){
  var cartItem = document.querySelectorAll('.cart-item-loop .cart-item')
  document.getElementById('countsp').innerHTML = cartItem.length ;
  document.getElementById('countsp1').innerHTML = cartItem.length ;
}



function addcart(productImg, productName, productPrice){
  var addli = document.createElement('li')
  var cartItem = document.querySelectorAll('.cart-item-loop .cart-item')
  
  for (var i = 0; i<cartItem.length; i++){
    var productT = document.querySelectorAll('.cart-title .cart-item-title')
    if(productT[i].innerHTML == productName){
      alert('Sản phẩm của bạn đã có trong giỏ hàng')
      return
    }
  }

  var licontent = `<li class="cart-item">
                    <div class="cart-img">
                        <a href="product.html">
                            <img src="${productImg}" alt="cart-image" class="img-fluid">
                        </a>
                    </div>
                    <div class="cart-title">
                        <h6><a href="product.html" class="cart-item-title">${productName}</a></h6>
                        <div class="cart-pro-info">
                            <div class="cart-qty-price">
                                <input class="quantity" type="number" value="1">
                                <span class="price-box">${productPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div class="delete-item-cart">
                        <i class="fas fa-trash"></i>
                    </div>
                  </li>`
  addli.innerHTML = licontent // doi du lieu show ra
  var cartUl = document.querySelector('.cart-item-loop')
  // console.log(cartUl)
  cartUl.append(addli)  //them the li vao carUl

  carttotal()
  deleteCart()
  showcountsp()
}
//----------------totalPrice-----------------
function carttotal(){
  var cartItem = document.querySelectorAll('.cart-item-loop .cart-item')//the 'li'
  // console.log(cartItem.length)
  var totalC = 0

  for (var i = 0; i<cartItem.length; i++){
      var inputValue = cartItem[i].querySelector('.quantity').value
      var productPrice = cartItem[i].querySelector('.price-box').innerText

      totalA = parseInt(inputValue) * parseInt(productPrice) * 1000
    
      totalC += totalA

      //console.log(totalC)

  }
  var cartTotalA = document.querySelector('.subtotal-titles .subtotal-price')
  // var cartPrice = document.querySelector('.cart-icon .subtotal-price')
  cartTotalA.innerHTML = totalC.toLocaleString('de-DE') + '<sup>đ</sup>'
  // cartPrice.innerHTML = totalC.toLocaleString('de-DE') + '<sup>đ</sup>'
  // console.log(cartTotalA)
  inputchange()

}
//----------------Delete cart-----------------

function deleteCart(){
  var cartItem = document.querySelectorAll('.cart-item-loop .cart-item')
  for (var i = 0; i<cartItem.length; i++){
    var productT = document.querySelectorAll('.delete-item-cart')
    productT[i].addEventListener('click',function(event){
      var cartDelete = event.target
      var cartitemR = cartDelete.parentElement.parentElement
      cartitemR.remove()
      // console.log(cartDelete)
      carttotal()
      showcountsp()
    })
    
  } 
}
function inputchange(){
  var cartItem = document.querySelectorAll('.cart-item-loop .cart-item')
  for (var i = 0; i<cartItem.length; i++){
    var inputValue = cartItem[i].querySelector('input')
    inputValue.addEventListener('change',function(){
      if (isNaN(inputValue.value) || inputValue.value <= 0){
        inputValue.value = 1
      }
      carttotal()
    })
    
  } 
}


const cartshow = document.querySelector(".header-cart")
const cartclosebtn = document.querySelector(".shopping-cart-close")

cartshow.addEventListener("click",function(){
  document.querySelector(".mini-cart").style.right = "0"
  document.querySelector(".fullscreen").classList.add("active");
})

cartclosebtn.addEventListener("click",function(){
  document.querySelector(".mini-cart").style.right = "-100%"
  document.querySelector(".fullscreen").classList.remove("active");
})

document.querySelector(".fullscreen").addEventListener("click",function(){
  document.querySelector(".mini-cart").style.right = "-100%"
})

// --------------search---------------
const list = document.querySelector(".big-container .row");

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('col-4');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!= -1) {
      book.style.display = 'block';
    }else{
      book.style.display= 'none';
    }
  })
})




// ------scroll navigation-------
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 150);
});

// -----swiper---------
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// mini-cart

// Jquery ($ là ký hiệu để ta khai báo sử dụng Jquery)

// $(".header-cart").on('click', function () {
//   $(".mini-cart").addClass("active");
//   $(".fullscreen").addClass("active");
//   $("body").addClass("active");

// });
// $(".shopping-cart-close").on('click', function () {
//   $(".mini-cart").removeClass("active");
//   $(".fullscreen").removeClass("active");
//   $("body").removeClass("active");
// });

// $(".fullscreen").on('click', function () {
//   $(".mini-cart").removeClass("active");
//   $(".fullscreen").removeClass("active");
//   $("body").removeClass("active");
// });
// --------------------------------------------------------------
//       js

// const serviceCarts = document.querySelectorAll(".mini-cart");
// const openBtns = document.querySelectorAll(".header-cart");
// const fullscreens = document.querySelectorAll(".fullscreen");
// const bodyall = document.querySelectorAll('.home-1')
// const ClosecartBtns= document.querySelectorAll(".shopping-cart-close");

// var modalCart = function (cartClick) {
//   serviceCarts[cartClick].classList.add("active");
//   fullscreens[cartClick].classList.add("active");
//   bodyall[cartClick].classList.add("active");
// }

// openBtns.forEach((openBtn, i) => {
//   openBtn.addEventListener("click", () => {
//     modalCart(i);
//   });
// });

// ClosecartBtns.forEach((ClosecartBtn) => {
//   ClosecartBtn.addEventListener("click", () => {
//     serviceCarts.forEach((cartView) => {
//       cartView.classList.remove("active");
//     });
//     fullscreens.forEach((cartView) => {
//       cartView.classList.remove("active");
//     });
//     bodyall.forEach((cartView) => {
//       cartView.classList.remove("active");
//     });

//   });
// });
// fullscreens.forEach((Closefullscreen) => {
//   Closefullscreen.addEventListener("click", () => {
//     serviceCarts.forEach((cartView) => {
//       cartView.classList.remove("active");
//     });
//     fullscreens.forEach((cartView) => {
//       cartView.classList.remove("active");
//     });
//     bodyall.forEach((cartView) => {
//       cartView.classList.remove("active");
//     });
//   });
// });



// // responsive menu 



$(".nav-menu-btn").on('click', function () {
  $(".nav-bar").addClass("active");
  $(".fullscreen").addClass("active");
  $("body").addClass("active");
});
$(".close-btn").on('click', function () {
  $(".nav-bar").removeClass("active");
  $(".fullscreen").removeClass("active");
  $("body").removeClass("active");
});

$(".fullscreen").on('click', function () {
  $(".nav-bar").removeClass("active");
  $(".fullscreen").removeClass("active");
  $("body").removeClass("active");
});








// -----indexproduc-------
const serviceModals = document.querySelectorAll(".hidden-items");
const learnmoreBtns = document.querySelectorAll(".info");
const modalCloseBtns = document.querySelectorAll(".hidden-close-btn");
const bodyall = document.querySelectorAll('.home-1')

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
  bodyall[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
    bodyall.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// ------------tab-transfer---------------
var Indicator = document.getElementById("Indicator")
function changeProductList(type, element)
{
    let tabs = document.getElementsByClassName('tab-item');
    for(i = 0; i< tabs.length; i++){
        tabs[i].style.color = '#777';
    }

    element.style.color = 'red' ;
    element.style.transition = 'ease 1s';

    document.getElementById(type).style.display = 'block';
    document.getElementById("Indicator").style.transform = "translateX(100px)";

    switch (type) {
        case 'new' :
            // document.getElementById('type').style.transform = 'translateX(0)';
            document.getElementById('trend').style.display = 'none';
            document.getElementById('limit').style.display = 'none';
            Indicator.style.transform = "translateX(0px)";
            
            break;
        case 'trend' :
            // document.getElementById('type').style.transform = 'translateX(0px)';
            document.getElementById('new').style.display = 'none';
            document.getElementById('limit').style.display = 'none';
            Indicator.style.transform = "translateX(200px)";
            break;
        case 'limit' :
            // document.getElementById('type').style.transform = 'translateX(0)';
            document.getElementById('new').style.display = 'none';
            document.getElementById('trend').style.display = 'none';
            Indicator.style.transform = "translateX(410px)";
            break;
    }
}





