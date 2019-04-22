import React, { PureComponent } from 'react';
import './c.css';
class Circle extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'circle'} >
            <div className={"circle1"} style={style}></div>
            <div className={"circle2"} style={style}></div>
        </div>
    }
}
export default Circle;