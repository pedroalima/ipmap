import PropTypes from 'prop-types'

import '../style/components/form.sass'

function Form({iconArrow}) {
  return (
    <form className="form">
        <h1>IP Address Tracker</h1>
        <input type="search" name="" id="" placeholder="Input your IP address"/>
        <i><img src={iconArrow} alt="Icon arrow right" /></i>
        <ul>
          <li>
            <span></span>
            <h2></h2>
          </li>
        </ul>
      </form>
  )
}

Form.propTypes = {
    iconArrow: PropTypes.string
}

export default Form