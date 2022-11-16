import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

const Dialog = ({ isOpen, onClose, children, className = '' }: Props) => {
  const ref: HTMLDialogElement | any = useRef(null)

  useEffect(() => {
    if (isOpen) {
      ref.current.close()
      ref.current.showModal()
      ref.current.addEventListener('cancel', (event: Event) => {
        event.preventDefault()
      })
    } else {
      ref.current.close()
    }
    return ref.current.removeEventListener('cancel', (event: Event) => {
      event.preventDefault()
    })
  }, [isOpen])

  return (
    <dialog ref={ref} className={className}>
      {children}
    </dialog>
  )
}

export default Dialog
