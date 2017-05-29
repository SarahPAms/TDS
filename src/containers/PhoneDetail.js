import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlans }  from '../actions/fetchPlans';

class PhoneDetail extends PureComponent {

  showPlans(){
    (this.props.plans.map((plan) => {
      plan.connection_fee
      <li
      key={plan.connection_fee}
      className="list-group-item">
      {plan.connection_fee}
      </li>
    }));
  }
  render() {
    if (!this.props.phone) {
      return <div> Select a phone to get started </div>
    }
    return (
      <div>
        <h3> Details for:</h3>
        <div> name: {this.props.phone.name}</div>
        <div> image: {this.props.phone.image}</div>
        {this.showPlans()}
      </div>
    );
  }
}

function mapStatetoProps({ phone, plans }) {
  return { phone, plans }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlans }, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(PhoneDetail);
