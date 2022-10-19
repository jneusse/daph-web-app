import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/messages'
import Dialog from '../components/Dialog'
import { useState } from 'react'
import FloatButton from '../components/BottomButon'
import FormCreateMessage from '../components/FormCreateMessage'

export type MsgDataType = {
  message: string
  fontFamily: string
}

export const Home = () => {
  const [open, setOpen] = useState(false)
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()
  const [msgData, setMsgData] = useState<MsgDataType>({
    message: messages[dayOfTheYear],
    fontFamily: 'Italianno'
  })

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onMsgChange = (data: MsgDataType) => {
    setMsgData(data)
    closeModal()
  }

  return (
    <>
      <FullCard
        message={msgData.message}
        fontFamily={msgData.fontFamily}
        date={date}
        onClick={openModal}
      ></FullCard>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <section className="p-1">Crea tu mensaje</section>
        <section className="p-1">
          <FormCreateMessage
            onMsgChange={onMsgChange}
            fontFamily={msgData.fontFamily}
            onClose={closeModal}
          />
        </section>
      </Dialog>
    </>
  )
}
