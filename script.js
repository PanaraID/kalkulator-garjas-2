function calculateScores() {
    // Mengambil nilai dari input
    const gender = document.getElementById('genderSelect').value;
    const runDistanceA = parseInt(document.getElementById('runDistanceA').value);
    const pullUpA = parseInt(document.getElementById('pullUpA').value);
    const sitUpA = parseInt(document.getElementById('sitUpA').value);
    const runDistanceB = parseInt(document.getElementById('runDistanceB').value);
    const pushUpB = parseInt(document.getElementById('pushUpB').value);
    const sitUpB = parseInt(document.getElementById('sitUpB').value);
  
    // Menghitung nilai Garjas A
    let scoreA = 0;
    if (gender === 'male') {
      if (runDistanceA >= 2000) scoreA++;
      if (pullUpA >= 5) scoreA++;
      if (sitUpA >= 25) scoreA++;
    } else if (gender === 'female') {
      if (runDistanceA >= 1600) scoreA++;
      if (pullUpA >= 3) scoreA++;
      if (sitUpA >= 20) scoreA++;
    }
  
    // Menghitung nilai Garjas B
    let scoreB = 0;
    if (gender === 'male') {
      if (runDistanceB >= 1800) scoreB++;
      if (pushUpB >= 10) scoreB++;
      if (sitUpB >= 20) scoreB++;
    } else if (gender === 'female') {
      if (runDistanceB >= 1400) scoreB++;
      if (pushUpB >= 5) scoreB++;
      if (sitUpB >= 15) scoreB++;
    }
  
    // Menampilkan hasil
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Hasil Perhitungan Nilai Garjas</h2>
                               <p>Garjas A: ${scoreA} dari 3</p>
                               <p>Garjas B: ${scoreB} dari 3</p>`;
  }
  