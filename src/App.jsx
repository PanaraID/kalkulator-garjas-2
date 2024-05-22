import { useState } from 'react';

function App() {
  const [gender, setGender] = useState('male');
  const [runDistance, setRunDistance] = useState('');
  const [pushUp, setPushUp] = useState('');
  const [sitUp, setSitUp] = useState('');
  const [pullUp, setPullUp] = useState('');
  const [chiningUp, setChiningUp] = useState('');
  const [shuttleRun, setShuttleRun] = useState('');
  const [swimTime, setSwimTime] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const calculateScores = () => {
    if (
      runDistance === '' ||
      pushUp === '' ||
      sitUp === '' ||
      pullUp === '' ||
      chiningUp === '' ||
      shuttleRun === '' ||
      swimTime === ''
    ) {
      setErrorMessage('Mohon lengkapi semua input sebelum menghitung nilai.');
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke atas

      setResult('');
    } else {
      setErrorMessage('');
      // Lakukan perhitungan nilai disini
      setResult('Nilai berhasil dihitung');
    }
  };

  return (
    <div className="calculator">
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <h2>Pilih Jenis Kelamin</h2>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Pria</option>
        <option value="female">Wanita</option>
      </select>

      <div>
        <h2>Kesamapataan A</h2>
        <label htmlFor="runDistance">Jarak Lari 12 Menit (meter):</label>
        <input type="number" id="runDistance" value={runDistance} onChange={(e) => setRunDistance(e.target.value)} />
      </div>
      
      <div>
        <h2>Kesamapataan B</h2>
        <label htmlFor="pushUp">Jumlah Push-Up:</label>
        <input type="number" id="pushUp" value={pushUp} onChange={(e) => setPushUp(e.target.value)} />

        <label htmlFor="sitUp">Jumlah Sit-Up (dalam 1 menit):</label>
        <input type="number" id="sitUp" value={sitUp} onChange={(e) => setSitUp(e.target.value)} />

        <label htmlFor="pullUp">Jumlah Pull-Up (dalam 1 menit):</label>
        <input type="number" id="pullUp" value={pullUp} onChange={(e) => setPullUp(e.target.value)} />

        <label htmlFor="chiningUp">Jumlah Chining-Up (1 menit):</label>
        <input type="number" id="chiningUp" value={chiningUp} onChange={(e) => setChiningUp(e.target.value)} />

        <label htmlFor="shuttleRun">Jumlah Shuttle Run:</label>
        <input type="number" id="shuttleRun" value={shuttleRun} onChange={(e) => setShuttleRun(e.target.value)} />
      </div>

      <div>
        <h2>Kesamapataan C</h2>
        <label htmlFor="swimTime">Renang:</label>
        <input type="number" id="swimTime" value={swimTime} onChange={(e) => setSwimTime(e.target.value)} />
      </div>
      <button onClick={calculateScores}>Hitung Nilai</button>

      <div id="result">{result}</div>
    </div>
  );
}

export default App;
