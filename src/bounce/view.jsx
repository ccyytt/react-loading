import React, { PureComponent } from 'react';
import './c.css';
class Bounce extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'bounce'} >
            <div className={"double-bounce1"} style={style}></div>
            <div className={"double-bounce2"} style={style}></div>
        </div>
    }
}
export default Bounce;