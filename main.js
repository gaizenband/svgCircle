console.clear();

const meter = document.querySelector('.meter');
const input = document.querySelector('input');


const func = () => {
  let value = input.value;
      // Get the length of the path
      let length = meter.getTotalLength(); 
      // Calculate the percentage of the total length

      let to = length * ((100 - value) / 100);
      // Set the Offset
      meter.style.strokeDashoffset = Math.max(0, to);  
}


input.addEventListener('input', () => func());