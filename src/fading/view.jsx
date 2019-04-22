import React, { PureComponent } from 'react';
import './c.css';
import classnames from 'classnames';
class Fading extends React.PureComponent {
    render() {
        const { preview } = this.props;
        return <div className={'sk-fading-circle'} >
            <div className={classnames("sk-circle1 sk-circle")} ></div>
            <div className={classnames("sk-circle2 sk-circle")} ></div>
            <div className={classnames("sk-circle3 sk-circle")} ></div>
            <div className={classnames("sk-circle4 sk-circle")} ></div>
            <div className={classnames("sk-circle5 sk-circle")} ></div>
            <div className={classnames("sk-circle6 sk-circle")} ></div>
            <div className={classnames("sk-circle7 sk-circle")} ></div>
            <div className={classnames("sk-circle8 sk-circle")} ></div>
            <div className={classnames("sk-circle9 sk-circle")} ></div>
            <div className={classnames("sk-circle10 sk-circle")}></div>
            <div className={classnames("sk-circle11 sk-circle")} ></div>
            <div className={classnames("sk-circle12 sk-circle")} ></div>
        </div>
    }
}
export default Fading;