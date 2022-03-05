import React, { Component } from 'react';

const PlacesAutocomplete = () => {
  // const {
  //   ready,
  //   value,
  //   suggestions: { status, data },
  //   setValue,
  //   clearSuggestions,
  // } = usePlacesAutocomplete({
  //   requestOptions: {
  //     /* Define search scope here */
  //   },
  //   debounce: 300,
  // });
  // const ref = useOnclickOutside(() => {
  //   // When user clicks outside of the component, we can dismiss
  //   // the searched suggestions by calling this method
  //   clearSuggestions();
  // });
  //
  // const handleInput = e => {
  //   // Update the keyword of the input element
  //   setValue(e.target.value);
  // };
  //
  // const handleSelect = ({ description }) => () => {
  //   // When user selects a place, we can replace the keyword without request data from API
  //   // by setting the second parameter to "false"
  //   setValue(description, false);
  //   clearSuggestions();
  //
  //   // Get latitude and longitude via utility functions
  //   getGeocode({ address: description })
  //     .then(results => getLatLng(results[0]))
  //     .then(({ lat, lng }) => {
  //       window.console.log('📍 Coordinates: ', { lat, lng });
  //     })
  //     .catch(error => {
  //       window.console.log('😱 Error: ', error);
  //     });
  // };
  //
  // const renderSuggestions = () =>
  //   data.map(suggestion => {
  //     const {
  //       place_id,
  //       structured_formatting: { main_text, secondary_text },
  //     } = suggestion;
  //
  //     return (
  //       <li key={place_id} onClick={handleSelect(suggestion)}>
  //         <strong>{main_text}</strong> <small>{secondary_text}</small>
  //       </li>
  //     );
  //   });

    return (<div>ff</div>)
  // return (
  //   <div ref={ref}>
  //     <input value={value} onChange={handleInput} disabled={!ready} placeholder="Where are you going?" />
  //     {/* We can use the "status" to decide whether we should display the dropdown or not */}
  //     {status === 'OK' && <ul>{renderSuggestions()}</ul>}
  //   </div>
  // );
};

class ContactUsMap extends Component {
  state = {
    contentState: {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
    },
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    const { contentState } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        {/*<GoogleMapReact*/}
          {/*bootstrapURLKeys={{ key: config.KeyGoogleMaps, libraries: 'places' }}*/}
          {/*defaultCenter={contentState.center}*/}
          {/*defaultZoom={contentState.zoom}*/}
        {/*>*/}
          {/*<PlacesAutocomplete />*/}
        {/*</GoogleMapReact>*/}
      </div>
    );
  }
}

export default ContactUsMap;
