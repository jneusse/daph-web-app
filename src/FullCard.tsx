type Props = {
  message: string
}

const FullCard = ({
  message = 'Un mensaje especial espera por tí.'
}: Props) => {
  return (
    <div className="full-card">
      <div className="full-card__item">{message}</div>
    </div>
  )
}

export default FullCard
