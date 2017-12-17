import React from 'react'

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className='booking-form'>
        <div className='sub-form'>
          <div className='sub-form-title'>
            <div className='divide-line'></div>
            <p>Ф.И.О. заказчика</p>
          </div>
          <div className='sub-form-fields'>
            <div className='fields-column'>
              <label>Фамилия</label>
              <input className='form-input' type='text'/>
              <label>Имя</label>
              <input className='form-input' type='text'/>
            </div>
            <div className='fields-column'>
              <label>Отчество</label>
              <input className='form-input' type='text'/>
            </div>
          </div>
        </div>
        <div className='sub-form'>
          <div className='sub-form-title'>
            <div className='divide-line'></div>
            <p>Контактная информация</p>
          </div>
          <div className='sub-form-fields'>
            <div className='fields-column'>
              <label>Email</label>
              <input className='form-input' type='text'/>
            </div>
            <div className='fields-column'>
              <label>Моб. телефон</label>
              <input className='form-input' type='text'/>
            </div>
          </div>
        </div>
        <div className='sub-form'>
          <div className='sub-form-title'>
            <div className='divide-line'></div>
            <p>Бронирование</p>
          </div>
          <div className='sub-form-fields'>
            <div className='fields-column'>
              <label>Тип номера</label>
              <select className='form-input'>
                <option>Двухместный номер</option>
                <option>Трехместный номер</option>
              </select>
              <label>Дата заезда</label>
              <input className='form-input' type='text'/>
              <label>Тип оплаты</label>
              <select className='form-input'>
                <option>Наличные</option>
              </select>
              <label>Трансфер</label>
              <input className='form-checkbox' type='checkbox'/>
            </div>
            <div className='fields-column'>
              <label>Кол-во человек</label>
              <input className='form-input' type='text'/>
              <label>Дата выезда</label>
              <input className='form-input' type='text'/>
            </div>
          </div>
        </div>
        <div className='submit-block'>
          <input className='submit-button' type='submit' value='Забронировать'/>
        </div>
      </form>
    )
  }
}
