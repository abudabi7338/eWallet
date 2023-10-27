const btnAddTransaction = document.querySelector('.add-transaction')
const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const btnDeleteAll = document.querySelector('.delete-all')
const availableMoney = document.querySelector('.available-money')
const popup = document.querySelector('.popup')
const inputName = document.querySelector('#name')
const inputAmount = document.querySelector('#amount')
const inputCategory = document.querySelector('#category')
const btnSave = document.querySelector('.save')
const btnCancel = document.querySelector('.cancel')

const addTransaction = () => {
	popup.classList.remove('none')
	popup.classList.add('active')
}

const closeTransaction = () => {
	popup.classList.remove('active')
	popup.classList.add('none')
}

const checkOptionValue = () => {
	const selectElement = document.querySelector('#category')
	const optionValue = selectElement.value // Pobierz wybraną wartość, nie potrzebujesz Array.from()
	const inputNameValue = inputName.value.trim()
	const inputAmountValue = inputAmount.value.trim()

	if (optionValue === 'income') {
		const inputNameValue = inputName.value.trim()
		const inputAmountValue = inputAmount.value.trim()

		const newTransaction = document.createElement('div')
		newTransaction.classList.add('transaction')
		newTransaction.innerHTML = `<p class="transaction-name"><i class="fa-solid fa-money-bill"></i>${inputNameValue}</p>
    <p class="transaction-amount">${inputAmountValue} zł<button class="delete"><i class="fas fa-times"></i></button></p>`
		incomeArea.append(newTransaction)
	} else {
		const newTransaction = document.createElement('div')
		newTransaction.classList.add('transaction')
		newTransaction.innerHTML = `<p class="transaction-name"><i class="fa-solid fa-money-bill"></i>${inputNameValue}</p>
        <p class="transaction-amount">${inputAmountValue} zł<button class="delete"><i class="fas fa-times"></i></button></p>`
		expensesArea.append(newTransaction)
	}
}

const checkTextFields = () => {
	const inputNameValue = inputName.value.trim()
	const inputAmountValue = inputAmount.value.trim()
	const inputCategoryValue = inputCategory.value.trim()

	if (inputNameValue === '' || inputAmountValue === '' || inputCategoryValue === 'none') {
		alert('Uzupełnij wszystkie pola')
	} else {
		checkOptionValue()
	}
}

btnSave.addEventListener('click', checkTextFields)
btnAddTransaction.addEventListener('click', addTransaction)
btnCancel.addEventListener('click', closeTransaction)
