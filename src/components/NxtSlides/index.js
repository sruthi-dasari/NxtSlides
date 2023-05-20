import './index.css'

import {Component} from 'react'

import SlideTabItem from '../SlideTabItem'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlideTab: initialSlidesList[0],
    headingText: '',
    // paraText: '',
    isHeadingAButton: true,
    isDescAButton: true,
    isActiveSlideTextsUpdated: false,
  }

  updateActiveTab = tabId => {
    console.log('In updateActiveTab()')
    const {slidesList} = this.state
    const selectedTab = slidesList.find(eachItem => eachItem.id === tabId)
    this.setState({activeSlideTab: selectedTab})
  }

  updateChangesInOriginalList = () => {
    console.log('In updateChangesInOriginalList()')
    const {activeSlideTab, slidesList} = this.state
    const {id, heading, description} = activeSlideTab

    const updatedSlidesList = slidesList.map(eachItem => {
      let newTab = {}
      if (eachItem.id === activeSlideTab.id) {
        newTab = {
          id,
          heading,
          description,
        }
        return newTab
      }
      return eachItem
    })
    console.log(updatedSlidesList)
    this.setState({slidesList: updatedSlidesList})
  }

  updateHeadingInActiveTab = () => {
    console.log('In updateHeadingInActiveTab()')
    const {headingText} = this.state

    this.setState(
      prevState => ({
        activeSlideTab: {...prevState.activeSlideTab, heading: headingText},
        isActiveSlideTextsUpdated: true,
      }),
      this.updateChangesInOriginalList,
    )
  }

  onClickDescButtonEl = () => {
    console.log('In onClickDescButtonEl()')
    this.setState({isDescAButton: false})
  }

  onBlurHeadingTextEl = () => {
    console.log('In onBlurHeadingTextEl()')
    this.updateHeadingInActiveTab()
  }

  onChangeHeading = event => {
    console.log('In onChangeHeading()')
    this.setState({headingText: event.target.value})
  }

  onClickHeadingButtonEl = () => {
    console.log('In onClickHeadingButtonEl()')
    console.log('Changing from button element to input text element')
    this.setState({isHeadingAButton: false})
  }

  renderHeading = () => {
    console.log('In renderHeading()')
    const {activeSlideTab, isHeadingAButton, headingText} = this.state

    const {heading} = activeSlideTab
    const headingButtonEl = (
      <input
        id="headingButton"
        type="button"
        value={heading}
        onClick={this.onClickHeadingButtonEl}
        className="heading-button"
      />
    )

    const headingTextEl = (
      <input
        id="headingButton"
        type="text"
        value={headingText}
        onBlur={this.onBlurHeadingTextEl}
        onChange={this.onChangeHeading}
        className="heading-text-input"
      />
    )

    const headingEl = isHeadingAButton ? headingButtonEl : headingTextEl
    return headingEl
  }

  renderDesc = () => {
    console.log('In renderDesc()')
    const {activeSlideTab, isDescAButton, descText} = this.state

    const {description} = activeSlideTab
    const descButtonEl = (
      <input
        id="descButton"
        type="button"
        value={description}
        onClick={this.onClickDescButtonEl}
        className="desc-button"
      />
    )

    const descTextEl = (
      <input
        id="descButton"
        type="text"
        value={descText}
        onChange={this.onChangeDesc}
        className="desc-text-input"
      />
    )

    const descEl = isDescAButton ? descButtonEl : descTextEl
    return descEl
  }

  render() {
    console.log('In render()')
    const {activeSlideTab, isActiveSlideTextsUpdated, slidesList} = this.state
    console.log(activeSlideTab)
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
          <ol className="slide-tabs-panel">
            {slidesList.map((eachItem, index) => (
              <SlideTabItem
                tabDetail={eachItem}
                key={eachItem.id}
                updateActiveTab={this.updateActiveTab}
                isActive={eachItem.id === activeSlideTab.id}
                index={index}
                // isActiveSlideTextsUpdated={isActiveSlideTextsUpdated}
                // updatedActiveSlideTab={activeSlideTab}
              />
            ))}
          </ol>
          <div className="current-slide-container">
            {this.renderHeading()}

            {this.renderDesc()}
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlides
