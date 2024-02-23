import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {startTime: 25, isStart: false}

  ondecre = () => {
    this.setState(prev => ({startTime: prev.startTime - 1}))
  }

  onIncre = () => {
    this.setState(prev => ({startTime: prev.startTime + 1}))
  }

  resetbtn = () => {
    this.setState({startTime: 25})
  }

  startbtn = () => {
    this.setState(prev => ({isStart: !prev.isStart}))
  }

  compoundWillMount() {
    this.startbtn = () => {
      const {startTime} = this.time
      this.timeId = setInterval(startTime, 1000)
    }
  }

  render() {
    const {startTime, isStart} = this.state
    return (
      <div className="bg">
        <h1 className="head">Digital Timer</h1>
        <div>
          <div className="img card">
            <p>{startTime}</p>
            {isStart && <p>Running</p>}
            {!isStart && <p>Paused</p>}
          </div>
          <div>
            <button type="button" onClick={this.startbtn}>
              <img
                className="imgs"
                alt="play icon"
                src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
              />
              Start
            </button>
            <button type="button" onClick={this.resetbtn}>
              <img
                className="imgs"
                alt="pause"
                src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
              />
              Reset
            </button>
            <div>
              <p>set limit</p>
              <button type="button" onClick={this.ondecre}>
                -
              </button>
              <p>{startTime}</p>
              <button type="button" onClick={this.onIncre}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
