let {PureComponent} = React;

class Elem3 extends PureComponent {
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
        console.log("Elem3 :: componentDidUpdate is called");
    }

    render() {
        return <div>
            <p>Example of element made by React.PureComponent</p>
            <p>Show difference between Component and PureComponent. Second wont change if state of props are not immutable.</p>
            <input type="text" name="text" onChange={this.handleChange.bind(this)} />
            <p>Input text: { this.state.user.name }</p>
        </div>;
    }
}
