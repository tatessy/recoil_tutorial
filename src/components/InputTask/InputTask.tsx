import React, { useCallback } from 'react'
import  './InputTask.css'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { inputTitleState } from '../../states/inputTitleState'

const InputTask = () => {
  const inputTitle = useRecoilValue(inputTitleState)
  const setInputTitle = useSetRecoilState(inputTitleState)

  const handleClick =() => {
    console.log(inputTitle)
  }

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  },[inputTitle])

  return (
    <div className='inputField'>
      <input type='text' className='inputTitle' onChange={onChange}/>
      <button type='button' className='addButton' onClick={handleClick}>追加</button>
    </div>
  )
}

export default InputTask