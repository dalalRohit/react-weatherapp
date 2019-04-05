import React, { Component } from 'react';

import Footer from './../../Compo/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Footer />
            </div>
        )
    }
};

export default Layout;