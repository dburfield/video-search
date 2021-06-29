import React, { Component } from 'react'

export class SearchBar extends Component {
    // set up state 
    state = {searchterm: ''}

    // set up input handler
    searchInputHandler = e => {
        this.setState({ searchterm: e.target.value })        
    }

    formSubmitHandler = e => {
        e.preventDefault();        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <input 
                    type="text"
                    value={this.state.searchterm}
                    onChange={this.searchInputHandler}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
