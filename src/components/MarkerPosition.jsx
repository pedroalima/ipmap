import { Marker, Popup, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import icon from './icon';

function MarkerPosition({ address }) {
  const position = [address.location.lat, address.location.lng]
  const map = useMap()

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    })
  }), [map, position]

  return (
    <>
      <Marker icon={icon} position={position}>
          <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
      </Marker>
    </>
  )
}

MarkerPosition.propTypes = {
  address: PropTypes.any
}

export default MarkerPosition;