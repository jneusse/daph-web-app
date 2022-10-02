import './sass/app.scss'
import FullCard from './FullCard'
import { messages } from './data/messages'
import moment from 'moment'
import 'moment/locale/es'

function App() {
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()

  return (
    <div className="App">
      <FullCard message={messages[dayOfTheYear]} date={date}></FullCard>
    </div>
  )
}

export default App
