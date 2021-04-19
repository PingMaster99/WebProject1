import React from 'react'
import './GoalsSection.css'

const GoalsSection = () => (
  <div className="goalsContainer">
    <div className="imageSpacer">
      <div className="imageContainer">
        <img alt="goal" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-positive_impact-kurzgesagt-in-a-nutshell.svg" className="goalImage" />
        <h3>A positive impact on the world</h3>
      </div>
      <div className="imageContainer">
        <img alt="goal" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-knowledge-kurzgesagt-in-a-nutshell.svg" className="goalImage" />
        <h3>Knowledge is power</h3>
      </div>
      <div className="imageContainer">
        <img alt="goal" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-facts-kurzgesagt-in-a-nutshell_yt-facts.svg" className="goalImage" />
        <h3>Take the facts and tell a story</h3>
      </div>
    </div>
  </div>
)

export default GoalsSection
