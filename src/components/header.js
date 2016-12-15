import React, { Component } from 'react';

class Header extends Component {

    render() {

        return(
            <section className="Header">
                <div className="container">
                    <hgroup  className="logo">
                        <h1>My<span className="react">React</span>Tube <i className="fa fa-youtube-play"></i></h1>
                    </hgroup>
                </div>
            </section>
        )
    }
}

export default Header
