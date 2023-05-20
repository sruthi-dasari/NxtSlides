import './index.css'

import {Component} from 'react'

class SlideTabItem extends Component {
  state = {}

  onClickTab = () => {
    const {updateActiveTab, tabDetail} = this.props
    const {id} = tabDetail
    updateActiveTab(id)
  }

  render() {
    const {
      tabDetail,
      isActive,
      index,
      //   isActiveSlideTextsUpdated,
      //   updatedActiveSlideTab,
    } = this.props

    const {heading, description} = tabDetail
    //  const {heading, description} = isActive ? updatedActiveSlideTab : tabDetail

    const activeItem = isActive ? 'active-item' : ''

    const slideNumber = index + 1

    return (
      <li
        className={`slide-tab-container ${activeItem}`}
        testid={`slideTab${slideNumber}`}
      >
        <p className="slide-tab-number">{slideNumber}</p>
        <button
          type="button"
          className="slide-tab-button"
          onClick={this.onClickTab}
        >
          <h1 className="slide-tab-heading">{heading}</h1>
          <p className="slide-tab-para">{description}</p>
        </button>
      </li>
    )
  }
}

export default SlideTabItem
