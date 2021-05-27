import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './MyMap.css';
import  regions from '../data/regions.json';
import {GeoJsonObject, Feature} from 'geojson';
import {LatLngExpression, Layer, PathOptions} from "leaflet";


const onMSA = (area: Feature , layer: Layer) => {
  if (area.properties) {
    const msaName: string = area.properties.name;
    layer.bindPopup(msaName)
  }

}

const styleFeature = () : PathOptions => {
  let returnVal : PathOptions = {fillColor : "#FF11FF"}
  return returnVal;

  }
const MyMap = () => {
const [loading, setLoading] = useState(true);
  let x: LatLngExpression = [-87,35];
  console.log(regions);
  return (
<MapContainer center={[45.505, -87.09]} zoom={5} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <GeoJSON data={ regions as GeoJsonObject} onEachFeature={onMSA} style={styleFeature}>

  </GeoJSON>
</MapContainer>
  )
}


export default MyMap;