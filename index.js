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
  
}