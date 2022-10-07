import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/messages'

export const Home = () => {
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()
  return (
    <>
      <FullCard message={messages[dayOfTheYear]} date={date}></FullCard>
    </>
  )
}
