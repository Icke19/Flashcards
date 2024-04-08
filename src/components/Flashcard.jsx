import "../styles.css"
import {useState} from "react";
// eslint-disable-next-line react/prop-types
function Flashcard({data}){
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id){
        setSelectedId(id !== selectedId ? id : null);
    }

    return(<div className="flashcards">
        {/* eslint-disable-next-line react/prop-types */}
        {data.map((question, idx) => <div onClick={()=>handleClick(question.id)} className={question.id === selectedId ? "selected" : ''} key={idx}>
            <p>{question.id === selectedId ? question.answer : question.question}</p>
        </div>)}
    </div>)
}

export default Flashcard;