import React from 'react';
import { NavMenu as NavMenu } from './NavMenu';
import {ResizeBar as ResizeBar} from './ResizeBar';


class LeftMenu extends React.Component {
    render() {
        return (
            <div className='left-menu' style={{display: 'flex', flexDirection: 'row', width:this.props.width}}>
                <NavMenu />
                <ResizeBar width={this.props.resizeBarWidth} startResize={this.props.startResize} />
            </div>
            );
    }
}

export default LeftMenu;