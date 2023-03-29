import React from 'react';
import PhotoViewer from './image_list';
// photos
import mn_voyagers_0 from '../../images/mid_west/mn_voyagers_0.jpg'

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