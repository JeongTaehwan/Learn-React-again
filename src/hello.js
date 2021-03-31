import React from 'react';

function Hello({ color, name }) {

    return <div style={{
        color
    }}>
        <hi>안녕하세요 {name}</hi>
    </div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;