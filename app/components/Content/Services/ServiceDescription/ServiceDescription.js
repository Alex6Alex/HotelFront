import React from 'react';

export default class ServiceDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='service-description'>
        <div className='description-title'>
          <div className='divide-line'></div>
          <h2>{ this.props.service }</h2>
        </div>
        <div className='description-block'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}
