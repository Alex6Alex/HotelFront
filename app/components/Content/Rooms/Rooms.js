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
    document.title = 'Номера | Гостевой дом «Авия»'
  }

  render() {
    return(
      <div className='rooms-page'>
        <div className='rooms-description'>
          <h2>Номера и цены</h2>
          <p>
            В распоряжении гостей мини-отеля «Авия» двухместные и трехместный номера.
            Все номера оснащены холодильником, телевизором, тумбочкой,
            письменным столом и зеркалом.
            К услугам гостей бесплатный wi-fi в каждом номере.
            В ванных комнатах — современная сантехника,
            фен и необходимые туалетные принадлежности. По запросу
            предоставляются: зубная паста, щетка, расческа, бритвенный набор.
            Окна и двери выходят во двор на первом этаже, и на общий балкон - на втором.
          </p>
        </div>
        <div className='rooms'>
          <div className='divide-line'></div>
          { this.rooms.map((room, index) =>
            <Room key={ index } name={ room.name } image={ room.image }/>
          ) }
        </div>
      </div>
    )
  }
}
