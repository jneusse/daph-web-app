import moment from 'moment'
import FullCard from '../components/FullCard'
import { messages } from '../data/messages'
import Dialog from '../components/Dialog'
import { useState } from 'react'
import FormCreateMessage from '../components/FormCreateMessage'
import { MsgDataType } from '../types'
import { DownloadableImage } from '../components/Downloadable'
import { theme } from '../config/theme'

export const Home = () => {
  const [open, setOpen] = useState(false)
  const date = moment().format('LL')
  const dayOfTheYear = moment().dayOfYear()
  const [messageData, setMessageData] = useState<MsgDataType>({
    message: messages[dayOfTheYear],
    fontFamily: theme.fonts[4],
    bgColor: theme.colors.backgroundColor
  })

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onMsgChange = (data: MsgDataType) => {
    setMessageData(data)
    closeModal()
  }

  return (
    <>
      <FullCard
        messageData={messageData}
        date={date}
        onClick={openModal}
      ></FullCard>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <section className="p-1">Crea tu mensaje</section>
        <section className="p-1">
          <FormCreateMessage
            data={messageData}
            onMsgChange={onMsgChange}
            onClose={closeModal}
          />
        </section>
      </Dialog>
      <menu className="actions my-2">
        <DownloadableImage messageData={messageData} />
        <button className="border-color-primary" onClick={() => setOpen(true)}>
          Crear mensaje
        </button>
      </menu>
    </>
  )
}
