import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Services from './Services/Services'

export default class Content extends React.Component {
  render() {
    return(
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/services' component={Services}/>
        </Switch>
      </div>
    )
  }
}
