import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return(
      <div className='footer'>
        <div className='footer-info'>
          <div className='footer-block'>
            <Link to='/'>Главная</Link>
            <Link to='/'>Бронирование</Link>
          </div>
          <div className='footer-block'>
            <Link to='/'>Номера</Link>
            <Link to='/'>Услуги</Link>
          </div>
          <div className='footer-block'>
            <Link to='/'>Контакты</Link>
          </div>
          <div className='author-rights'>
            <p>www.site.com</p>
          </div>
        </div>
      </div>
    )
  }
}
