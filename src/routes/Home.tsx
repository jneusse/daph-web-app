import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/messages'
import Dialog from '../components/Dialog'
import { useCallback, useRef, useState } from 'react'
import FormCreateMessage from '../components/FormCreateMessage'
import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'

export type MsgDataType = {
  message: string
  fontFamily: string
  bgColor?: string
}

export const Home = () => {
  const [open, setOpen] = useState(false)
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()
  const [msgData, setMsgData] = useState<MsgDataType>({
    message: messages[dayOfTheYear],
    fontFamily: 'Italianno',
    bgColor: '#000000'
  })

  const content = useRef<HTMLElement>(null)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onMsgChange = (data: MsgDataType) => {
    setMsgData(data)
    console.log(data)

    closeModal()
  }

  const handleCaptureClick = useCallback(async () => {
    if (content.current) {
      const canvas = await html2canvas(content.current)
      const dataURL = canvas.toDataURL('image/png')
      downloadjs(dataURL, 'download.png', 'image/png')
    }
  }, [])

  return (
    <>
      <FullCard
        message={msgData.message}
        fontFamily={msgData.fontFamily}
        date={date}
        onClick={openModal}
        bgColor={msgData.bgColor}
      ></FullCard>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <section className="p-1">Crea tu mensaje</section>
        <section className="p-1">
          <FormCreateMessage
            data={msgData}
            onMsgChange={onMsgChange}
            onClose={closeModal}
          />
        </section>
      </Dialog>
      <div className="card-hidden">
        <section
          className="container-downloable-card"
          ref={content}
          style={{ backgroundColor: msgData.bgColor }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: msgData.message }}
            style={{ fontFamily: msgData.fontFamily }}
          ></p>
        </section>
      </div>
      <menu className="actions my-2">
        <button className="border-primary" onClick={handleCaptureClick}>
          Descargar
        </button>
        <button className="border-primary" onClick={() => setOpen(true)}>
          Crear mensaje
        </button>
      </menu>
    </>
  )
}
