type Props = {
  message: string
  date: string
  fontFamily?: string
}

const FullCard = ({
  message = 'Un mensaje especíal espera por ti. Nos vemos pronto',
  date,
  fontFamily = 'Italianno'
}: Props) => {
  return (
    <div className="full-card">
      <div className="full-card__item" style={{ fontFamily: fontFamily }}>
        {message}
      </div>
      {date && (
        <div className="full-card__item align-text-right">
          <span className="time" style={{ fontFamily: fontFamily }}>
            {date}
          </span>
        </div>
      )}
    </div>
  )
}

export default FullCard
