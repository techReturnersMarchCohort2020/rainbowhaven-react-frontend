import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import Geocode from "react-geocode";

function Map() {

//   Geocode.setApiKey("AIzaSyA2PvRYfHXdATLusWD5BRsWQTSff9xY6X8");
//   // set response language. Defaults to english.
// Geocode.setLanguage("en");
// // Get latidude & longitude from address.
// Geocode.fromAddress("33 cambridge street").then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   error => {
//     console.error(error);
//   }
// );

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
       icon={{url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}}
      position={{ lat: 53.468820, lng: -2.156210 }}
    />
   
    <Marker 
    icon={{url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}}
      position={{ lat: 53.450714, lng: -1.994911 }}
    />
    <Marker 
    icon={{url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}}
      position={{ lat: 53.482800, lng: -2.204350 }}
    />

  </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ClientMap() {
    return (
      <div style={{width: '70vw', height: '60vh'}}>
        <WrappedMap 
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCVOvaXROSl2YfHQBLf-H4Mp9XdedsZao`}
        loadingElement={<div style={{ height: `150%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `90%` }} />} />
      </div>
    )
  }

export default ClientMap;


