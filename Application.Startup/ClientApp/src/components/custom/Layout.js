import React, { Component } from 'react';
//import './layout.css';
import * as FontAwesome from 'react-icons/lib/fa';

import LeftMenu from './LeftMenu';
import RightBlock from './RightBlock';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state ={
            leftMenu: {
                width: 200,
                unit: 'px',
                resizing: false
            },
            resizeBar: {
                width: 3,
                unit: 'px',
                getSize: function() {
                    return this.width.toString() + this.unit;
                }
            }
        }
    }

    mouseMove(event) {
        if (this.state.leftMenu.resizing) {
            if (event.clientX > this.state.resizeBar.width) {
                var leftMenu = this.state.leftMenu;
                leftMenu.width = event.clientX;
                this.setState({ leftMenu: leftMenu})
            }
        }
    }
    
    getLeftMenuSize() {
        return this.state.leftMenu.width.toString() + this.state.leftMenu.unit;
    }
    getResizeBarSize() {
        return this.state.resizeBar.width.toString() + this.state.resizeBar.unit;
    }
    startResizeLeftMenu() {
        let leftMenu = this.state.leftMenu;
        leftMenu.resizing = true;
        this.setState({ leftMenu: leftMenu })
    }
    stopResizeLeftMenu() {
        if (this.state.leftMenu.resizing) {
            var leftMenu = this.state.leftMenu;
            leftMenu.resizing = false;
            this.setState({ leftMenu: leftMenu })
        }
    }
    render() {
        return (
            <div
                className='layout'
                style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}
                onMouseMove={this.mouseMove.bind(this)}
                onMouseUp={this.stopResizeLeftMenu.bind(this)}
            >
                <LeftMenu width={this.getLeftMenuSize()} resizeBarWidth={this.getResizeBarSize()} startResize={this.startResizeLeftMenu.bind(this)} />
                <RightBlock />
            </div>
        );
    }
}
export { Layout };