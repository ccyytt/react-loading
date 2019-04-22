import React, { PureComponent } from 'react';
import './c.css';

class Spinner extends React.PureComponent {

    render() {
        const { preview } = this.props
        const styel = {backgroundColor: preview}
        return <div className={'spinner'} style={styel}></div>
    }
}

export default Spinner;