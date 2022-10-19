import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MsgDataType } from '../routes/Home'

type Inputs = {
  message: string
  fontFamily: string
}

type Props = {
  onMsgChange: (data: MsgDataType) => void
  fontFamily: string
  onClose: () => void
}

const FormCreateMessage = ({ onMsgChange, fontFamily, onClose }: Props) => {
  const [currentFont, setCurrentFont] = useState(fontFamily)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onMsgChange(data)
  }

  const fonts = ['Open Sans', 'Italianno', 'Kalam', 'Loved by the King']

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>mensaje</label>
      <textarea
        maxLength={80}
        minLength={6}
        rows={8}
        className="border-primary"
        placeholder="Escribe tu mensaje personalizado aqui"
        {...register('message', {
          required: true,
          maxLength: 80,
          minLength: 6
        })}
      />
      {errors.message?.type === 'minLength' && (
        <span className="form-error">mínimo 6 caracteres</span>
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

      <menu className="actions">
        <button
          type="submit"
          className="border-primary mt-2"
          style={{ marginRight: 'auto' }}
          onClick={onClose}
        >
          Cancelar
        </button>
        <input
          type="submit"
          className="border-primary mt-2 submit"
          value="Guardar"
          style={{ marginLeft: 'auto' }}
        />
      </menu>
    </form>
  )
}

export default FormCreateMessage
