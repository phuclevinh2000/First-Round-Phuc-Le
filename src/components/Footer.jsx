import React from 'react'
import styled from 'styled-components';
//Material UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <Container>
            <Foot>Create by Phuclevinh - 2021</Foot>
            <Icon>
                <Website href={`mailto:phuclevinh2000@gmail.com`} target="_blank">
                    <EmailIcon style={{ fontSize: 35, color: 'white'}}/>
                </Website>
                <Website href={`https://www.instagram.com/vinhphucle/`} target="_blank">
                    <InstagramIcon style={{ fontSize: 35, color: 'white'}}/>
                </Website>
                <Website href={`https://github.com/phuclevinh2000`} target="_blank">
                    <GitHubIcon style={{ fontSize: 35, color: 'white'}}/>
                </Website>
            </Icon>
        </Container>
    )
}

export default Footer

const Foot = styled.div`
    font-size: 17px;
`
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: #2a9d8f;
`
const Icon = styled.div`
    display: flex;
`
const Website = styled.a`
    display: flex;
    text-decoration: none;
    color: black;
    padding: 3px;
`
