import {useState} from 'react';

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => {
    switch (isOpen) {
      case false:
        setIsOpen(true)
        break
      case true:
        setIsOpen(false)
        break
    }
  }

  return {
    isOpen,
    toggleHandler
  }
}
