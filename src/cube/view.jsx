import React, { PureComponent } from 'react';
import './c.css';
class Cube extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'cube'} >
            <div className={"cube1"} style={style}></div>
            <div className={"cube2"} style={style}></div>
        </div>
    }
}
export default Cube;