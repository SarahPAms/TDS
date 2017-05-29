import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhones}  from '../actions/fetchPhones'


class PhoneList extends PureComponent {

  componentWillMount() {
    this.props.fetchPhones()
  }

  renderList(phones){
    return this.props.phones.map((phones) => {
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
    console.log("do you get here?")
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
  return bindActionCreators({ fetchPhones }, dispatch);
}

export default connect(mapStateToProps, { fetchPhones })(PhoneList);
