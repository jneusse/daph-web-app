import React from 'react'

type Props = {
  onClick: () => void
}

const FloatButton = ({ onClick }: Props) => {
  return (
    <button className="rounded button-float" onClick={onClick}>
      C
    </button>
  )
}

export default FloatButton
