

const FormView = require('./view/form_view.js');
const PrimeChecker = require('./models/prime_checker.js');
const ResultView = require('./view/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();
  // console.log(primeChecker);

  const resultView = new ResultView();
  resultView.bindEvents();
});
