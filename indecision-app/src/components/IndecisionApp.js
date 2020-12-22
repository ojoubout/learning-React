import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
// import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: false
    }
    
    componentDidMount() {
        const json = localStorage.getItem('options');
        
        const options = JSON.parse(json);
        if (options) {            
            this.setState(() => ({options}));
        }
        // console.log(this.state);
    }

    componentDidUpdate() {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('save options');
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options:prevState.options.filter((item) => item !== option)
        }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valide option'
        } else if (this.state.options.indexOf(option) != -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleSelectDecision = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const decisionOption = this.state.options[random];
        // alert(decisionOption)
        this.setState(() => ({ selectedOption: decisionOption}))
    }
    

    render() {
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    handleSelectDecision={this.handleSelectDecision}
                    hasOptions={this.state.options.length > 0}
                    options={this.state.options}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;















