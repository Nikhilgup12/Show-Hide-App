import './index.css'
import {Component} from 'react'
class ShowHide extends Component {
  state = {firstname: false, lastname: false}
  FirstName = () => {
    const {firstname} = this.state
    this.setState(hide => ({firstname: !hide.firstname}))
  }
  LastName = () => {
    const {lastname} = this.state
    this.setState(hide => ({lastname: !hide.lastname}))
  }
  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="main-heading"> Show/Hide </h1>
          <div className="ShowHidecontainer">
            <div>
              <div>
                <button className="button" onClick={this.FirstName}>
                  {' '}
                  Show/Hide Firstname{' '}
                </button>
              </div>
              {firstname ? (
                <div className="nameContainer">
                  {' '}
                  <h1 className="name"> Joe </h1>
                </div>
              ) : (
                ''
              )}
            </div>

            <div>
              <button className="button" onClick={this.LastName}>
                {' '}
                Show/Hide Lastname{' '}
              </button>
              {lastname ? (
                <div className="nameContainer">
                  {' '}
                  <h1 className="name"> Jonas </h1>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
