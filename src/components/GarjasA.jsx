import { useContext } from 'react'

import AppContext from '../context/AppContext'
import FormGroup from './partials/FormGroup'

import DISTANCE from '../finals/DISTANCE'
import GarjasHeader from './partials/GarjasHeader'

const GarjasA = () => {
  const { gender, distance, dispatchDistance } = useContext(AppContext)

  const onChange = e => {
    dispatchDistance({ type: gender, value: e.target.value })
  }

  return (
    <section className='garjas'>
      <GarjasHeader title='Garjas A' />
      <FormGroup 
        data={distance}
        gender={gender}
        min={DISTANCE[gender.toUpperCase()].MIN}
        max={DISTANCE[gender.toUpperCase()].MAX}
        placeholder={"Masukkan jarak"}
        onChange={onChange}/>
    </section>
  )
}

export default GarjasA