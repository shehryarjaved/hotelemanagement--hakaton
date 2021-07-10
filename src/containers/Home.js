import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUser, getAllUsers, sendMessage } from '../store/action'
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Gallery from '../components/Gallery';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


function Home() {
    // const { id } = useParams()
    // const user = useSelector(state => state.user)
    // const allUsers = useSelector(state => state.allUsers)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getUser(id))
    //     dispatch(getAllUsers())
    // }, [])

    // const send_message = () => {
    //     dispatch(sendMessage(message, user, currentChat))
    // }

    return (
        <div>
            <Navbar/>
            <Gallery/>
            <Cards/>
            <Footer/>
            </div>

        

    
        
    )
}

export default Home;