import React from 'react'

export default class ContactsInfo extends React.Component {
  render() {
    return(
      <div className='contacts-info'>
        <h2>Контактная информация</h2>
        <div className='phone-email-info'>
          <div className='phone-number'>
            <span className='fa fa-mobile'></span>
            <span>+7(978)111-22-33</span>
          </div>
          <div className='email-address'>
            <span className='fa fa-envelope-o'></span>
            <span className='email'>exampleemail@mail.ru</span>
          </div>
        </div>
      </div>
    )
  }
}
