const title1 = React.createElement("h1", { }, "Welcome to Namaste React Live Course!!");
const tille2 = React.createElement("h2", { }, "Week-1 Session-1");

const container = React.createElement("div", { 
    id: "container"
}, [title1, tille2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);