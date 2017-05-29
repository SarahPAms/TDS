import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlans }  from '../actions/fetchPlans';

class PhoneDetail extends PureComponent {
  render() {
    if (!this.props.phone) {
      return <div> Select a phone to get started </div>
    }

    return (
      <div>
        <h3> Details for:</h3>
        <div> name: {this.props.phone.name}</div>
        <div> image: {this.props.phone.image}</div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    phone: state.selectedPhone
  }
}

export default connect(mapStatetoProps)(PhoneDetail);
