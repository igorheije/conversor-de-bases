import React from 'react'


export default props => {

    function valor(e){
        const input = e.currentTarget
        const valor = e.currentTarget.value
        
        console.log(Input.name)

        
    }
    function Input(){

        return (
            <input type="text" name={props.name}  onKeyUp={valor} />
        )
    }

    return (
        <div >
        <Input />
        </div>
    )
}