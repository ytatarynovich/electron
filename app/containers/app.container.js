//React library
import React from 'react';
//Custom components
import List from '../components/list.component';

class AppContainer extends React.Component {

  constructor(props) {
     super(props);
   }

 componentDidMount() {
  }

  render () {
    return (
      <div className='container'>
       <List/>
       <List/>
      </div>
    );
  }
}

export default AppContainer
