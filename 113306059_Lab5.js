const mathInput = document.getElementById('math');
const englishInput = document.getElementById('english');
const submitButton = document.getElementById('submit');
const gradesTableBody = document.querySelector('#grades-table tbody');
const mathAverageCell = document.getElementById('math-average');
const englishAverageCell = document.getElementById('english-average');
const overallAverageCell = document.getElementById('overall-average');

let rowCount = 0;
let mathSum = 0;
let englishSum = 0;

submitButton.addEventListener('click', () => {
  const mathGrade = parseFloat(mathInput.value);
  const englishGrade = parseFloat(englishInput.value);

  if (isNaN(mathGrade) || isNaN(englishGrade)) {
    alert('Please enter valid numbers for both Math and English grades.');
    return;
  }

  rowCount++;
  const average = ((mathGrade + englishGrade) / 2).toFixed(2);
  mathSum += mathGrade;
  englishSum += englishGrade;

  // Add a new row to the table
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${mathGrade}</td>
    <td>${englishGrade}</td>
    <td>${average}</td>
  `;
  gradesTableBody.appendChild(newRow);

  // Update column-wise and overall averages
  const mathAverage = (mathSum / rowCount).toFixed(2);
  const englishAverage = (englishSum / rowCount).toFixed(2);
  const overallAverage = ((mathSum + englishSum) / (rowCount * 2)).toFixed(2);

  mathAverageCell.textContent = mathAverage;
  englishAverageCell.textContent = englishAverage;
  overallAverageCell.textContent = overallAverage;

  // Clear input fields
  mathInput.value = '';
  englishInput.value = '';
});
