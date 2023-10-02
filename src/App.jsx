import Accordion from "./components/Accordion";
import questions from "./assets/data";



export default function App() {
  return (
    <div>
      <Accordion questions={questions} />
    </div>
  )
}