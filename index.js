function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


// describe('retrieveEmployeeInformation()', () => {
//     it('retrieves the employee information from the input', () => {
//       document.querySelector('input').value = 'Bob'
//       expect(retrieveEmployeeInformation()).to.equal('Bob')
//     })
//   })

function retrieveEmployeeInformation(){
  return $("input")
}

  // describe('addNewElementAsLi()', () => {
  //   it('adds an li element with the text as the value of the input', () => {
  //     expect(document.querySelector('ul').innerHTML).to.not.include('Bob')
  //     document.querySelector('input').value = 'Bob'
  //     addNewElementAsLi()
  //     expect(document.querySelector('.employee-list').innerHTML).to.include('Bob')
  //   })
  // })
  
  function addNewElementAsLi(){
    let input_element = retrieveEmployeeInformation()
    let employee_name = input_element.value();
    input_element.append(`<li>${employee_name}</li>`)
  }