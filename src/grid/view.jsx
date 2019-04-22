import React, { PureComponent } from 'react';
import classnames from 'classnames';
import './c.css';
class SkGrid extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'sk-cube-grid'} >
            <div className={classnames('sk-cube sk-cube1')} style={style}></div>
            <div className={classnames('sk-cube sk-cube2')} style={style}></div>
            <div className={classnames('sk-cube sk-cube3')} style={style}></div>
            <div className={classnames('sk-cube sk-cube4')} style={style}></div>
            <div className={classnames('sk-cube sk-cube5')} style={style}></div>
            <div className={classnames('sk-cube sk-cube6')} style={style}></div>
            <div className={classnames('sk-cube sk-cube7')} style={style}></div>
            <div className={classnames('sk-cube sk-cube8')} style={style}></div>
            <div className={classnames('sk-cube sk-cube9')} style={style}></div>
        </div>
    }
}
export default SkGrid;