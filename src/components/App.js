import React, { PureComponent } from 'react';

import PhoneList from '../containers/PhoneList';
import PhoneDetail from '../containers/PhoneDetail';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <PhoneList/>
        <PhoneDetail/>
      </div>
    );
  }
}
