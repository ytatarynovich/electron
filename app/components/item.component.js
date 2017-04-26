import React from 'react';

class Item extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="item">
        <button onClick={this.props.togglePlay}><i className=''>+</i></button>
        <button onClick={this.props.togglePlay}><i className=''>-</i></button>
        <button onClick={this.props.togglePlay}><i className=''>=</i></button>
        My TODO
      </div>
    );
  }
}

export default Item
