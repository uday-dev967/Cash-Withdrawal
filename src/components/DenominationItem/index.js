import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  onWithdraw = () => {
    const {denomination, onTryToWithdraw} = this.props
    const {value} = denomination
    onTryToWithdraw(value)
  }

  render() {
    const {denomination} = this.props
    const {value} = denomination
    return (
      <li className="list-item">
        <button type="button" className="button" onClick={this.onWithdraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
