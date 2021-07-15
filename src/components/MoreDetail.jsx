import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
//material IU
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Avatar from '@material-ui/core/Avatar';      //use to make letter avatars https://material-ui.com/components/avatars/#avatar
//loading screen
import LoadingDots from './Loading'

const MoreDetail = ({name}) => {
    const [customers, setCustomers] = useState()
    const { id } = useParams()                      //useParams to catch the id of each customer
    
    useEffect( () =>{                               //fetch data from the API when the id change
        const getCustomers = async () => {
            const respone = await axios(`https://jsonplaceholder.typicode.com/users/${id}`) //fetch the data from specific id that you clicked on Home page
            // console.log(respone.data)
            setCustomers(respone.data)
        }
        getCustomers()
    }, [id])
    
    // console.log(customers.address)
    
    return customers ? (
        <Container>
                <TopContent>
                    <Avatar className="avatar" >{customers.name.substring(0,1)}</Avatar> {/*using subtring to catch the first character of the string and make letter avatar*/}

                    <Name>{customers.name}</Name>
                    <Username>@{customers.username}</Username>
                    <Box>
                        <Option>
                            <BusinessIcon />
                            <Describle>{customers.company.name}</Describle>
                        </Option>

                        <Option>
                            <LocationOnIcon />
                            <Describle>{customers.address.city}</Describle>
                        </Option>

                        <Option>
                            <PhoneIcon />
                            <Describle>{customers.phone}</Describle>
                        </Option> 
                    </Box>
                    
                </TopContent>
                <BodyContent>
                    <HighlightContent>
                        <Li>WEBSITE</Li>
                        <Information>https://{customers.website}</Information>                       
                    </HighlightContent>

                    <hr />
                    <HighlightContent>
                        <Li>EMAIL</Li>
                        <Information>{customers.email}</Information>                        
                    </HighlightContent>

                    <hr />
                    
                    <HighlightContent>
                        <Li>ADDRESS</Li>
                        <Information>Street: {customers.address.street}</Information>
                        <Information>Suite: {customers.address.suite}</Information>
                        <Information>City: {customers.address.city}</Information>
                        <Information>Zipcode: {customers.address.zipcode}</Information>
                    </HighlightContent>

                    <hr />
                </BodyContent>
        </Container>
    ) : (
        <LoadingDots />
    )
}

export default MoreDetail

const Container = styled.div`
    min-height: calc(100vh - 60px); 
    padding: 0 calc(3.5vw + 5px);
    max-width: 1500px; 
    margin: 0 auto;
    background-color: #264653;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .avatar{
        align-self: center;
        width: 100px;
        height: 100px;
        font-size: 35px;
    }
`
const TopContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #2a9d8f;
    padding-top: 15px;
    border-radius: 10px;
`

const Name = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    font-weight: 400;
    font-size: 30px;
`
const Username = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 200;
    font-size: 20px;
    margin-top: -10px;
`

const Box = styled.div`
    display: flex;
    height: 70px;
    margin-top: 17px;
    border: 2px solid rgba(249, 249, 249, 0.1);
    /* border-radius: 0 0 5px 5px; */
    background: #e76f51;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
`
const Option = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Describle = styled.div`
    font-weight: 400;
`
const BodyContent = styled.div`
    padding: 20px;
    background-color: #a0b2a6;

`
const HighlightContent = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: black;
`
const Li = styled.li`
    font-weight: 700;
    font-size: large;
`
const Information = styled.div`
    padding: 10px;
    margin-left: 13px;
    color: #33334d;
    font-weight: 500;
`   


