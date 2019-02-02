const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a evil computer',
    options: []
}

const onFormSummit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
  }
};

const removeOptions = () => {
   app.options = [];
   render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const optionSel = app.options[randomNum];
    alert(optionSel);
};


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are your options' : 'No options'}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ul>
              {
                  app.options.map((str) => <li key={str}>{str}</li>)
              }
            </ul>
            <form onSubmit={onFormSummit}>
            <input type="text" name="option"  />
            <button>Add Options</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};
render();