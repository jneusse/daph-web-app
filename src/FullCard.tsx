type Props = {
  message: string
  date: string
}

const FullCard = ({
  message = 'Un mensaje especíal espera por ti. Nos vemos pronto',
  date
}: Props) => {
  return (
    <div className="full-card">
      <div className="full-card__item">{message}</div>
      {date && (
        <div className="full-card__item align-text-right">
          <span className="time ">{date}</span>
        </div>
      )}
    </div>
  )
}

export default FullCard
