import React from 'react'
import { addQuestion } from '../sqlite'
import { useState } from 'react'

const QnA = () => {
    const [question, setQuestion] = useState('')

    return (
        <div className='qna-container text-white flex flex-col items-center justify-center'>
            <h1>QnA</h1>
            <input 
            type="text" 
            placeholder="Question" 
            className='w-1/2 h-100 p-2 rounded-md border-2 border-white text-start' 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            />
            <button className='bg-yellow-500 text-white p-2 rounded-md cursor-pointer'
            onClick={
                () => {
                    setQuestion("")
                    console.log(question, "tester", Date.now())
                    addQuestion(question, "tester", Date.now())
                }}
            >Submit</button>
        </div>
    )
}

export default QnA;
