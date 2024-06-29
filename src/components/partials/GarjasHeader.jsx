import { Fragment } from 'react'
import PropTypes from 'prop-types'

const GarjasHeader = ({ title }) => {
  return (
    <Fragment>
      <h3 className='text-center'>{title}</h3>
    </Fragment>
  )
}

GarjasHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default GarjasHeader