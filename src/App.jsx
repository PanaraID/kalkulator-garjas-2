import React, { useState } from 'react';

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

  function calculateDistance(gender, distanse) {
    let result = 0;
    if (gender ==='male' && (distanse >= 1349 && distanse <= 3444)) {
      let difference = distanse - 1349;
      result = Math.floor(difference / 21) + 1;
    } else if (gender === 'female' && (distanse >= 22 && distanse <= 3095)) {
      let difference = distanse - 1013;
      result = Math.floor(difference / 21) + 1;
    }

    return result;
  }

  const calculateScores = () => {
    if (
      runDistance === '' ||
      pushUp === '' ||
      sitUp === '' ||
      (gender === 'male' && pullUp === '') ||
      (gender === 'female' && chiningUp === '') ||
      shuttleRun === '' ||
      swimTime === ''
    ) {
      setErrorMessage('Mohon lengkapi semua input sebelum menghitung nilai.');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setResult('');
    } else {
      setErrorMessage('');

      // Lakukan perhitungan nilai disini
      const points = {};

      // Hitung poin untuk masing-masing input
      points['runDistance'] = calculateDistance(gender, runDistance);
      points['pushUp'] = parseFloat(pushUp) || 0;
      points['sitUp'] = parseFloat(sitUp) || 0;
      points['pullUp'] = parseFloat(gender === 'male' ? pullUp : 0) || 0;
      points['chiningUp'] = parseFloat(gender === 'female' ? chiningUp : 0) || 0;
      points['shuttleRun'] = parseFloat(shuttleRun) || 0;
      points['swimTime'] = parseFloat(swimTime) || 0;

      setResult(
        <>
          <div>
            <h2>Hasil Perhitungan Nilai</h2>
            <ol>
              <li>Jarak Lari 12 Menit: {runDistance} meter ({points['runDistance']} poin)</li>
              <li>Jumlah Push-Up: {pushUp} ({points['pushUp']} poin)</li>
              <li>Jumlah Sit-Up: {sitUp} ({points['sitUp']} poin)</li>
              {gender === 'male' && <li>Jumlah Pull-Up: {pullUp} ({points['pullUp']} poin)</li>}
              {gender === 'female' && <li>Jumlah Chining-Up: {chiningUp} ({points['chiningUp']} poin)</li>}
              <li>Jumlah Shuttle Run: {shuttleRun} ({points['shuttleRun']} poin)</li>
              <li>Waktu Renang: {swimTime} ({points['swimTime']} poin)</li>
            </ol>
          </div>
          <div>
            <h2>Keterangan</h2>
            <ul>
              <li>Jarak lari 12 menit
                <ul>
                  <li>Laki-laki: minimal 1349 dan maksimal 3444</li>
                  <li>Perempuan: minimal 1013 dan maksimal 3095</li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      );
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

        {gender === 'male' && (
          <>
            <label htmlFor="pullUp">Jumlah Pull-Up (dalam 1 menit):</label>
            <input type="number" id="pullUp" value={pullUp} onChange={(e) => setPullUp(e.target.value)} />
          </>
        )}
        {gender === 'female' && (
          <>
            <label htmlFor="chiningUp">Jumlah Chining-Up (1 menit):</label>
            <input type="number" id="chiningUp" value={chiningUp} onChange={(e) => setChiningUp(e.target.value)} />
          </>
        )}

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
