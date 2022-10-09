import moment from 'moment'
import FullCard from '../FullCard'
import { messages } from '../data/messages'
import Dialog from '../components/Dialog'
import { useState } from 'react'
import FloatButton from '../components/BottomButon'
import FormCreateMessage from '../components/FormCreateMessage'

export const Home = () => {
  const [open, setOpen] = useState(false)
  const date = moment().format('LLLL')
  const dayOfTheYear = moment().dayOfYear()
  const [message, setMessage] = useState(messages[dayOfTheYear])

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const onMsgChange = (msg) => {
    setMessage(msg)
    closeModal()
  }

  return (
    <>
      <FullCard message={message} date={date}></FullCard>
      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        <section className="p-1">Crea tu mensaje</section>
        <section className="p-1">
          <FormCreateMessage onMsgChange={onMsgChange} />
        </section>
        <menu>
          {/* <button
            className="border-primary px-2 py-1"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </button>

          <button
            className="border-primary px-2 py-1"
            onClick={() => setOpen(false)}
          >
            Guardar
          </button> */}
        </menu>
      </Dialog>
      <FloatButton onClick={openModal} />
    </>
  )
}
