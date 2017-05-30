import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlans }  from '../actions/fetchPlans';
import '../style/style.css'

class PhoneDetail extends PureComponent {

  render(){
    if (!this.props.phone) {
      return <div> Select a phone to get started </div>
    }
    return (
      <div className= "container" >
        <h3> Details for:</h3>
        <div className="phone-text"> <h4>{this.props.phone.full_name}</h4></div>
        <div className="phone-image"> <img src={this.props.phone.image} alt={this.props.phone.name}/></div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th> Price per month </th>
            <th> Contract Duration </th>
            <th> Data </th>
            <th> Calling time </th>
            <th> Text messages </th>
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
              <td>
                {plan.voice_credits===2147483647 ? "unlimited" : plan.voice_credits } minutes
              </td>
              <td>
                {plan.sms_credits===2147483647 ? "unlimited" : plan.sms_credits} sms
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
