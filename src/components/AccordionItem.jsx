import { useState } from "react"


function AccordionItem({ num, title, text }) {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(open => !open);
  }


  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : (num + 1)}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}

export default AccordionItem
