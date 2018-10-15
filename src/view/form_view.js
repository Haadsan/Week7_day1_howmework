// https://gist.github.com/futuresocks/e706597dc554fc267e9236adf622e011

// handle the user's input
const PubSub = require('../helpers/pub_sub.js')
const FormView = function(){

};

FormView.prototype.bindEvents = function(){

const form = document.querySelector('#prime-checker-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // step1- check if the event listener is working
// console.log(form);
const inputtedNumber = event.target.number.value;
console.log('inputted number', inputtedNumber);

PubSub.publish('FormView:number-submitted', inputtedNumber)
// The name of the channel we want to publish on - 'formView:number-submitted'
// The data we want to publish - inputtedNumber

})

};

module.exports = FormView;
