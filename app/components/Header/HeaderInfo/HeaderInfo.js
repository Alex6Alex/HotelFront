import React from 'react'

import Logo from './Logo/Logo'
import ContactsInfo from './ContactsInfo/ContactsInfo'
import AddressInfo from './AddressInfo/AddressInfo'

export default class HeaderInfo extends React.Component {
  render() {
    return(
      <div className='header-info'>
        <Logo/>
        <ContactsInfo/>
        <AddressInfo/>
      </div>
    )
  }
}
