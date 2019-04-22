import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './c.css';
class Folding extends React.PureComponent {
    render() {
        const { preview } = this.props
        return <div className={'sk-folding-cube'} >
            <div className={classnames("sk-cube1 sk-cube")} ></div>
            <div className={classnames("sk-cube2 sk-cube")} ></div>
            <div className={classnames("sk-cube4 sk-cube")} ></div>
            <div className={classnames("sk-cube3 sk-cube")} ></div>
        </div>
    }
}
export default Folding;