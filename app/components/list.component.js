import React from 'react';
import Item from '../components/item.component';
import Creator from '../components/creator.component';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='list'>
        <Creator/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    );
  }
}

export default List
