import React from 'react'

import { Link } from 'react-router-dom'

import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

import { Container } from '@mui/material'


export default function Map () {
  return (
    <Container>
      <MapContainer center={[-23.23047395507843, -45.870223025966546]} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.161991539913373, -45.795310231492536]}>
          <Popup>
           A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>,
    </Container>
  )
}