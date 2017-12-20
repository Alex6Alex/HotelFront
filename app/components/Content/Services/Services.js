import React from 'react';

import ServiceDescription from './ServiceDescription/ServiceDescription'

export default class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: ''
    };

    this.styleClasses = [
      [
        { class: 'fa fa-wifi', name: 'Wi-Fi интернет' },
        { class: 'fa fa-archive', name: 'Хранение ценных вещей' },
        { class: 'fa fa-tint', name: 'Питьевая вода' }
      ],[
        { class: 'fa fa-car', name: 'Трансфер' },
        { class: 'fa fa-cutlery', name: 'Столовая' }
      ]
    ]
  }

  componentDidMount() {
    document.title = 'Услуги | Гостевой дом «Авия»';
  }

  onSelect(selectedService) {
    this.setState({selectedService: selectedService});
  }

  serviceShow(selectedService) {
    if (selectedService !== '') {
      return <ServiceDescription service={ selectedService }/>
    }
  }

  render() {
    return(
      <div className='services-page'>
        <div className='services'>
          <h2>Услуги</h2>
          { this.styleClasses.map((column, columnIndex) =>
            <div className='services-column' key={ columnIndex }>
              { column.map((elem, elemIndex) =>
                <div className='service' key={ elemIndex } onClick={ this.onSelect.bind(this, elem.name) }>
                  <div className='service-icon'>
                    <span className={ elem.class } aria-hidden='true'></span>
                  </div>
                  <div className='service-name'>
                    <p>{ elem.name }</p>
                  </div>
                </div>
              ) }
            </div>
          ) }
        </div>
        { this.serviceShow(this.state.selectedService) }
      </div>
    )
  }
}
