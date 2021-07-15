import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
//Components
import Product from './Product'
import LoadingDots from './Loading' //Loading Screen

const Home = () => {
    const [customers, setCustomers] = useState([])

    useEffect( () =>{                                   //fetch data using axios from the given API
        const getCustomers = async () => {              //https://www.npmjs.com/package/axios
            const respone = await axios(`https://jsonplaceholder.typicode.com/users`)
            console.log(respone.data)
            setCustomers(respone.data)
        }
        getCustomers()
    },[])

    // console.log(customers.address.name)
    return customers ? (            //if data has been fetch then display the Container component, else display the loading screen
        <Container>                                     
            <Box>
                {
                    customers.map(element => (
                        <Product 
                            key = {element.id}
                            id = {element.id}
                            name = {element.name}
                            username = {element.username}
                            // email = {element.email}
                            website = {element.website}
                        />
                    ))
                }
            </Box>
        </Container>
    ) : (
        <LoadingDots />
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 60px); //60px is the height of the header(navbar)
    padding: 0 calc(3.5vw + 5px);
    padding-bottom: 30px;
    position: relative;

    &:before {                      //make the background fixed
        background: url("/images/home-background-blue.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;                //make the priority of the background lower than the components so it will be display behind
    }
`
const Box = styled.div`
    padding: 0 10px;
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
`

