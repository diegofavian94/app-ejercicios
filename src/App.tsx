import './App.css'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import {Router, Route } from 'wouter'

function App() {
  

  return (
    <Router base="/app-ejercicios">
      <div className="App">
        <Route path="/" component={Home} />        
        <Route path="/main" component={Main} />
      </div>
    </Router>
  )
}

export default App
