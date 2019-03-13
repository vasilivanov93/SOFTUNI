import React, {Component} from 'react';
import './BindingForm.css';

class BindingForm extends Component {
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentWillMount() {
        this.props.children.forEach(child => {
                if (child.type === 'input') {
                    this.setState({
                        [child.props.name]: null
                    });
                }
            }
        )
    }

    render() {
        return (
            <div>
                <h2>Binding form!</h2>
                <form onSubmit={(event) => this.props.onSubmit(event, this.state)}>
                    {React.Children.map(this.props.children, child => {
                        if (child.type === 'input') {
                            return React.cloneElement(child, {onChange: this.handleChange.bind(this), ...child.props})
                        }

                        return child
                    })}

                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default BindingForm;