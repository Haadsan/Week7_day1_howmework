// display the resulting message

const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){


};
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeNumber = event.detail;
    console.log('payload received in ResultView:', primeNumber);
    this.displayResult(primeNumber);

  })

};

ResultView.prototype.displayResult = function (result){
  const resultElement = document.querySelector('#result');
  if(result){
    resultElement.textContent = 'The number is prime';
  }
  else{
    resultElement.textContent = 'The number is not prime';
  }
};

module.exports = ResultView;
