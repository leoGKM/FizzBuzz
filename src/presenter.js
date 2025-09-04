function generateFizzBuzz() {
    const number = parseInt(document.getElementById('number').value); 
    const resultDiv = document.getElementById('result');
    
    if (isNaN(number) || number <= 0) {
        alert("Por favor ingresa un número válido.");
        return;
    }
    
    let result = [];

    for (let i = 1; i <= number; i++) {
      result.push(i);
    }
    
    resultDiv.innerHTML = result.join(', ');
}
export {generateFizzBuzz};
