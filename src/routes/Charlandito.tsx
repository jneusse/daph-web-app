import { useState } from 'react'
import Dialog from '../components/Dialog'
import FormCreateMessage from '../components/FormCreateMessage'
import { MsgDataType } from '../types'
import { DownloadableImage } from '../components/Downloadable'
import { theme } from '../config/theme'

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
      color:
        data.bgColor === theme.colors.black
          ? theme.colors.white
          : theme.colors.black,
      image: '/images/charlandito.png',
      borderColor: theme.colors.primaryCharlandito
    })
  }

  return (
    <>
      <div className="full-size">
        <div
          className="container-charlandito"
          style={{ backgroundColor: messageData.bgColor }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: messageData.message }}
            style={{
              fontFamily: messageData.fontFamily,
              color:
                messageData.bgColor === theme.colors.black
                  ? theme.colors.white
                  : theme.colors.black
            }}
          ></p>
          <div className="watermark">
            <img src="/images/charlandito.png" alt="charlandito podcast" />
          </div>
        </div>
        <Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          className="charlandito"
        >
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
          <DownloadableImage
            className="charlandito"
            messageData={messageData}
          />
          <button
            className="charlandito border-color-primary"
            onClick={() => setOpen(true)}
          >
            Crear mensaje
          </button>
        </menu>
      </div>
    </>
  )
}
