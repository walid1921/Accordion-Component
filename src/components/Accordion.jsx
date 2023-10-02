import AccordionItem from "./AccordionItem"


function Accordion({ questions }) {
  return (
    <div className="accordion">
      {questions.map((qst, i) => (
        <AccordionItem text={qst.text} title={qst.title} num={i} key={qst.title} />
      ))}
    </div>
  )
}

export default Accordion
