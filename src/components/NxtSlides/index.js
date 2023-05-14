import './index.css'

import {Component} from 'react'

class NxtSlides extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="logo-img"
          />
          <h1 className="navbar-heading">Nxt Slides</h1>
        </div>
        <button type="button" className="new-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus-icon-img"
          />
          <p className="new-button-text">New</p>
        </button>
        <div className="slides-container">
          <div className="slides-list-container">{}</div>
          <div className="slide-view-container">{}</div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
