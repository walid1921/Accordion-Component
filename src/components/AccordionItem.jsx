import { useState } from "react"


function AccordionItem({ num, title, curOpen, setCurOpen, children }) {

  const isOpen = num === curOpen

  const handleOpen = () => {
    setCurOpen(isOpen ? null : num);
  }


  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : (num + 1)}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}

export default AccordionItem
