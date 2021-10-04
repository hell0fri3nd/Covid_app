import Dashboard from "./components/view/Dashboard";

const ReactDOM = require("react-dom");
const React = require("react");
require("babel-core/register");
require("babel-polyfill");


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dashboard/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
)
