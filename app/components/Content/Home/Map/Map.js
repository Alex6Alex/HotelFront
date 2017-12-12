import React from 'react'
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

export default class Content extends React.Component {
  constructor() {
    super();
    this.mapState = { center: [44.562909, 33.405559], zoom: 16 };
  }

  render() {
    return(
      <div className='map-block' id='how-to-find'>
        <div className='divide-line'></div>
        <h2>Как добраться?</h2>
        <YMaps>
          <div className='map'>
            <Map state={this.mapState} width={1000} height={500}>
              <GeoObject
                geometry={{
                  type: 'Point',
                  coordinates: [44.562909, 33.405559]
                }}
                options={{
                  preset: 'islands#greenStretchyIcon',
                  draggable: false,
                }}
              />
            </Map>
          </div>
        </YMaps>
      </div>
    )
  }
}
