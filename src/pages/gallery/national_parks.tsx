import React from 'react';
import PhotoViewer from './image_list';
// photos
import mn_voyagers_0 from '../../images/mid_west/mn_voyagers_0.jpg'
import mn_voyagers_1 from '../../images/mid_west/mn_voyagers_1.jpg'
import mn_voyagers_2 from '../../images/mid_west/mn_voyagers_2.jpg'
import mn_voyagers_3 from '../../images/mid_west/mn_voyagers_3.jpg'
import bryce_2 from '../../images/mid_west/bryce_2.jpg'
import bryce_1 from '../../images/mid_west/bryce_1.jpg'
import bryce_0 from '../../images/mid_west/bryce_0.jpg'
import death_valley_0 from '../../images/cali/death_valley_0.jpg'
import death_valley_1 from '../../images/cali/death_valley_1.jpg'
import death_valley_2 from '../../images/cali/death_valley_2.jpg'
import pinnacles_0 from '../../images/cali/pinnacles_0.jpg'
import pinnacles_1 from '../../images/cali/pinnacles_1.jpg'
import pinnacles_2 from '../../images/cali/pinnacles_2.jpg'

import { Button } from '@mui/material';
interface Image {
    src: string;
    alt: string;
}


const images: Image[] = [
    {
        src: mn_voyagers_0,
        alt: 'Nighty Sky and the Milky Way @Voyageurs National Park, MN'
    },
    {
        src: mn_voyagers_1,
        alt: 'Houses by Lakes @Voyageurs National Park, MN'
    },
    {
        src: mn_voyagers_2,
        alt: 'Snow on Pine @Voyageurs National Park, MN'
    },
    {
        src: mn_voyagers_3,
        alt: 'The Harbor @Voyageurs National Park, MN'
    },
    {
        src: death_valley_0,
        alt: 'A van driving through @Death Valley National Park'
    },
    {
        src: death_valley_1,
        alt: 'Dancing people when star gazing @Death Valley National Park'
    },
    {
        src: death_valley_2,
        alt: 'Small Mountains @Death Valley National Park'
    },
    {
        src: pinnacles_0,
        alt: 'Mountains in B/W @Pinnacles National Park'
    },
    {
        src: pinnacles_1,
        alt: 'A beautiful peek @Pinnacles National Park'
    },
    {
        src: pinnacles_2,
        alt: 'Death Stranding Scene @Pinnacles National Park'
    },
    {
        src: bryce_0,
        alt: 'Colours @Dixie National Forest'
    },
    {
        src: bryce_1,
        alt: '@Bryce Canyon National Park'
    },
    {
        src: bryce_2,
        alt: '@Bryce Canyon National Park'
    },
];


function National_parks(){
    return(
        <div>
            <Button variant="outlined" href='/#/gallery'>Back to Gallery</Button>
            <h1>National Parks Collections</h1>
            <h3>All the National Parks I have visited over the years...</h3>
            <PhotoViewer images={images}/>
        </div>
    )
}

export default National_parks;