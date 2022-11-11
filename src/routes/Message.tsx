import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/messages'
import { useLoaderData } from 'react-router-dom'

type MessageType = {
  messageId: number
}

export const Message = () => {
  const date = moment().format('LLLL')
  const { messageId } = useLoaderData() as MessageType
  return (
    <FullCard
      messageData={{ message: messages[messageId] }}
      date={date}
    ></FullCard>
  )
}
