const name = "Hareesh";
const className = "greeting";
//const element = <h1 className={className}> Hello {name} JSX World!</h1>;
const element = (
  <div>
    <h1 className={className}> Hello {name} JSX World!</h1>
    <p> Good To SEE you</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
