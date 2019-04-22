import React, { PureComponent } from 'react';
import './c.css';
class Dot extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'dot'} >
            <div className={"dot1"} style={style}></div>
            <div className={"dot2"} style={style}></div>
        </div>
    }
}
export default Dot;