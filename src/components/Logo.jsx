import React from 'react'
import styled from 'styled-components'

function Logo(props) {
    return (
        <div>
            <LogoImg props={props} src="/images/logo.svg"/>
        </div>
    )
}

export default Logo;

const LogoImg = styled.img`
width : ${props => props.width};
height : ${props => props.height};
background : #1F8DB3;
padding : 10px;
`