import React from 'react';
import PhotoViewer from './image_list';
// photos
// import  from '../../images/cali/'
import bay_sf_overview from '../../images/cali/bay_sf_overview.jpg'
import bay_japan_town from '../../images/cali/bay_japan_town.jpg'
import bay_mt_diablo_peak from '../../images/cali/bay_mt_diablo_peak.jpg'
import death_valley_0 from '../../images/cali/death_valley_0.jpg'
import death_valley_1 from '../../images/cali/death_valley_1.jpg'
import death_valley_2 from '../../images/cali/death_valley_2.jpg'
import pinnacles_0 from '../../images/cali/pinnacles_0.jpg'
import pinnacles_1 from '../../images/cali/pinnacles_1.jpg'
import pinnacles_2 from '../../images/cali/pinnacles_2.jpg'
import sd_shore_0 from '../../images/cali/sd_shore_0.jpg'
import sd_shore_1 from '../../images/cali/sd_shore_1.jpg'

import { Button } from '@mui/material';
interface Image {
    src: string;
    alt: string;
}


const images: Image[] = [
    {
        src: bay_sf_overview,
        alt: 'Overview of the SF Bay from Mount Tamalpais East Peak @Mill Valley, CA'
    },
    {
        src: bay_mt_diablo_peak,
        alt: 'Overview From Mount Diablo Peak @Walnut Creek, CA'
    },
    {
        src: bay_japan_town,
        alt: 'Japantown Sign @ San Francisco, CA'
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
        src: sd_shore_0,
        alt: 'Sea short of San Deigo @San Deigo, CA'
    },
    {
        src: sd_shore_1,
        alt: 'Sea short of San Deigo @San Deigo, CA'
    },
];


function Cali(){
    return(
        <div>
            <Button variant="outlined" href='/#/gallery'>Back to Gallery</Button>
            <h1>Califoria</h1>
            <h3>@SF Bay, LA & SD</h3>
            <PhotoViewer images={images}/>
        </div>
    )
}

export default Cali;