import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/forMylove'
import Dialog from '../components/Dialog'
import { useState } from 'react'
import FormCreateMessage from '../components/FormCreateMessage'
import { DownloadableImage } from '../components/Downloadable'
import { MsgDataType } from '../types'

export const MyLove = () => {
  const [open, setOpen] = useState(false)
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()
  const [messageData, setMessageData] = useState<MsgDataType>({
    message: messages[dayOfTheYear],
    fontFamily: 'Kalam',
    bgColor: '#OOOOOO'
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
        bgColor={messageData.bgColor}
        message={messageData.message}
        fontFamily={messageData.fontFamily}
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
        <button className="border-primary" onClick={() => setOpen(true)}>
          Crear mensaje
        </button>
      </menu>
    </>
  )
}
