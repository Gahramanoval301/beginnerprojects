const userName = document.getElementById('names')
const userSurname = document.getElementById('surname')
const userAge = document.getElementById('age')
const userEmail = document.getElementById('email')
const userPhone = document.getElementById('phone')
const resultButton = document.getElementById('resultBtn')
const resultName = document.getElementById('nameP')
const resultSurname = document.getElementById('surnameP')
const resultAge = document.getElementById('ageP')
const resultEmail = document.getElementById('emailP')
const resultPhone = document.getElementById('phoneP')
const checkDiv = document.querySelector('.check')

resultButton.onclick = () => {
    checkDiv.style.display = 'block'
    resultName.textContent = userName.value
    resultSurname.textContent = userSurname.value
    resultAge.textContent = userAge.value
    resultEmail.textContent = userEmail.value
    resultPhone.textContent = userPhone.value


}
