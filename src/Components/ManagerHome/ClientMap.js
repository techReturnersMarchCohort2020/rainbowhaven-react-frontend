import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

function Map() {
  return ( 
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{lat: 53.483959, lng: -2.244644}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ClientMap() {
    return (
      <div style={{width: '80vw', height: '20vh'}}>
        <WrappedMap 
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCVOvaXROSl2YfHQBLf-H4Mp9XdedsZao`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />} />
      </div>
    )
  }

export default ClientMap;