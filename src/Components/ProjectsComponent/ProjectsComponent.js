import React from 'react'
import './ProjectsComponent.css'

const ProjectsComponent = () => (
  <div className="projectsContainer">
    <h1>PROJECTS</h1>

    <div className="projectAnchorsContainer">

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/the-bacteriophage/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/Phage.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/the-bacteriophage/">
            The Bacteriophage
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/why-alien-life-would-be-our-doom/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/Great-Filter.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/why-alien-life-would-be-our-doom/">
            The Great Filter
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/string-theory-explained/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/String.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/string-theory-explained/">
            String Theory Explained
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/how-to-cure-aging/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/Aging.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/how-to-cure-aging/">
            How to Cure Aging
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/optimistic-nihilism/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/optimistic.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/optimistic-nihilism/">
            Optimistic Nihilism
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/the-rise-of-the-machines/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/Automation.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/the-rise-of-the-machines/">
            The Rise of the Machines
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/human-origins/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/Human.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/human-origins/">
            What happened before history?
          </a>
        </div>
      </div>

      <div className="projectElement">
        <a className="imageAnchor" href="https://kurzgesagt.org/portfolio/crispr/">
          <img alt="project" className="imageElement" src="https://kurzgesagt.org/wp-content/uploads/2018/07/Crispr.png" />
        </a>
        <div className="titleContainer">
          <a href="https://kurzgesagt.org/portfolio/crispr/">
            CRISPR
          </a>
        </div>
      </div>
    </div>

  </div>
)

export default ProjectsComponent
