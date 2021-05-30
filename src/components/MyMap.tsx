/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import regions from '../data/regions.json';
import { GeoJsonObject, Feature } from 'geojson';
import { LatLngExpression, Layer, PathOptions } from "leaflet";
import {css, jsx, useTheme } from '@emotion/react';


const onMSA = (area: Feature, layer: Layer) => {
  if (area.properties) {
    const msaName: string = area.properties.name;
    layer.bindPopup(msaName)
  }

}
const styleFeature = (): PathOptions => {
  let returnVal: PathOptions = { fillColor: "#FF11FF" }
  return returnVal;

}
const MyMap = () => {

  const theme = useTheme();
  const mapContainerStyle = css({
    maxWidth: '700px',
    maxHeight: '700px',
    borderRadius: theme.borderRadius,
  })

  console.log(regions);
  return (
    <MapContainer center={[45.505, -87.09]} zoom={5} scrollWheelZoom={false} css={mapContainerStyle}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={regions as GeoJsonObject} onEachFeature={onMSA} style={styleFeature}>

      </GeoJSON>
    </MapContainer>
  )
}

export default MyMap;