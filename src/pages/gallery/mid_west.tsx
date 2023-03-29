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


function Mid_west(){
    return(
        <div>
            <Button variant="outlined" href='/#/gallery'>Back to Gallery</Button>
            <h1>Mid-West</h1>
            <h3>@Minnesota, Wyoming, Arizona, Utah</h3>
            <PhotoViewer images={images}/>
        </div>
    )
}

export default Mid_west;