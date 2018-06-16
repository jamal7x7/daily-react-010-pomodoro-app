import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Pomodoro </h1>
  </header>
)

const Audio = (props) => (
  <div className='audio'>
    Audio
  </div>
)
const Duration = (props) => (
  <div className='duration'>
    Duration
  </div>
)
const Timer = (props) => (
  <div className='timer'>
    Timer
  </div>
)
const Play = (props) => (
  <div className='play'>
    Play
  </div>
)
const Progression = (props) => (
  <div className='progression'>
    P
  </div>
)

const Pomodoro = (props) => (
  <div className='pomodoro'>
    <Audio />
    <Duration />
    <Timer />
    <Play />
    <Progression />
  </div>
)

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Pomodoro />

      </div>
    )
  }
}

export default App
