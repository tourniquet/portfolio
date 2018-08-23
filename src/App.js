import React from 'react'
import styled from 'styled-components'

// components
import StatelessComponent from './components/StatelessComponent/StatelessComponent'
import StatefullComponent from './components/StatefullComponent/StatefullComponent'

const App = () => {
  return (
    <div>
      <StatefullComponent />
      <StatelessComponent />
    </div>
  )
}

export default App
