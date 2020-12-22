import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <p>Here are your options</p>
        <ol>
            {props.options.map((option) => (
                <Option 
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />))}
        </ol>
    </div>
)

export default Options;