import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import { useCallback, useRef } from 'react'
import { theme } from '../config/theme'
import { MsgDataType } from '../types'

interface DownloadableImageType {
  messageData: MsgDataType
  className?: string
}

export const DownloadableImage = ({
  messageData,
  className = ''
}: DownloadableImageType) => {
  const content = useRef<HTMLElement>(null)

  const handleCaptureClick = useCallback(async () => {
    if (content.current) {
      const canvas = await html2canvas(content.current)
      const dataURL = canvas.toDataURL('image/png')
      downloadjs(dataURL, 'download.png', 'image/png')
    }
  }, [])

  return (
    <>
      <div className="card-hidden">
        <section
          className="container-downloable-card"
          ref={content}
          style={{
            backgroundColor: messageData.bgColor,
            borderColor: messageData.borderColor || messageData.color
          }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: messageData.message }}
            style={{
              fontFamily: messageData.fontFamily,
              color: messageData.color || theme.colors.primary
            }}
          ></p>
          {messageData.image && (
            <div className="watermark">
              <img src={messageData.image} alt="charlandito podcast" />
            </div>
          )}
        </section>
      </div>
      <button
        className={`border-color-primary ${className}`}
        onClick={handleCaptureClick}
      >
        Descargar
      </button>
    </>
  )
}
