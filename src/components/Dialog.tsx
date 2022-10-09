import { useEffect, useRef } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Dialog = ({ isOpen, onClose, children }: Props) => {
  const ref: HTMLDialogElement | any = useRef(null)

  useEffect(() => {
    if (isOpen) {
      ref.current.close()
      ref.current.showModal()
    } else {
      ref.current.close()
    }
  }, [isOpen])

  return <dialog ref={ref}>{children}</dialog>
}

export default Dialog
