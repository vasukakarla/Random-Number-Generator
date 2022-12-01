// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {random: 0}

  onGenerateRandomNum = () => {
    this.setState({random: parseInt(Math.random() * 100)})
  }

  render() {
    const {random} = this.state
    return (
      <div className="bg_container">
        <div className="random_container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateRandomNum}
          >
            Generate
          </button>
          <p className="number">{random}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumber
