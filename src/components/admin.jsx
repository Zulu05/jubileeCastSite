import { getQuestions } from '../sqlite'
import { useState, useEffect } from 'react'
import React from 'react'

const Admin = () => {
    console.log('Admin component mounted')
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        console.log('Admin component useEffect called')
        const Qretrieve = async () => {
            console.log('getting questions...')
            try {
                const Qs = await getQuestions()
                console.log('Questions:', Qs)
                setQuestions(Qs)
            } catch (error) {
                console.error('Error getting questions:', error)
            }
        }
        Qretrieve()

    }, [])
    console.log("retrieved questions:", questions)
    console.log("type of retrieved questions:", typeof questions)
    return (
        <div className='border-2 border-white text-white'>
            {questions.map((question, index) => (
                <li key={question.date} className='text-white flex flex-row'>
                    <span className='ml-4'>{question[1]}: </span>
                    <span className='ml-2'>{question[0]}</span>
                    <span className='ml-auto mr-4'>{question[2]}</span>
                </li>
            ))}
        </div>
    )
}

export default Admin;
