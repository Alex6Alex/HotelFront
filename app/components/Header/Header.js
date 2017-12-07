import React from 'react'

import Navigation from './Navigation/Navigation'
import HeaderInfo from './HeaderInfo/HeaderInfo'

export default class Header extends React.Component {
  render() {
    return(
      <div className='header'>
        <HeaderInfo/>
        <Navigation/>
      </div>
    )
  }
}
