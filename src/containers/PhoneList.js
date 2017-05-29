import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchPhones from '../actions/fetchPhones';
import selectPhone from '../actions/selectPhone';


class PhoneList extends PureComponent {

  componentWillMount() {
    this.props.fetchPhones()
  }

  renderList(phones){
    return this.props.phones.map((phone) => {
      return (
        <li
        key={phone.full_name}
        onClick={()=> this.props.selectPhone(phone)}
        className="list-group-item">
        {phone.full_name}
        </li>
      );
    });
  }

  render(){
    console.log("this is the container")
    console.log(this.props.name)
    return(
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps({ phones }) {
  return { phones };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhones, selectPhone }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
