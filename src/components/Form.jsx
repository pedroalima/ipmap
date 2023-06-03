import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types'

import '../style/components/form.sass'

// https://geo.ipify.org/api/v2/country,city?apiKey=at_7i3kApvL8aKQA5RDuOdlXPqgfSQ7B&ipAddress=8.8.8.8

function Form({iconArrow}) {  
  const topics = ["IP Address", "Location", "Timezone", "ISP"];
    const topicsList = topics.map((topic, i) => 
      <li className='form_list_item' key={"topic_" + i}>
        <span className='form_list_item_topic'>{topic}</span>
        <h2 className='form_list_item_result'>...</h2>
      </li>
    );

  return (
    <>
      <section className="form">
        <h1 className='form_title'>IP Address Tracker</h1>
        <form className='form_search'>
          <input className='form_search_input' type="text" name="" id="" placeholder="Search for any IP address or domain" />
          <button type="submit" className='form_search_icon'>
            <img src={iconArrow} alt="Icon arrow right" />
          </button>
        </form>
        <ul className='form_list'>{topicsList}</ul>
      </section>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: "500px", width: "100vw", zIndex:0}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

Form.propTypes = {
    iconArrow: PropTypes.string
}

export default Form