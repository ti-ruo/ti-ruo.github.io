import React from 'react';
import PhotoViewer from './image_list';
// photos
import mn_voyagers_0 from '../../images/mid_west/mn_voyagers_0.jpg'
import az_hoover_0 from '../../images/mid_west//az_hoover_0.jpg'
import az_hoover_1 from '../../images/mid_west//az_hoover_1.jpg'
import lv_0 from '../../images/mid_west/lv_0.jpg'
import bryce_2 from '../../images/mid_west/bryce_2.jpg'
import bryce_1 from '../../images/mid_west/bryce_1.jpg'
import bryce_0 from '../../images/mid_west/bryce_0.jpg'
import lv_1 from '../../images/mid_west/lv_1.jpg'
import mn_voyagers_1 from '../../images/mid_west/mn_voyagers_1.jpg'
import mn_voyagers_2 from '../../images/mid_west/mn_voyagers_2.jpg'
import mn_voyagers_3 from '../../images/mid_west/mn_voyagers_3.jpg'
import ut_capital from '../../images/mid_west/ut_capital.jpg'
import ut_first_kfc from '../../images/mid_west/ut_first_kfc.jpg'
import ut_salt_lake_0 from '../../images/mid_west/ut_salt_lake_0.jpg'
import ut_salt_lake_1 from '../../images/mid_west/ut_salt_lake_1.jpg'
import wy_street from '../../images/mid_west/wy_street.jpeg'

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
        src: az_hoover_0,
        alt: 'Hoover Dam Towers @Clark County, Nevada'
    },
    {
        src: az_hoover_1,
        alt: 'An Overview @Clark County, Nevada'
    },
    {
        src: lv_0,
        alt: 'The Loop @Las Vegas, NV'
    },
    {
        src: lv_1,
        alt: 'View on air @Las Vegas, NV'
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
    {
        src: ut_capital,
        alt: 'Capital of Utah View @Salt Lake City, UT'
    },
    {
        src: ut_first_kfc,
        alt: 'Worlds first KFC @Salt Lake City, UT'
    },
    {
        src: ut_salt_lake_0,
        alt: 'Big Salt Lake @Salt Lake City, UT'
    },
    {
        src: ut_salt_lake_1,
        alt: 'Big Salt Lake @Salt Lake City, UT'
    },
    {
        src: wy_street,
        alt: 'On the road @Medicine Bow-Routt National Forest'
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