import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/forMylove'
import Dialog from '../components/Dialog'
import { useState } from 'react'
import FormCreateMessage from '../components/FormCreateMessage'
import { Helmet } from 'react-helmet'
import { config } from '../config/config'

export type MsgDataType = {
  message: string
  fontFamily: string
}

export const MyLove = () => {
  const [open, setOpen] = useState(false)
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()
  const [msgData, setMsgData] = useState<MsgDataType>({
    message: messages[dayOfTheYear],
    fontFamily: 'Kalam'
  })

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onMsgChange = (data: MsgDataType) => {
    setMsgData(data)
    closeModal()
  }

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`${config.DAPHAPP_ENDPOINT}/para-mi-amor`}
        />
        <meta property="og:title" content="Para mi amor" />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content={`${config.DAPHAPP_ENDPOINT}/para-mi-amor`}
        />
        <meta
          property="og:image"
          content={`${config.DAPHAPP_ENDPOINT}/logo192.png`}
        />
      </Helmet>
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
            msg={msgData.message}
            onMsgChange={onMsgChange}
            fontFamily={msgData.fontFamily}
            onClose={closeModal}
          />
        </section>
      </Dialog>
    </>
  )
}
