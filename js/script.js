const btnAddTransaction = document.querySelector('.addTransaction')
const btnDeleteAll = document.querySelector('.delete-all')
const availableMoney = document.querySelector('.available-money')
const popup = document.querySelector('.popup')

const addTransaction = () => {
	popup.classList.remove('none')
	popup.classList.add('active')
}

btnAddTransaction.addEventListener('click', addTransaction)
