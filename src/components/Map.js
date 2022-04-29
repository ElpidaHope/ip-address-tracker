import { MapContainer, TileLayer, Marker,  useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import styled from 'styled-components';

const locationIcon = new Icon({
  iconUrl: process.env.PUBLIC_URL + '/images/icon-location.svg',
  iconSize: [35,40],
})

const MyMap = styled(MapContainer)`
  height: 65vh;
  width: 100%;
  overflow-x: hidden;
  z-index: -1;
`

const Map = ({data}) => {
  const ChangeView = ({center,zoom}) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
        data && <MyMap zoom={13}>
          <ChangeView center={[data.location.lat, data.location.lng]} zoom={13}/>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data.location.lat, data.location.lng]} icon={locationIcon}>
          </Marker>
        </MyMap>
  )
}

export default Map;