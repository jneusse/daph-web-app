type Props = {
  message: string
  date: string
  fontFamily?: string
  onClick?: () => void
  bgColor?: string
}

const FullCard = ({
  message = 'Un mensaje especíal espera por ti. Nos vemos pronto',
  date,
  onClick,
  fontFamily = 'Italianno',
  bgColor = '#000000'
}: Props) => {
  return (
    <div className="full-card" style={{ backgroundColor: bgColor }}>
      <div className="full-card__item" style={{ fontFamily: fontFamily }}>
        {message.trim()}
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
