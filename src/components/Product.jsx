import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//material UI
import Avatar from '@material-ui/core/Avatar';  //https://material-ui.com/components/avatars/#avatar to make letter avatars

const Product = ({name, id, username, website}) => {


    return (
        <Component>
            <Avatar className="avatar" >{name.substring(0,1)}</Avatar>  {/*using substring to catch the first character of the name and make avatar*/}
            <Name>
                {name}
            </Name>
            <Username>
                @{username}
            </Username>
            <Website href={`http://${website}`} target="_blank">
                <WebsiteContent>To Website</WebsiteContent>
            </Website> 

            <ActionSection>
                <Link to={`/moredetail/${id}`}>
                    <Click>More Details</Click>
                </Link>
            </ActionSection>
        </Component>
    )
}

export default Product

const Component = styled.div`
    background-color: #2a9d8f;
    flex: 1;
    padding: 20px;
    margin: 15px;
    min-width: 200px;
    max-width: 250px;
    /* max-height: 400px; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    border-radius: 10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 73%) 0px 30px 22px -10px; 
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }

    .avatar{
        align-self: center;
        width: 80px;
        height: 80px;
        font-size: 30px;
    }
`

const Name = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    font-weight: 700;
    font-size: 17px;
`
const Username = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    font-weight: 700;
    font-style: italic;
    opacity: 0.8;
    font-size: 16px;
`

const Website = styled.a`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: white;
`
const Click = styled.button`
    color: white;
    background-color: #f4a261;
    width: 140px;
    border: 2px solid rgba(249, 249, 249, 0.1);;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
    transition-duration: 0.3s;
    padding: 4px;
    font-size: 16px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover{
        background-color: #264653;
        color: white;
    }
`
const ActionSection = styled.div`
    margin-top: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const WebsiteContent = styled.div`
    border: 2px solid rgba(249, 249, 249, 0.1);
    border-radius: 5px;
    font-size: 16px;
    background-color: #e76f51;
    padding: 1px 30px 2px 30px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover{
        background-color: #264653;
        color: white;
    }
`


