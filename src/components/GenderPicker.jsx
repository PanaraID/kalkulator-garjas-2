import { useContext } from 'react'

import AppContext from '../context/AppContext'

import GENDERS from '../finals/GENDERS'

const GenderPicker = () => {
  const { setGender } = useContext(AppContext)

  const onChange = e => {
    const buffer = e.target.value
    switch (buffer) {
      case GENDERS.LELAKI:
        setGender(GENDERS.LELAKI)
        break
      case GENDERS.PEREMPUAN:
        setGender(GENDERS.PEREMPUAN)
        break
    }
  }

  return (
    <select className='form-select' aria-label='Input gender' onChange={onChange}>
      <option selected>Silahkan pilih jenis kelamin</option>
      <option value={GENDERS.LELAKI}>{GENDERS.LELAKI}</option>
      <option value={GENDERS.PEREMPUAN}>{GENDERS.PEREMPUAN}</option>
    </select>
  )
}

export default GenderPicker