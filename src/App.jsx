import "./style/components/app.sass"
import './style/components/form.sass'
import 'leaflet/dist/leaflet.css'

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerPosition from "./components/MarkerPosition";
const apiKey = import.meta.env.VITE_API_KEY;

import mobileBgImage from "./images/pattern-bg-mobile.png"
import iconArrow from "./images/icon-arrow.svg"

function App() {

  const [ address, setAddress ] = useState(null);
  const [ ipAddress, setIpAddress ] = useState("");
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
  
  useEffect(() => {
    try {
      const getDataApi = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=192.212.174.101`
        );
        const jsonRes = await res.json();
        setAddress(jsonRes);
      }

      getDataApi()

    } catch(error) {
      console.log(error)
    }

  }, [])

  async function getEnteredAddress(){
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${
        checkIpAddress.test(ipAddress) 
        ? `ipAddress=${ipAddress}` 
        : checkDomain.test(ipAddress) 
        ? `domain=${ipAddress}` 
        : ""
      }`
    );
    const jsonRes = await res.json();
    setAddress(jsonRes);
  }

  function handleSubmit(e){
    e.preventDefault()

    getEnteredAddress()
  }

  return (
    <div className="App">
      <img className="background" src={mobileBgImage} alt="Background image" />
      {address && <>
        <section className="form">
          <h1 className='form_title'>IP Address Tracker</h1>
          <form onSubmit={handleSubmit} autoComplete="off" className='form_search'>
            <input 
              className='form_search_input' 
              type="text" 
              name="ipAddress" 
              id="ipAddress" 
              value={ipAddress} 
              onChange={(e) => setIpAddress(e.target.value)} 
              placeholder="Search for any IP address or domain" 
            />
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
          <MarkerPosition address={address} />
        </MapContainer>
      </>}
    </div>
  )
}

export default App
