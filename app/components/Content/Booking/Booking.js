import React from 'react'

import BookingForm from './BookingForm/BookingForm'

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = 'Бронирование | ' + document.title;
  }

  render() {
    return(
      <div className='booking-page'>
        <div className='booking'>
          <h2>Бронирование номера</h2>
          <BookingForm/>
        </div>
      </div>
    )
  }
}
