import React, { PureComponent } from 'react';
import './c.css';
class Rect extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'rect'} >
            <div className={"rect1"} style={style}></div>
            <div className={"rect2"} style={style}></div>
            <div className={"rect3"} style={style}></div>
            <div className={"rect4"} style={style}></div>
            <div className={"rect5"} style={style}></div>
        </div>
    }
}
export default Rect;