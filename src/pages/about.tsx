import React from 'react';
import default_profile from '../images/profile/default_profile.png'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';

function About(){
    return(
        <div>
            <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={4}
            >
                
                <img src={default_profile} width={'400px'} height={'400px'}></img>
                
                <Stack direction="column" spacing={1} alignItems={'center'}>
                    <h1>Hello and Welcome!</h1>
                    <p>This is the personal website for Tiruo.</p>
                    <p>Building in progress...</p>
                    <Stack direction="row" spacing={1} alignItems={'center'}>
                    
                        <IconButton 
                            size='large' 
                            aria-label="gitHub"
                            href = 'https://github.com/Sakirty'
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton 
                            size='large' 
                            aria-label="LinkedIn"
                            href = 'https://www.linkedin.com/in/tiruo-y-7a8b64159/'
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton> 
                        
                    </Stack>
                </Stack>
                
                

            </Stack>
            
                
                
                
                
                
        </div>
    )
}

export default About;