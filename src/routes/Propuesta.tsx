import { useEffect, useState } from 'react'
import Dialog from '../components/Dialog'

type Props = {}

const gifs = [
  'https://media.giphy.com/media/dYZuqJLDVsWMLWyIxJ/giphy.gif',
  'https://media.giphy.com/media/hhSa6lfiw5KLe/giphy.gif',
  'https://media.giphy.com/media/TfEtuvZ4sviFlgjdVT/giphy.gif',
  'https://media.giphy.com/media/WfyqYbLH5rzl6/giphy.gif',
  'https://media.giphy.com/media/Vi0Ws3t4JSLOgdkaBq/giphy.gif',
  'https://media.giphy.com/media/J2WQhnfK2WuUE/giphy.gif',
  'https://media.giphy.com/media/9vzsVvke0fPAQ/giphy.gif',
  'https://media.giphy.com/media/veAy5UOhBdS3C/giphy.gif',
  'https://media.giphy.com/media/Oj6uU1GJTC5OM/giphy.gif',
  'https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif',
  'https://media.giphy.com/media/rjkJD1v80CjYs/giphy.gif',
  'https://media.giphy.com/media/12xiOA46vEYGl2/giphy.gif',
  'https://media.giphy.com/media/46zn6gzT8J6Npss1Uc/giphy.gif',
  'https://media.giphy.com/media/mWyKemYFFOsvK/giphy.gif'
]

export const Propuesta = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [urlImage, setUrlImage] = useState(gifs[0])

  useEffect(() => {
    const isOpen = localStorage.getItem('isOpened')
    if (isOpen === 'true') {
      alert('Ya has dicho, SI. No te puedes arrepentir')
      changeMessage()
      setOpen(true)
    }
  }, [])

  const changeMessage = (index = 0) => {
    if (index < gifs.length) {
      setUrlImage(gifs[index])
      setTimeout(() => {
        changeMessage(index + 1)
      }, 3000)
    } else {
      window.open('https://yisusmx.t.me')
      changeMessage(0)
    }
  }

  return (
    <div className="card-image-corazones">
      <img
        src="/images/corazones_rojos.webp"
        alt="corazones"
        className="image-corazones"
      />
      <div className="container-text text-center">
        <p className="text">
          Eres mia y de nadie mas, soy tuyo y de nadie mas. Quiero que sigamos
          juntos siempre y superemos nuestros problemas. Lo que es importante
          para tí, tambien es importante para mí. Por eso una vez mas debes
          decidir.
        </p>
        <p className="text">¿quieres ser mi novia?</p>
        <div className="row">
          <div className="col-6 text-center">
            <button
              onClick={() => {
                localStorage.setItem('isOpened', 'true')
                changeMessage()
                setOpen(true)
              }}
            >
              Si
            </button>
            <Dialog isOpen={open} onClose={() => setOpen(false)}>
              <img
                src={urlImage}
                alt="yes, yes, yes"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Dialog>
          </div>
          <div className="col-6 text-center">
            <button onClick={() => alert('Error, no permitido')}>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}
