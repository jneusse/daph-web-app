import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MsgDataType } from '../routes/Home'

type Inputs = {
  message: string
  fontFamily: string
}

type Props = {
  msg?: string
  onMsgChange: (data: MsgDataType) => void
  fontFamily: string
  onClose: () => void
}

const FormCreateMessage = ({
  msg,
  onMsgChange,
  fontFamily,
  onClose
}: Props) => {
  const [currentMsg, setCurrentMsg] = useState(msg)
  const [currentFont, setCurrentFont] = useState(fontFamily)
  const {
    register,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit = () => {
    onMsgChange({ message: currentMsg || '', fontFamily: currentFont })
  }

  const fonts = ['Open Sans', 'Italianno', 'Kalam', 'Loved by the King']

  return (
    <>
      <form>
        <label>mensaje</label>
        <textarea
          rows={8}
          className="border-primary"
          placeholder="Escribe tu mensaje personalizado aqui"
          {...register('message', {
            value: currentMsg || '',
            onChange: (e) => {
              setCurrentMsg(e.target.value)
            },
            required: true,
            maxLength: 160,
            minLength: 6
          })}
        />
        {errors.message?.type === 'minLength' && (
          <span className="form-error">mínimo 6 caracteres</span>
        )}
        {errors.message?.type === 'maxLength' && (
          <span className="form-error">máximo 160 caracteres</span>
        )}
        <label>font</label>
        <select
          defaultValue={fontFamily}
          {...register('fontFamily', {
            required: true,
            onChange: (e) => {
              setCurrentFont(e.target.value)
            }
          })}
          style={{ fontFamily: currentFont }}
          className="border-primary"
        >
          {fonts.map((option, key) => (
            <option key={key} value={option} style={{ fontFamily: option }}>
              {option}
            </option>
          ))}
        </select>
      </form>
      <menu className="actions">
        <button
          className="border-primary mt-2"
          style={{ marginRight: 'auto' }}
          onClick={onClose}
        >
          Cancelar
        </button>
        <button
          className="border-primary mt-2"
          style={{ marginRight: 'auto' }}
          onClick={onSubmit}
        >
          Guardar
        </button>
      </menu>
    </>
  )
}

export default FormCreateMessage
