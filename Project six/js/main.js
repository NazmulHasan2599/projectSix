// Show search

let search = document.querySelector('.search__form')
let searchBtn = document.querySelector('#search__btn');

searchBtn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    shopping.classList.remove('active')
    loginForm.classList.remove('active')
    navBar.classList.remove('show__navbar')
})

// Show shopping 

let cartBtn = document.querySelector('#cart__btn')
let shopping = document.querySelector('.shopping__cart')

cartBtn.addEventListener('click', ()=>{
    shopping.classList.toggle('active')
    search.classList.remove('active')
    loginForm.classList.remove('active')
    navBar.classList.remove('active')
})

// Show login

let loginBtn = document.querySelector('#login__btn')
let loginForm = document.querySelector('.login__form')

loginBtn.addEventListener('click', ()=>{
    loginForm.classList.toggle('active')
    search.classList.remove('active')
    shopping.classList.remove('active')
    navBar.classList.remove('active')
})

// Show menu 

let menuBtn = document.querySelector('#menu__btn')
let navBar = document.querySelector('.navbar')

menuBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
    search.classList.remove('active')
    shopping.classList.remove('active')
    loginForm.classList.remove('active')

})

// Remove active class

window.onscroll = ()=>{
    navBar.classList.remove('active')
    search.classList.remove('active')
    shopping.classList.remove('active')
    loginForm.classList.remove('active')
}