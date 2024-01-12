import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id : 'p1',
        title : 'Rameswaram',
        description : "Place to get Moksha", 
        imageUrl : "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/rameswaram-temple-1656167616_a4da110c8034bf869a90.webp", 
        address : "Rameswaram", 
        location : {
            lat : 88181,
            lon : 82916
        },
        creator : 'u1'
    }, 
    {
        id : 'p1',
        title : 'Rameswaram',
        description : "Place to get Moksha", 
        imageUrl : "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/rameswaram-temple-1656167616_a4da110c8034bf869a90.webp", 
        address : "Rameswaram", 
        location : {
            lat : 88181,
            lon : 82916
        }, 
        creator : 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList  item = {loadedPlaces}/>
}

export default UserPlaces



