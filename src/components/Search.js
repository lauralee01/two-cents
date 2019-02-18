import React, {Component} from 'react';

export default class Search extends Component {
    state = {
        post: ''
    }

    handleInputChange = () => {
        this.setState({
            post: this.search.value
        })
    }

    render() {
        return (
            <form>
                <div className="search">
                    <input
                    className="search__box"
                    placeholder="Search posts..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    />
                </div>
            </form>
        )
    }
}