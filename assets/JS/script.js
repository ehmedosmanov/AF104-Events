const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const userAge = document.querySelector('#userAge')
const isMarried = document.querySelector('#isMarried')
const submitBtn = document.querySelector('#submitBtn')
const tableBody = document.querySelector('tbody')
const lblDanger = document.querySelector('.lable-danger')

submitBtn.addEventListener('click', e => {
  e.preventDefault()
  const firstNameValue = firstName.value
  const lastNameValue = lastName.value
  const userAgeValue = userAge.value
  const isMarriedValue = isMarried.checked ? 'Evli' : 'Xeyr'

  if (
    firstNameValue === '' ||
    lastNameValue === '' ||
    userAgeValue === '' ||
    isMarriedValue === ''
  ) {
    //Validation
    if (
      firstNameValue === '' ||
      lastNameValue === '' ||
      userAgeValue === '' ||
      isMarriedValue === false
    ) {
      lblDanger.innerHTML = 'Zehmet olmasa xanaları doldurun!'
    }
  } else {
    const createTableRow = document.createElement('tr')
    const firstNameTd = document.createElement('td')
    const lastNameTd = document.createElement('td')
    const userAgeTd = document.createElement('td')
    const isMarriedTd = document.createElement('td')

    firstNameTd.textContent = firstNameValue
    lastNameTd.textContent = lastNameValue
    userAgeTd.textContent = userAgeValue
    isMarriedTd.textContent = isMarriedValue

    createTableRow.appendChild(firstNameTd)
    createTableRow.appendChild(firstNameTd)
    createTableRow.appendChild(lastNameTd)
    createTableRow.appendChild(userAgeTd)
    createTableRow.appendChild(isMarriedTd)

    tableBody.appendChild(createTableRow)

    firstName.value = ''
    lastName.value = ''
    userAge.value = ''
    isMarried.checked = false
    lblDanger.textContent = ''
  }
})
