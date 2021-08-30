import './App.css'
import { SimpleContextProvider } from 'context/SimpleContext'
import { FirstChildComponent } from 'components/FirstChildComponent'
import { AnotherFirstLevelComponent } from 'components/AnotherFirstLevelComponent'

const App = () => {
  return (
    <div className="App">
      <SimpleContextProvider>
        <header>App root</header>
        <FirstChildComponent />
        <AnotherFirstLevelComponent />
      </SimpleContextProvider>
    </div>
  )
}

export default App
