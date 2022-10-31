import { useState } from 'react'
import Dialog from '../components/Dialog'
import FormCreateMessage from '../components/FormCreateMessage'
import { MsgDataType } from '../routes/Home'

export const Charlandito = () => {
  const [open, setOpen] = useState(false)
  const [messageData, setMessageData] = useState<MsgDataType>({
    message: '',
    fontFamily: 'Ropa Sans'
  })

  const onMsgChange = (data: MsgDataType) => {
    setOpen(false)
    setMessageData(data)
  }
  return (
    <div className="full-size">
      <div className="container-charlandito">
        <p
          dangerouslySetInnerHTML={{ __html: messageData.message }}
          style={{ fontFamily: messageData.fontFamily }}
        ></p>
        <div className="watermark">
          <img src="/images/charlandito.png" alt="charlandito podcast" />
        </div>
      </div>
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
      <menu>
        <button onClick={() => setOpen(true)}>Create Mensaje</button>
      </menu>
    </div>
  )
}
