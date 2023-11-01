

const btnAddTransaction = document.querySelector('.add-transaction');
const incomeArea = document.querySelector('.income-area');
const expensesArea = document.querySelector('.expenses-area');
const btnDeleteAll = document.querySelector('.delete-all');
const availableMoney = document.querySelector('.available-money');
const popup = document.querySelector('.popup');
const inputName = document.querySelector('#name');
const inputAmount = document.querySelector('#amount');
const inputCategory = document.querySelector('#category');
const btnSave = document.querySelector('.save');
const btnCancel = document.querySelector('.cancel');

let moneyArr = [0];

const addTransaction = () => {
  popup.classList.remove('none');
  popup.classList.add('active');
};

const closeTransaction = () => {
  popup.classList.remove('active');
  popup.classList.add('none');
};

const createNewTransaction = () => {
  const inputNameValue = inputName.value.trim();
  const inputAmountValue = inputAmount.value.trim();
  const newTransaction = document.createElement('div');
  newTransaction.classList.add('transaction');

  newTransaction.innerHTML = `<p class="transaction-name">${inputNameValue}</p>
    <p class="transaction-amount">${inputAmountValue} zł<button class="delete"><i class="fas fa-times"></i></button></p>`;

  if (inputAmountValue > 0) {
    incomeArea.appendChild(newTransaction);
  } else {
    expensesArea.appendChild(newTransaction);
  }
  
  moneyArr.push(parseFloat(inputAmountValue)); // Poprawiono to miejsce

  count(moneyArr);
  console.log(moneyArr);

  closeTransaction();
};

const checkTextFields = () => {
  const inputNameValue = inputName.value.trim();
  const inputAmountValue = inputAmount.value.trim();
  const inputCategoryValue = inputCategory.value.trim();

  if (inputNameValue === '' || inputAmountValue === '' || inputCategoryValue === 'none') {
    alert('Uzupełnij wszystkie pola');
  } else {
    createNewTransaction();
  }
};

const count = money => {
  const newMoney = money.reduce((a, b) => a + b); // Dodano drugi argument jako wartość początkowa
  availableMoney.textContent = `${newMoney} zł`;
};

btnSave.addEventListener('click', checkTextFields);
btnAddTransaction.addEventListener('click', addTransaction);
btnCancel.addEventListener('click', closeTransaction);
