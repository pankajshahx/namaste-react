const { useState } = React;

const App = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log('Button clicked!');
    };

    const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
    const heading2 = React.createElement("h2", { id: "heading2" }, "Hello World from React");
    const button = React.createElement("button", { id: "button", onClick: handleClick }, `Clicked ${counter} times`);
    const container = React.createElement("div", { id: "div" }, [heading, heading2, button]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
};

ReactDOM.render(React.createElement(App), document.getElementById("root2"));
