import React from 'react'

import Room from './Room'

export default class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.rooms = [
      {
        name: 'Стандарт двухместный',
        image: '../images/room1.jpg'
      },
      {
        name: 'Стандарт трехместный',
        image: '../images/room2.jpg'
      }
    ];
  }

  componentDidMount() {
    document.title = 'Номера | ' + document.title
  }

  render() {
    return(
      <div className='rooms-page'>
        <div className='rooms'>
          { this.rooms.map((room, index) =>
            <Room key={ index } name={ room.name } image={ room.image }/>
          ) }
        </div>
      </div>
    )
  }
}
