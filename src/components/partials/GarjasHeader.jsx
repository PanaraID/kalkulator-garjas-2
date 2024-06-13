import PropTypes from 'prop-types'

const GarjasHeader = ({ title }) => {
  return (
    <h3 className='text-center'>{title}</h3>
  )
}

GarjasHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default GarjasHeader