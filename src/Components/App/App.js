import React from 'react'
import AboutYoutube from '../AboutYoutube'
import GoalsSection from '../GoalsSection'
import NumbersComponent from '../NumbersComponent'
import TopicsComponent from '../TopicsComponent'
import ProjectsComponent from '../ProjectsComponent'
import CooperateComponent from '../CooperateComponent'
import BottomBarComponent from '../BottomBarComponent'
import KurzHeader from '../KurzHeader'
import './App.css'

const App = () => (
  <div className="App">

    <AboutYoutube />
    <GoalsSection />
    <NumbersComponent />
    <TopicsComponent />
    <ProjectsComponent />
    <CooperateComponent />
    <BottomBarComponent />
    <KurzHeader />
  </div>
)

export default App
