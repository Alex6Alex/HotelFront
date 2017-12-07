import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

export default class Content extends React.Component {
  constructor() {
    super();
    this.mapState = { center: [44.56069, 33.413852], zoom: 16 };
  }

  render() {
    return(
      <div className='map-block'>
        <div className='divide-line'></div>
        <h2>Как добраться?</h2>
        <YMaps>
          <div className='map'>
            <Map state={this.mapState} width={1000} height={500}/>
          </div>
        </YMaps>
      </div>
    )
  }
}
