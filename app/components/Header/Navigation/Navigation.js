import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return(
      <div className='navigation'>
        <div className='navigation-menu'>
          <div className='navigation-menu-block'>
            <Link to='/'>
              <div className='navigation-menu-item'>
                Главная
              </div>
            </Link>
            <div className='right-border'></div>
          </div>
          <div className='navigation-menu-block'>
            <Link to ='/'>
              <div className='navigation-menu-item'>
                Бронирование
              </div>
            </Link>
            <div className='right-border'></div>
          </div>
          <div className='navigation-menu-block'>
            <Link to='/'>
              <div className='navigation-menu-item'>
                Номера
              </div>
            </Link>
            <div className='right-border'></div>
          </div>
          <div className='navigation-menu-block'>
            <Link to='/'>
              <div className='navigation-menu-item'>
                Услуги
              </div>
            </Link>
            <div className='right-border'></div>
          </div>
          <div className='navigation-menu-block'>
            <Link to='/'>
              <div className='navigation-menu-item'>
                Контакты
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
