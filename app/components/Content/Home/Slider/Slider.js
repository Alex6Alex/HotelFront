import React from 'react'

export default class Slider extends React.Component {
  render() {
    return(
      <div className='slider'>
        <div className='img-buttons'>
          <button className='active img-button first-image'></button>
          <button className='img-button second-image'></button>
          <button className='img-button third-image'></button>
        </div>
      </div>
    )
  }
}
