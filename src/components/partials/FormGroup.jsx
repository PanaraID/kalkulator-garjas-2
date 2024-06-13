import { useId, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const FormGroup = ({ data, gender, min, max, placeholder, onChange }) => {
  const id = useId()
  const [help, setHelp] = useState(false)

  useEffect(() => {
    setHelp(data.value === -1)
  }, [data])

  return (
    <div className='form-group card p-2'>
      <label htmlFor={id}>{placeholder}</label>
      <input type='number' className='form-control' id={id} placeholder={data.value} onChange={onChange} />
      {help && (
        <div className='alert alert-danger' role='alert'>
          Jarak untuk {gender} minimalnya adalah {min} dan maksimalnya adalah {max}
        </div>
      )}
      {data.score > 0 && (
        <div className='alert alert-secondary' role='alert'>
          Kamu mendapatkan score {data.score}
        </div>
      )}
    </div>
  )
}

FormGroup.propTypes = {
  data: PropTypes.object.isRequired,
  gender: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FormGroup