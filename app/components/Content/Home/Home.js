import React from 'react'

import Slider from './Slider/Slider'
import About from './About/About'
import Map from './Map/Map'

export default class Home extends React.Component {
  render() {
    return(
      <div className='home-page'>
        <Slider/>
        <About/>
        <Map/>
      </div>
    )
  }
}
