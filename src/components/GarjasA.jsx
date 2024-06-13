import { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useEffect } from 'react'
import { useState } from 'react'
import DISTANCE from '../finals/DISTANCE'

const GarjasA = () => {
  const [help, setHelp] = useState(false)
  const { gender, distance, dispatchDistance } = useContext(AppContext)

  useEffect(() => {
    setHelp(distance.value === -1)
  }, [distance])

  const onChange = e => {
    dispatchDistance({ type: gender, value: e.target.value })
  }

  return (
    <div className='form-group card p-2'>
      <h3>Garjas A</h3>
      <label htmlFor='inputDistance'>Masukkan jarak</label>
      <input type='number' className='form-control' id='inputDistance' placeholder='Masukkan jarak' onChange={onChange} />
      {help && (
        <div className='alert alert-danger' role='alert'>
          Jarak untuk {gender} minimalnya adalah {DISTANCE[gender.toUpperCase()].MIN} dan maksimalnya adalah {DISTANCE[gender.toUpperCase()].MAX}
        </div>
      )}
      {distance.score > 0 && (
        <div className='alert alert-secondary' role='alert'>
          Kamu mendapatkan score {distance.score}
        </div>
      )}
    </div>
  )
}

export default GarjasA