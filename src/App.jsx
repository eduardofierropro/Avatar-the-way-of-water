import './App.scss'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

const App = () => {

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Hero />
      </main>
    </div>
  )
}

export default App
