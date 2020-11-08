import React from 'react'
import './Inputs.css'

import Input from './Input'

export default props => {
    
    
    return (
        <div className="estrutura">
        <p>Para converter informe um número em um dos campos abaixo.</p>
        <br></br>
        <label> Décimal </label>
        <Input type="text" className="input " name="dec"/>
        <label> Binário </label>
        <Input type="text" className="input " name="bin"/>
        <label> Octal </label>
        <Input type="text" className="input " name="oct"/>
        <label> Hexadecimal </label>
        <Input type="text" className="input " name="hex"/>
        </div>
    )
}