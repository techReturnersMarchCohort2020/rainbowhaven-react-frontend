import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";

function Map() {
  return ( 
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{lat: 53.483959, lng: -2.244644}}
    >
      <Marker
       icon={{url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}}
      position={{ lat: 53.483959, lng: -2.244644 }}
    />
   
    <Marker 
    icon={{url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}}
      position={{ lat: 53.450714, lng: -1.994911 }}
    />

  </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ClientMap() {
    return (
      <div style={{width: '55vw', height: '70vh'}}>
        <WrappedMap 
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `150%` }} />} />
      </div>
    )
  }

export default ClientMap;


