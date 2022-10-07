import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/messages'
import { useLoaderData } from 'react-router-dom'

export const Message = () => {
  const date = moment().format('LLLL')
  const { messageId } = useLoaderData()
  return <FullCard message={messages[messageId]} date={date}></FullCard>
}
