import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchPhones from '../actions/fetchPhones'


class PhoneList extends PureComponent {
  renderList(phones){
    return this.props.phones.map(() => {
      return (
        <li
        key={phones.full_name}
        onClick={()=> this.props.selectPhone(phones)}
        className="list-group-item">
        {phones.full_name}
        </li>
      );
    });
  }

  render(){
    fetchPhones()
    console.log(fetchPhones)
    return(
      <ul className="list-group col-md-4">
        {this.renderList(fetchPhones)}
      </ul>
    )
  }
}

function mapStateToProps({ phones }) {
  return { phones };
}

export default connect(mapStateToProps)(PhoneList);
