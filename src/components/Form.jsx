import PropTypes from 'prop-types'

import '../style/components/form.sass'

function Form({iconArrow}) {

  const topics = ["IP Address", "Location", "Timezone", "ISP"];
    const topicsList = topics.map((topic, i) => 
      <li className='form_list_item' key={"topic_" + i}>
        <span className='form_list_item_topic'>{topic}</span>
        <h2 className='form_list_item_result'>...</h2>
      </li>
    );

  return (
    <form className="form">
      <h1 className='form_title'>IP Address Tracker</h1>
      <div className='form_search'>
        <input className='form_search_input' type="search" name="" id="" placeholder="Search for any IP address or domain"/>
        <i className='form_search_icon'><img src={iconArrow} alt="Icon arrow right" /></i>
      </div>
      <ul className='form_list'>{topicsList}</ul>
    </form>
  )
}

Form.propTypes = {
    iconArrow: PropTypes.string
}

export default Form