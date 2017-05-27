import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  fetchPhones  from '../actions/fetchPhones'


class PhoneList extends PureComponent {

  componentDidMount() {
    fetchPhones()
  }

  renderList(phones){
    return this.props.phones.map((fetchPhones) => {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhones }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
