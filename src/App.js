import {useState} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

const App = () => {
  const [showContent, onToggleShowContent] = useState(true)
  const [showLeftNavbar, onToggleShowLeftNavbar] = useState(true)
  const [showRightNavbar, onToggleShowRightNavbar] = useState(true)

  return (
    <ConfigurationContext.Provider
      value={{
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      }}
    >
      <div>
        <ConfigurationController />
        <Layout />
      </div>
    </ConfigurationContext.Provider>
  )
}

export default App
