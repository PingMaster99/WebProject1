import React from 'react'
import './NumbersComponent.css'

const NumbersComponent = () => (
  <div className="numbersContainer">
    <h1>KURZGESAGT IN NUMBERS</h1>
    <div className="numberImageContainer">
      <img alt="statistics" src="https://kurzgesagt.org/wp-content/themes/kurzgesagt/library/images/svg/youtube_infographic_desktop.svg" className="numbersImage" />
      <div className="dataContainer" id="producedVideos">
        <h3>105</h3>
        <h4>Produced Videos</h4>
      </div>
      <div className="dataContainer" id="subscribers">
        <h3>14,492,750</h3>
        <h4>Subscribers</h4>
      </div>
      <div className="dataContainer" id="views">
        <h3>1,328,965,173</h3>
        <h4>Views</h4>
      </div>
    </div>

  </div>
)

export default NumbersComponent
