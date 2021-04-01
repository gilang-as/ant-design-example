import React from 'react';
// import { Link } from 'bisheng/router';

export default function Header(props) {
    return (
        <header {...props} id="header">
            <div id="logo">
                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
            </div>
        </header>
    );
}