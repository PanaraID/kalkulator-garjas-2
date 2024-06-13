import { useContext } from 'react'

import AppContext from '../context/AppContext'
import FormGroup from './partials/FormGroup'

import SWIM from '../finals/garjas-c/SWIM'
import GarjasHeader from './partials/GarjasHeader'

const GarjasC = () => {
  const { gender, swim, dispatchSwim } = useContext(AppContext)

  const onChange = e => {
    dispatchSwim({ type: gender, value: e.target.value })
  }

  return (
    <section className='garjas'>
      <GarjasHeader title='Garjas C' />
      <FormGroup
        data={swim}
        gender={gender}
        min={SWIM[gender.toUpperCase()].MIN + '°'}
        max={SWIM[gender.toUpperCase()].MAX + '°'}
        placeholder={"Masukkan jarak"}
        onChange={onChange} />
    </section>
  )
}

export default GarjasC