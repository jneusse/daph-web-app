import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  message: string
}

type Props = {
  onMsgChange: (msg: string) => void
}

const FormCreateMessage = ({ onMsgChange }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onMsgChange(data.message)
  }

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
      <input
        type="submit"
        className="border-primary mt-1"
        value="Guardar"
        style={{ marginLeft: 'auto' }}
      />
    </form>
  )
}

export default FormCreateMessage
