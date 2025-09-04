function generateFizzBuzz() {
    const number = parseInt(document.getElementById('number').value); 
    const resultDiv = document.getElementById('result');
    
    if (isNaN(number) || number <= 0) {
        alert("Por favor ingresa un número válido.");
        return;
    }

    let result = [];

    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0) {
            result.push("Fizz");
        }else {
          result.push(i);
        }
      
    }
    
    resultDiv.innerHTML = result.join(', ');
}
export {generateFizzBuzz};
