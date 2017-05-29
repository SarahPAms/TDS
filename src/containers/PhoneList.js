import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPhones from '../actions/fetchPhones';
import selectPhone from '../actions/selectPhone';
import  fetchPlans from '../actions/fetchPhones';


class PhoneList extends PureComponent {

  componentWillMount() {
    this.props.fetchPhones()
    this.props.fetchPlans(1);
  }

  getPhoneId(phone) {

  }
  renderList(phones){
    return this.props.phones.map((phone) => {
      const phone_id = phone.id
      return (
        <li
        key={phone.full_name}
        onClick={
          () => {
            // this.props.fetchPlans(1);
            this.props.selectPhone(phone) ;


          }
        }
        className="list-group-item">
        {phone.full_name}
        </li>
      );
    });
  }

  render(){
    console.log("this is the container")
    return(
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps({ phones, selectedPhone }) {
  return { phones, selectedPhone };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhones, selectPhone, fetchPlans }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
