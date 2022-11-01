import { useCallback, useRef, useState } from 'react'
import Dialog from '../components/Dialog'
import FormCreateMessage from '../components/FormCreateMessage'
import { MsgDataType } from '../routes/Home'
import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import { config } from '../config/config'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <link rel="canonical" href={`${config.DAPHAPP_ENDPOINT}/charlandito`} />
        <meta property="og:title" content="Charlandito" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content={`${config.DAPHAPP_ENDPOINT}/charlandito`}
        />
        <meta
          property="og:image"
          content={`${config.DAPHAPP_ENDPOINT}/images/charlandito.png`}
        />
      </Helmet>
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
              msg={messageData.message}
              onMsgChange={onMsgChange}
              fontFamily={messageData.fontFamily}
              onClose={() => setOpen(false)}
            />
          </section>
        </Dialog>
        <menu className="actions">
          <button onClick={handleCaptureClick}>Download</button>
          <button onClick={() => setOpen(true)}>Create Mensaje</button>
        </menu>
      </div>
    </>
  )
}
