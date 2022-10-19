type Props = {
  message: string
  date: string
  fontFamily?: string
  onClick?: () => void
}

const FullCard = ({
  message = 'Un mensaje especíal espera por ti. Nos vemos pronto',
  date,
  fontFamily = 'Italianno',
  onClick
}: Props) => {
  return (
    <div className="full-card">
      <div className="full-card__item" style={{ fontFamily: fontFamily }}>
        {message}
      </div>
      {date && (
        <div className="full-card__item align-text-right">
          <span
            className="time"
            style={{ fontFamily: fontFamily }}
            onClick={onClick}
          >
            {date}
          </span>
        </div>
      )}
    </div>
  )
}

export default FullCard
