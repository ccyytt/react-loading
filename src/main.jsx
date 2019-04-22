import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import animation from './animation';
class Eloading extends Component {
    render() {
        const {bgColor, preview, name} = this.props
        const dom = animation[name] || animation['spinner'];
        return <div className={'react-sk'} style={{backgroundColor: bgColor || dom.bgColor}}>
           <dom.kids preview={preview || dom.preview}></dom.kids>
        </div>
    }
}

export default Eloading;
// ReactDom.render(<Eloading/>, document.getElementById('app'))