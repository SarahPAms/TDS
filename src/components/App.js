import React, { PureComponent } from 'react';

import PhoneList from '../containers/phone_list'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <PhoneList/>
      </div>
    );
  }
}
