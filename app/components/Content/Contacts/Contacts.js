import React from 'react'

export default class Contacts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.title = 'Контакты | Гостевой дом «Авия»';
  }

  render() {
    return(
      <div className='contacts-page'>
        <div className='contact-title'>
          <h2>Контакты</h2>
        </div>
        <div className='contacts-info'>
          <div className='contact-address'>
            <div className='address-title'>
              <div className='divide-line'></div>
              <p>Адрес</p>
            </div>
            <p>Россия, г. Севастополь, ул. Людмилы Бобковой, д. 3/4</p>
          </div>
          <div className='book-contacts'>
            <div className='book-contacts-title'>
              <div className='divide-line'></div>
              <p>Бронирование номеров</p>
            </div>
            <p>Моб. тел.: +7(978)111-22-33</p>
            <p>Email: exampleemail@mail.ru</p>
          </div>
        </div>
        <div className='map'>

        </div>
      </div>
    )
  }
}
