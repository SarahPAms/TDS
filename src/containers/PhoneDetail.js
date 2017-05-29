import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlans }  from '../actions/fetchPlans';

class PhoneDetail extends PureComponent {

  showPlans(plans){
    return this.props.plans.map((plan)=> {
      return(
      <tr key={plan.provider.id}>
        <td>
          {plan.connection_fee}€
        </td>
        <td>
          {plan.contract_term_in_months} months
        </td>
        <td>
          {plan.data_credits/1000}GB
        </td>
      </tr>
      )
    });
  }

  render(){
    if (!this.props.phone) {
      return <div> Select a phone to get started </div>
    }
    return (
      <div>
        <h3> Details for:</h3>
        <div> name: {this.props.phone.name}</div>
        <div> image: {this.props.phone.image}</div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th> Price per month </th>
            <th> Contract Duration </th>
            <th> Data </th>
            <th> Calling time </th>
            <th> Text messages </th>
            <th> {this.props.plans.length} </th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.plans.map((plan)=> {
            return(

            <tr key={plan.provider.id}>
              <td>
                {plan.connection_fee}€
              </td>
              <td>
                {plan.contract_term_in_months} months
              </td>
              <td>
                {plan.data_credits/1000}GB
              </td>
            </tr>
            )


        })}
        </tbody>
      </table>
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
