class VisibilityToggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.onClickToggle = this.onClickToggle.bind(this);
        this.state = {
            visibility: false,
            details: "Hello World"
        };
    }

    onClickToggle() {
        this.setState((prevState) => {return {visibility: !prevState.visibility}})        
    }

    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.onClickToggle}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && <p>{this.state.details}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


//      OLD

// let toggle = false
// const paragraph = "Hello World";

// const onClickToggle = () => {
//     toggle = !toggle
//     render()
// }

// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//     <div>
//         <h1>Visibility Toogle</h1>
//         <button onClick={onClickToggle}>{toggle ? "Hide details" : "Show details"}</button>
//         {toggle && <p>{paragraph}</p>}
//     </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// render()