// Write your code here
import {Component} from 'react'
import './index.css'

class stopwatch extends Component {
  state = {seconds: 0}

  onClickStartButton = () => {
    this.timerId = setInterval(this.goClock, 1000)
  }

  goClock = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onClickStopButton = () => {
    clearInterval(this.timerId)
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0})
  }

  render() {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    const wantedMinutes = minutes >= 10 ? `${minutes}` : `0${minutes}`
    const wantedSeconds =
      remainingSeconds >= 10 ? `${remainingSeconds}` : `0${remainingSeconds}`
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="clock-container">
          <div className="clock-Timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock"
            />
            <p>Timer</p>
          </div>

          <h1>
            {wantedMinutes}:{wantedSeconds}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onClickStartButton}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default stopwatch
