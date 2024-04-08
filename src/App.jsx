import Flashcard from "./components/Flashcard.jsx";
import {questions} from "./data/questionsData.json"

function App() {
   return <Flashcard data={questions}/>
}

export default App
