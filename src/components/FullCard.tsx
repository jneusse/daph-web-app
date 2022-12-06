import { theme } from '../config/theme'
import { MsgDataType } from '../types'

type Props = {
  date: string
  onClick?: () => void
  messageData: MsgDataType
}

const FullCard = ({ date, messageData, onClick }: Props) => {
  const {
    message = 'Un mensaje especíal espera por ti. Nos vemos pronto',
    fontFamily = 'Italianno',
    bgColor = theme.colors.backgroundColor,
    color = theme.colors.primary
  } = messageData

  return (
    <div className="full-size">
      <div
        className="full-card"
        style={{
          backgroundColor: bgColor,
          borderColor: color,
          background: `linear-gradient(180deg,  ${color} 0%, ${bgColor} 15%, ${bgColor} 85%,  ${color} 100%)`
        }}
      >
        <div
          className="full-card__item"
          dangerouslySetInnerHTML={{ __html: message }}
          style={{
            fontFamily: fontFamily,
            color: color
          }}
        ></div>
        {date && (
          <div className="full-card__item align-text-right">
            <span
              className="time"
              style={{ fontFamily: fontFamily, color: color }}
              onClick={onClick}
            >
              {date}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default FullCard
