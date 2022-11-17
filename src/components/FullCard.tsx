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
        style={{ backgroundColor: bgColor, borderColor: color }}
      >
        <div
          className="full-card__item"
          dangerouslySetInnerHTML={{ __html: message }}
          style={{
            fontFamily: fontFamily,
            color: color,
            textShadow: `-1rem 1rem 1rem ${color}`
          }}
        >
          {/* {message.trim()} */}
        </div>
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
