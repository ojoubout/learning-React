
class Counter extends React.Component {
    // count = 0
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: props.count
        };

    }

    componentDidMount() {

        const count = localStorage.getItem('count');
        if (!isNaN(count)) {
            this.setState(() => ({count: parseInt(count)}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    addOne() {
        this.setState((prevState) => {return {count: prevState.count + 1}});
    }
    minusOne() {
        this.setState((prevState) => {return {count: prevState.count - 1}});
    }
    reset() {
        this.setState(() => {return {count: 0}});
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))


/* OLD */

// let count = 0;

// const setCount = (set) => {
//     count = set;
//     renderTemplate()
// }


// const appRoot = document.getElementById('app');

// function renderTemplate() {
//     const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={() => setCount(count + 1)} class="button">+1</button>
//         <button onClick={() => setCount(0)} class="button">reset</button>
//         <button onClick={() => setCount(count - 1)} class="button">-1</button>
//     </div>
//     );
    
//     ReactDOM.render(templateTwo, appRoot);

// }

// // console.log(templateTwo);
// renderTemplate()