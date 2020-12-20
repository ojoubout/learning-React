console.log('App.js is running!');

const app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''
        renderTemplate()
    }
}

const resetOptions = () => {
    app.options = [];
    decisionOption = '';
    renderTemplate();
}

let decisionOption;
const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    decisionOption = app.options[random];
    renderTemplate();
}

const appRoot = document.getElementById('app');

function renderTemplate() {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should i do ?</button>
        <button onClick={resetOptions}>Remove All</button>
        <ol>
            {app.options.map((item) => <li key={item}>{item}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
        <p id="option">{decisionOption}</p>
    </div>
    );
    
    
    ReactDOM.render(template, appRoot);
}
renderTemplate()
// console.log(templateTwo);
