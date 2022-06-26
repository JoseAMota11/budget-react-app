import PropTypes from 'prop-types'

function Error({ message }) {
  return (
    <div className='error'>
      {message}
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error