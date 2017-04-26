import React from 'react';

class Creator extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div class='creator'>
        <input type='text'/>
        <button onClick={this.props.togglePlay}><i className=''>+</i></button>
      </div>
    );
  }
}

export default Creator
