import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    onFormSubmit = (e) => {
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





