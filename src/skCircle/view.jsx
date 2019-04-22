import React, { PureComponent } from 'react';
import './c.css';
class SkCircle extends React.PureComponent {
    render() {
        const { preview } = this.props
        const style = { backgroundColor: preview }
        return <div className={'sk-circle'} >
            <div class="sk-circle1 sk-child" style={style}></div>
            <div class="sk-circle2 sk-child" style={style}></div>
            <div class="sk-circle3 sk-child" style={style}></div>
            <div class="sk-circle4 sk-child" style={style}></div>
            <div class="sk-circle5 sk-child" style={style}></div>
            <div class="sk-circle6 sk-child" style={style}></div>
            <div class="sk-circle7 sk-child" style={style}></div>
            <div class="sk-circle8 sk-child" style={style}></div>
            <div class="sk-circle9 sk-child" style={style}></div>
            <div class="sk-circle10 sk-child" style={style}></div>
            <div class="sk-circle11 sk-child" style={style}></div>
            <div class="sk-circle12 sk-child" style={style}></div>
        </div>
    }
}
export default SkCircle;