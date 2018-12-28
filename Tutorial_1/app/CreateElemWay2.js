let {Component} = React;

class Elem2 extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: ''
            }
        };
    }

    handleChange(event) {
        let state = this.state;
        state.user.name = event.target.value;
        this.setState(state);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Elem2 :: componentDidUpdate is called");
    }

    render() {
        return <div>
            <p>Example of element made by React.Component</p>
            <input type="text" name="text" onChange={this.handleChange.bind(this)} />
            <p>Input text: { this.state.user.name }</p>
        </div>;
    }
}
