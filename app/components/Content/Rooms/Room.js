import React from 'react'
import { Link } from 'react-router-dom'

export default class Room extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='room'>
        <div className='room-image' style={{ backgroundImage: `url(${this.props.image})` }}>
        </div>
        <Link className='room-name' to='/'><p>{ this.props.name }</p></Link>
        <p className='room-description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='price'>
          <div className='day-price-title'>
            <p>Цена за сутки</p>
          </div>
          <div className='day-price'>
            <p>1000 <span className='fa fa-rub' aria-hidden='true'></span></p>
          </div>
          <div className='month-price-title'>
            <p>Цена за месяц</p>
          </div>
          <div className='month-price'>
            <p>24000 <span className='fa fa-rub' aria-hidden='true'></span></p>
          </div>
        </div>
        <div className='booking-room'>
          <button className='to-booking'>Забронировать</button>
        </div>
      </div>
    )
  }
}
