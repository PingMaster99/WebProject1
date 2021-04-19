import React from 'react'
import './CooperateComponent.css'

const CooperateComponent = () => (
  <div className="cooperateContainer">
    <h1>LET&apos;S COOPERATE</h1>
    <p className="cooperateParagraph">You want to work with us or support what we do? There are different ways we can start something together.</p>
    <div className="cooperationAlternativesContainer">
      <div className="cooperation">
        <img alt="coop" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-sponsorships-kurzgesagt-in-a-nutshell.svg" />
        <h3>Sponsorships</h3>
        <p>
          Do you want to raise awareness on a certain topic? We offer a limited amount of
          sponsorships on
          our YouTube channel. We cover the topic in the typical kurzgesagt style and leave
          room for a message to our followers at the end of the video.
        </p>
      </div>

      <div className="cooperation">
        <img alt="coop" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-ads-kurzgesagt-in-a-nutshell_yt-ads.svg" />
        <h3>Ads</h3>
        <p>
          You have a product, a website or an app that could be interesting to our viewers? We give
          selected firms the opportunity to introduce their product at the end of one of our videos.
        </p>
      </div>

      <div className="cooperation">
        <img alt="coop" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-grants-kurzgesagt-in-a-nutshell.svg" />
        <h3>Grants</h3>
        <p>
          Do you share our passion for spreading knowledge? Make it possible
          for us to do more of what you
          love through a grant. Grants empowers us to cover a broad range of topics and produce more
          content.
        </p>
      </div>

      <div className="cooperation">
        <img alt="coop" src="https://kurzgesagt.org/wp-content/uploads/2018/07/yt-donations-kurzgesagt-in-a-nutshell.svg" />
        <h3>Donations</h3>
        <p>
          You simply like what we do and would like to support our work?
          Besides becoming a patron, you
          also have the option to give a donation to kurzgesagt.
        </p>
      </div>

    </div>
    <a className="startButton" href="mailto:business@kurzgesagt.org">
      <h1>LET&apos;S START SOMETHING TOGETHER</h1>
    </a>
  </div>

)

export default CooperateComponent
