import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.menuItemNames = [
      { name: 'Главная', link: '/' },
      { name: 'Бронирование', link: '/booking' },
      { name: 'Номера', link: '/rooms' },
      { name: 'Услуги', link: '/services' },
      { name: 'Контакты', link: '/contacts' }
    ];
  }

  render() {
    return(
      <div className='navigation'>
        <div className='navigation-menu'>
          { this.menuItemNames.map((item, key) =>
            <div
              className={ key !== this.menuItemNames.length - 1 ? (
                'navigation-menu-block'
              ) : (
                'navigation-menu-block last-block'
              ) }
            key={ key }>
              <Link to={ item.link }>
                <div className='navigation-menu-item'>
                  { item.name }
                </div>
              </Link>
              { key !== this.menuItemNames.length - 1 &&
                <div className='right-border'></div>
              }
            </div>
          ) }
        </div>
      </div>
    )
  }
}
