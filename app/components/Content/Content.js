import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Rooms from './Rooms/Rooms'
import Services from './Services/Services'
import Booking from './Booking/Booking'

export default class Content extends React.Component {
  render() {
    return(
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/rooms' component={Rooms}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/booking' component={Booking}/>
        </Switch>
      </div>
    )
  }
}
