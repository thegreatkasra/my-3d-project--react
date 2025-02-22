import React, {useState, useEffect} from 'react'
import './Button.css'

const Button = ({btnName, onClick}) => {

    const [name, setName] = useState()

    useEffect(() => {
        setName(btnName);
    },[])

  return (
    <button className='button' onClick={onClick }>{name}</button>
  )
}

export default Button;
