import { useContext } from 'react'

import AppContext from '../context/AppContext'
import FormGroup from './partials/FormGroup'

import PULL_UP from '../finals/garjas-b/PULL_UP'
import CHINING from '../finals/garjas-b/CHINING'

import GarjasHeader from './partials/GarjasHeader'
import GENDERS from '../finals/GENDERS'

const GarjasB = () => {
  const {
    gender,

    pullUp, dispatchPullUp,
    chining, dispatchChining
  } = useContext(AppContext)

  const onChange = e => {
    if (gender === GENDERS.LELAKI)
      dispatchPullUp({ type: gender, value: e.target.value })
    else
      dispatchChining({ type: gender, value: e.target.value })
  }

  return (
    <section className='garjas'>
      <GarjasHeader title='Garjas B' />
      {gender === GENDERS.LELAKI ? (
        <FormGroup
          data={pullUp}
          gender={gender}
          min={PULL_UP.MIN}
          max={PULL_UP.MAX}
          placeholder={'Masukkan nilai pull up'}
          onChange={onChange} />
      ) : (
        <FormGroup
          data={chining}
          gender={gender}
          min={CHINING.MIN}
          max={CHINING.MAX}
          placeholder={'Masukkan nilai chining up'}
          onChange={onChange} />
      )}
    </section>
  )
}

export default GarjasB