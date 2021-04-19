import React from 'react'
import './TopicsComponent.css'

const TopicsComponent = () => (
  <div className="topicsContainer">
    <h1>TOPICS</h1>
    <div className="topicTitles">
      <div className="topicElement" id="element1">
        <img alt="topic" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-icon-space.svg" className="topicImage" id="space" />
        <h3>Space</h3>
      </div>
      <div className="topicElement">
        <img alt="topic" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-topic-technology-kurzgesagt-in-a-nutshell_yt-topic-technology.svg" className="topicImage" id="technology" />
        <h3>Technology</h3>
      </div>
      <div className="topicElement">
        <img alt="topic" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-icon-biologie.svg" className="topicImage" id="biology" />
        <h3>Biology</h3>
      </div>
      <div className="topicElement">
        <img alt="topic" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-topic-philosophy-kurzgesagt-in-a-nutshell_yt-topic-technology_yt-topic-philosophy.svg" className="topicImage" id="philosophy" />
        <h3>Philosophy</h3>
      </div>
      <div className="topicElement">
        <img alt="topic" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-icon-society.svg" className="topicImage" id="society" />
        <h3>Society</h3>
      </div>
      <div className="topicElement">
        <img alt="topic" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-icon-physics.svg" className="topicImage" id="physics" />
        <h3>Physics</h3>
      </div>
    </div>
  </div>
)

export default TopicsComponent
