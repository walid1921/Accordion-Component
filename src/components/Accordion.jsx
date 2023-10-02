import { useState } from "react"
import AccordionItem from "./AccordionItem"


function Accordion({ questions }) {
  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className="accordion">
      {questions.map((qst, i) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          title={qst.title}
          num={i}
          key={qst.title}
        >
          {qst.text}
        </AccordionItem>
      ))}

     {/* that one is hard coded (not from questions data) */}
      <AccordionItem
        curOpen={curOpen}
        setCurOpen={setCurOpen}
        title={'Test 1'}
        num={23}
        key={'test 1'}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  )
}

export default Accordion
