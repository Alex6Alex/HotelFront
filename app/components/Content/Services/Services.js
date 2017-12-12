import React from 'react';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='services-page'>
        <h2>Услуги</h2>
        <div className='services-column'>
          <div className='service'>
            <span className='fa fa-wifi' aria-hidden='true'></span>
            <p>Wi-Fi интернет</p>
          </div>
          <div className='service'>
            <span className='fa fa-archive' aria-hidden='true'></span>
            <p>Хранение ценных вещей</p>
          </div>
          <div className='service'>
            <span className='fa fa-tint' aria-hidden='true'></span>
            <p>Питьевая вода</p>
          </div>
        </div>
        <div className='services-column'>
          <div className='service'>
            <span className='fa fa-car' aria-hidden='true'></span>
            <p>Трансфер</p>
          </div>
          <div className='service'>
            <span className='fa fa-cutlery' aria-hidden='true'></span>
            <p>Столовая</p>
          </div>
        </div>
      </div>
    )
  }
}
