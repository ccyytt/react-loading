import React, { PureComponent } from 'react';
import './c.css';
class Scaleout extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'scaleout'} style={style}>
        </div>
    }
}
export default Scaleout;