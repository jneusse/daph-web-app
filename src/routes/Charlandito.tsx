import { useState } from 'react'
import Dialog from '../components/Dialog'
import FormCreateMessage from '../components/FormCreateMessage'
import { MsgDataType } from '../types'
import { DownloadableImage } from '../components/Downloadable'

export const Charlandito = () => {
  const [open, setOpen] = useState(false)
  const [messageData, setMessageData] = useState<MsgDataType>({
    message: '',
    fontFamily: 'Ropa Sans'
  })

  const onMsgChange = (data: MsgDataType) => {
    setOpen(false)
    setMessageData({
      ...data,
      color: data.bgColor === '#000000' ? '#FFFFFF' : '#000000',
      image: '/images/charlandito.png'
    })
  }

  return (
    <>
      <div className="full-size">
        <section
          className="container-charlandito"
          style={{ backgroundColor: messageData.bgColor }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: messageData.message }}
            style={{
              fontFamily: messageData.fontFamily,
              color: messageData.bgColor === '#000000' ? '#FFFFFF' : '#000000'
            }}
          ></p>
          <div className="watermark">
            <img src="/images/charlandito.png" alt="charlandito podcast" />
          </div>
        </section>
        <Dialog isOpen={open} onClose={() => setOpen(false)}>
          <section className="p-1">Crea tu mensaje</section>
          <section className="p-1">
            <FormCreateMessage
              data={messageData}
              onMsgChange={onMsgChange}
              onClose={() => setOpen(false)}
            />
          </section>
        </Dialog>
        <menu className="actions mt-2">
          <DownloadableImage messageData={messageData} />
          <button className="border-primary" onClick={() => setOpen(true)}>
            Crear mensaje
          </button>
        </menu>
      </div>
    </>
  )
}
