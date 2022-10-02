import './sass/app.scss'
import FullCard from './FullCard'
import { messages } from './data/messages'

function App() {
  return (
    <div className="App">
      <FullCard message={messages[0]}></FullCard>
    </div>
  )
}

export default App
