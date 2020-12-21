// const React = require('react');
// const ReactDOM = require('react-dom');
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleSelectDecision = this.handleSelectDecision.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
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

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options:prevState.options.filter((item) => item !== option)
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valide option'
        } else if (this.state.options.indexOf(option) != -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleSelectDecision() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const decisionOption = this.state.options[random];
        alert(decisionOption)
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

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h4>{props.subtitle}</h4>}
    </div>
)

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => (
    <div>
        <button disabled={!props.hasOptions} onClick={props.handleSelectDecision} >What should i do!</button>
    </div>
)

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

const Option = (props) => (
    <li>
        {props.optionText}
        <button onClick={(e) => props.handleDeleteOption(props.optionText)}>
            Remove
        </button>
    </li>
    )

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error: error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))