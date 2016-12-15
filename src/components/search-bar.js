import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props){

        super(props)

        this.state = { 
            term: ' ',
            placeholder: 'Search for something...'
        }

    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }

    render() {

        return(
            <section className="SearchBar">
                <div className="container">
                    <div className="input-group">
                      <input
                          value={this.state.term}
                          onChange={event => this.onInputChange(event.target.value)}
                          type="text" className="form-control" 
                          placeholder={this.state.placeholder} />
                      <span className="input-group-btn">
                        <button className="btn btn-info" type="button">Go!</button>
                      </span>
                    </div>
                </div>
            </section>
        )
    }

}

export default SearchBar
