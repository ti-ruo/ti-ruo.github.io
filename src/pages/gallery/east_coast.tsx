import React from 'react';
import PhotoViewer from './image_list';
// photos
import fifth_ave from '../../images/east_coast/fifth_ave.jpg'
import top_of_the_rock from '../../images/east_coast/top_of_the_rock.jpg'
import { Button } from '@mui/material';

interface Image {
    src: string;
    alt: string;
}

const images: Image[] = [
    {
        src: fifth_ave,
        alt: 'Fifth Ave Subway Station @NYC, NY'
    },
    {
        src: top_of_the_rock,
        alt: 'In the elevator of Rockefeller Center @NYC, NY'
    },
];

function EastCoast(){
    return(
        <div>
            <Button variant="outlined" href='/#/gallery'>Back to Gallery</Button>
            <h1>US East Coast</h1>
            <h3>@US East Coast States</h3>
            <PhotoViewer images={images}/>
        </div>
    )
}

export default EastCoast;