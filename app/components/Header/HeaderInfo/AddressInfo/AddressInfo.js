import React from 'react'

export default class AddressInfo extends React.Component {
  render() {
    return(
      <div className='address-info'>
        <h2>Адрес</h2>
        <div className='address-street'>
          <span className='fa fa-map-marker' aria-hidden='true'></span>
          <div className='address'>
            <p>Севастополь</p>
            <p>ул.Людмилы Бобковой, 3/4</p>
          </div>
          <span className='how-to-find'>
            <a href='/#how-to-find'>Как добраться?</a>
          </span>
        </div>
      </div>
    )
  }
}
