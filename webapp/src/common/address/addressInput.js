import React from "react";
/* global google */


class AddressInput extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["address"], fields: ["address_component", "formatted_address", "adr_address", "geometry"],});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    let zipcode = '';
    if (place) {

        for (const component of place.address_components) {
            // @ts-ignore remove once typings fixed
            const componentType = component.types[0];
            if (componentType === 'postal_code') {
                zipcode = component.long_name;
            }

        }
    
        if (this.props.onPlaceLoaded) {
            this.props.onPlaceLoaded(place.formatted_address, place.geometry.location.lat(), place.geometry.location.lng(), zipcode)
        }

        //this.props.onPlaceLoaded(place);
    }

  }



  render() {
    return (
        <input style={{width: `500px`}} ref={this.autocompleteInput}  id="autocomplete" placeholder="Address"
         type="text"></input>
    );
  }
}


export default AddressInput;