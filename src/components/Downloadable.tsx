import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import { useCallback, useRef } from 'react'
import { MsgDataType } from '../types'

export const DownloadableImage = ({
  messageData
}: {
  messageData: MsgDataType
}) => {
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
            borderColor: messageData.color
          }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: messageData.message }}
            style={{
              fontFamily: messageData.fontFamily,
              color: messageData.color || '#f5821f'
            }}
          ></p>
          {messageData.image && (
            <div className="watermark">
              <img src={messageData.image} alt="charlandito podcast" />
            </div>
          )}
        </section>
      </div>
      <button className="border-primary" onClick={handleCaptureClick}>
        Descargar
      </button>
    </>
  )
}
