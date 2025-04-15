//  importing methods and functions

import {Component} from 'react'

import './index.css'

// class Stopwatch
const initialState = {
  timeInMinutes: 0,
  timeInSeconds: 0,
}
class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
  }

  onClickStartBtn = () => {
    this.timerId = setInterval(this.timer, 1000)
  }

  onClickStopBtn = () => {
    this.clearTimeInterval()
  }

  onClickResetBtn = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  timer = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  formatTime = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    const minutes = Math.floor(timeInMinutes + timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }

  render() {
    return (
      <div className="stopwatch-app">
        <div className="app-container">
          <h1 className="title">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="title-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-img"
                alt="stopwatch"
              />
              <h1 className="card-title">Timer</h1>
            </div>
            <h1 className="time">{this.formatTime()}</h1>
            <div className="btn-operators-container">
              <button
                className="btn-operator start-btn"
                type="button"
                onClick={this.onClickStartBtn}
              >
                Start
              </button>
              <button
                className="btn-operator stop-btn"
                type="button"
                onClick={this.onClickStopBtn}
              >
                Stop
              </button>
              <button
                className="btn-operator reset-btn"
                type="button"
                onClick={this.onClickResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
