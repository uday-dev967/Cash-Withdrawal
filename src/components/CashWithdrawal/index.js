import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  onTryToWithdraw = value => {
    const {currentBalance} = this.state
    if (currentBalance >= value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    } else {
      // eslint-disable-next-line no-alert
      alert('No enough balance')
    }
  }

  render() {
    const {denominationsList, firstName = 'Uday Kanda'} = this.props
    const {currentBalance} = this.state
    const firstLetter = firstName[0]
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="header-container">
            <div className="profile-container">
              <div className="initial-container">
                <h1 className="inital">{firstLetter}</h1>
              </div>
              <h1 className="name">{firstName}</h1>
            </div>
            <div className="balance-container">
              <p className="side-heading"> Your Balance</p>
              <div className="balance-amount-container">
                <p className="amount">{currentBalance}</p>
                <p className="rupees">In Rupees</p>
              </div>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="heading">Withdraw</p>
            <p className="side-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  key={each.id}
                  denomination={each}
                  onTryToWithdraw={this.onTryToWithdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
