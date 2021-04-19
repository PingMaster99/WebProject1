import React from 'react'
import './KurzHeader.css'

const KurzHeader = () => (
  <div className="header">
    <img alt="logo" src="https://kurzgesagt.org/wp-content/themes/kurzgesagt/library/images/logo.gif" className="mainLogo" />
    <a href="https://kurzgesagt.org/" className="barComponent" id="youtubeBarElement">Youtube</a>
    <a href="https://kurzgesagt.org/" className="barComponent">Agency</a>
    <a href="https://kurzgesagt.org/" className="barComponent">About</a>
    <a href="https://kurzgesagt.org/" className="barComponent">Patreon</a>
    <a href="https://kurzgesagt.org/" className="barComponent">Contact</a>
    <a href="https://kurzgesagt.org/" className="barComponent">Jobs</a>
    <a href="https://kurzgesagt.org/" className="barComponent">Shop</a>
  </div>
)

export default KurzHeader
