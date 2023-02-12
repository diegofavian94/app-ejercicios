import './App.css'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import { Route } from 'wouter'

function App() {
  

  return (
    <div className="App">
      <Route path="/" component={Home} />        
      <Route path="/main" component={Main} />
    </div>
  )
}

export default App
