import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './MyMap.css';
import  regions from '../data/regions.json';
import {GeoJsonObject, Feature} from 'geojson';
import {LatLngExpression, Layer} from "leaflet";

const onMSA = (area: Feature , layer: Layer) => {
  if (area.properties) {
    const msaName: string = area.properties.name;
    layer.bindPopup(msaName)
  }
}
const MyMap = () => {
  let x: LatLngExpression = [-113,36];
  console.log(regions);
  return (
<MapContainer  center={[-113,36]} zoom={2} scrollWheelZoom={false}>
  <GeoJSON data={regions as GeoJsonObject} onEachFeature={onMSA}/>
</MapContainer>
  )
}


export default MyMap;