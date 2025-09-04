function generateFizzBuzz() {
    const number = parseInt(document.getElementById('number').value); 
    const resultDiv = document.getElementById('result');
    
    let result = [];

    for (let i = 1; i <= number; i++) {
      result.push(i);
    }
    
    resultDiv.innerHTML = result.join(', ');
}
