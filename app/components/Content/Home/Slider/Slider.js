import React from 'react'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.imagePaths = [
      '../images/Hotel1.jpg',
      '../images/Hotel2.jpg',
      '../images/Hotel3.jpg',
      '../images/Hotel4.jpg'
    ]

    this.state = {
      imageIndex: 0,
      startImage: this.imagePaths[0]
    }
  }

  componentDidMount() {
    this.createInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.sliderInterval);
  }

  createInterval() {
    let sliderInterval = setInterval(() => {
      let imageIndex = this.state.imageIndex + 1;
      this.changeImage(imageIndex);
    }, 5000);
    this.setState({ sliderInterval: sliderInterval });
  }

  onClick(imageIndex) {
    this.changeImage(imageIndex);
    clearInterval(this.state.sliderInterval);
    this.createInterval();
  }

  changeImage(imageIndex) {
    if (imageIndex > this.imagePaths.length - 1) {
      imageIndex = 0;
    } else {
      if (imageIndex < 0) {
        imageIndex = this.imagePaths.length - 1;
      }
    }
    this.setState({
      imageIndex: imageIndex,
      startImage: this.imagePaths[imageIndex]
    });
  }

  render() {
    return(
      <div className='slider' style={{ backgroundImage: `url(${this.state.startImage})` }}>
        <div className='left-side'>
          <div className='prev-img' onClick={this.onClick.bind(this, this.state.imageIndex - 1)}>
            <span className='fa fa-chevron-left' aria-hidden='true'></span>
          </div>
        </div>
        <div className='center-side'>
          <div className='slider-circles'>
            { this.imagePaths.map((item, index) =>
              index == this.state.imageIndex ? (
                <div className='slider-circle active-circle' key={index}></div>
              ) : (
                <div className='slider-circle' key={index}></div>
              )
            )}
          </div>
        </div>
        <div className='right-side'>
          <div className='next-img' onClick={this.onClick.bind(this, this.state.imageIndex + 1)}>
            <span className='fa fa-chevron-right' aria-hidden='true'></span>
          </div>
        </div>
      </div>
    )
  }
}
