import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PhoneList extends PureComponent {
  renderList(){
    return this.props.phones.map(() => {
      return (
        <li
        key={phone.model}
        onClick={()=> this.props.selectPhone(phone)}
        className="list-group-item">
        {phone.model}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}
