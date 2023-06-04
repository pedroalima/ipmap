import "./style/components/app.sass"
import './style/components/form.sass'
import 'leaflet/dist/leaflet.css'

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const apiKey = import.meta.env.VITE_API_KEY;

import mobileBgImage from "./images/pattern-bg-mobile.png"
import iconArrow from "./images/icon-arrow.svg"

function App() {

  const [ address, setAddress ] = useState(null)
  // const [ ipAddress, setIpAddress ] = useState("")
  
  useEffect(() => {
    try {
      const getDataApi = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8`
        );
        const jsonRes = await res.json();
        setAddress(jsonRes);
      }

      getDataApi()

    } catch(error) {
      console.log(error)
    }

  }, [])

  return (
    <div className="App">
      <img className="background" src={mobileBgImage} alt="Background image" />

      {address && <>
        <section className="form">
          <h1 className='form_title'>IP Address Tracker</h1>
          <form className='form_search'>
            <input className='form_search_input' type="text" name="ipAddress" id="ipAddress" placeholder="Search for any IP address or domain" />
            <button type="submit" className='form_search_icon'>
              <img src={iconArrow} alt="Icon arrow right" />
            </button>
          </form>
          <ul className='form_list'>
            <li className='form_list_item'>
              <span className='form_list_item_topic'>Ip address</span>
              <h2 className='form_list_item_result'>{address.ip}</h2>
            </li>
            <li className='form_list_item'>
              <span className='form_list_item_topic'>Location</span>
              <h2 className='form_list_item_result'>{address.location.city},{address.location.region}</h2>
            </li>
            <li className='form_list_item'>
              <span className='form_list_item_topic'>Timezone</span>
              <h2 className='form_list_item_result'>UTC{address.location.timezone}</h2>
            </li>
            <li className='form_list_item'>
              <span className='form_list_item_topic'>ISP</span>
              <h2 className='form_list_item_result'>{address.isp}</h2>
            </li>
          </ul>
        </section>

        <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{height: "500px", width: "100vw", zIndex:0}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[address.location.lat, address.location.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </>}
    </div>
  )
}

export default App
