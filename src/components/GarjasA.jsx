import { useContext } from 'react'

import AppContext from '../context/AppContext'
import FormGroup from './partials/FormGroup'

import RUN from '../finals/RUN'
import GarjasHeader from './partials/GarjasHeader'

const GarjasA = () => {
  const { gender, run, dispatchRun } = useContext(AppContext)

  const onChange = e => {
    dispatchRun({ type: gender, value: e.target.value })
  }

  return (
    <section className='garjas'>
      <GarjasHeader title='Garjas A' />
      <FormGroup 
        data={run}
        gender={gender}
        min={RUN[gender.toUpperCase()].MIN}
        max={RUN[gender.toUpperCase()].MAX}
        placeholder={"Masukkan lari"}
        onChange={onChange}/>
    </section>
  )
}

export default GarjasA