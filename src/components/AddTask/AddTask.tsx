import React from 'react'
import { useRecoilValue } from 'recoil'
import { addTitleStateLength, addTitltState } from '../../states/addTitleState'
import './AddTask.css'

const AddTask = () => {

  const addTitle = useRecoilValue(addTitltState)
  const addTitleLength = useRecoilValue(addTitleStateLength)

  return (
    <div className='taskField'>
        <div>{addTitleLength}個のタスクがあります</div>
        <ul>
          {addTitle.map((task) => (
            <li key= {task.id}>{task.title}</li>
          ))}

            
        </ul>
    </div>
  )
}

export default AddTask