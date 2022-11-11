import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MsgDataType } from '../types'

type Inputs = {
  message: string
  fontFamily: string
  bgColor: string
  color: string
}

type Props = {
  data: MsgDataType
  onMsgChange: (data: MsgDataType) => void
  onClose: () => void
}

const FormCreateMessage = ({ data, onMsgChange, onClose }: Props) => {
  const [currentMsg, setCurrentMsg] = useState(data.message)
  const [currentFont, setCurrentFont] = useState(data.fontFamily)
  const [currentBgColor, setCurrentBgColor] = useState(
    data.bgColor || '#000000'
  )
  const [currentColor, setCurrentColor] = useState(data.color || '#f5821f')
  const {
    register,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit = () => {
    onMsgChange({
      message: currentMsg?.replace(/\r?\n/g, '<br />').trim() || '',
      fontFamily: currentFont,
      bgColor: currentBgColor,
      color: currentColor
    })
  }

  const fonts = [
    'Open Sans',
    'Italianno',
    'Kalam',
    'Loved by the King',
    'Myriad Pro Condensed',
    'Century Gothic',
    'Century Gothic Condensed'
  ]

  return (
    <>
      <form>
        <label>Mensaje</label>
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
        <label>Fuente</label>
        <select
          defaultValue={data.fontFamily}
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
        <label>Color</label>
        <input
          type="color"
          defaultValue={currentColor}
          {...register('color', {
            required: true,
            onChange: (e) => {
              setCurrentColor(e.target.value)
            }
          })}
          className="border-primary"
        />
        <label>Fondo</label>
        <input
          type="color"
          defaultValue={currentBgColor}
          {...register('bgColor', {
            required: true,
            onChange: (e) => {
              setCurrentBgColor(e.target.value)
            }
          })}
          className="border-primary"
        />
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
