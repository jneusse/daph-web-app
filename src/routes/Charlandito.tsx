import { useCallback, useRef, useState } from 'react'
import Dialog from '../components/Dialog'
import FormCreateMessage from '../components/FormCreateMessage'
import { MsgDataType } from '../routes/Home'
import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'

export const Charlandito = () => {
  const [open, setOpen] = useState(false)
  const [messageData, setMessageData] = useState<MsgDataType>({
    message: '',
    fontFamily: 'Ropa Sans'
  })

  const content = useRef<HTMLElement>(null)

  const onMsgChange = (data: MsgDataType) => {
    setOpen(false)
    setMessageData(data)
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
      <div className="full-size">
        <section className="container-charlandito" ref={content}>
          <p
            dangerouslySetInnerHTML={{ __html: messageData.message }}
            style={{ fontFamily: messageData.fontFamily }}
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
        <menu className="actions">
          <button className="border-primary" onClick={handleCaptureClick}>
            Descargar
          </button>
          <button className="border-primary" onClick={() => setOpen(true)}>
            Crear mensaje
          </button>
        </menu>
      </div>
    </>
  )
}
