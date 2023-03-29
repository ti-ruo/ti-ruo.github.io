import React, { useState } from 'react';
import { Modal, Box, Button, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface Image {
    src: string;
    alt: string;
}

interface PhotosProps {
    images: Image[];
}

function PhotoViewer(props: PhotosProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectImageAlt, setSelectedImageAlt] = useState('');
  
    const handleImageClick = (src: string, alt: string) => {
      setSelectedImage(src);
      setSelectedImageAlt(alt);
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setSelectedImage('');
      setSelectedImageAlt('');
      setModalOpen(false);
    };
  
    return (
      <div style={{ alignContent:'center' }}>
        <div style={{ overflow: 'auto', alignContent:'center' }}>
        <Box sx={{ width: window.innerWidth*0.6, height: window.innerHeight*0.6, overflowY: 'scroll' }}>
            <ImageList sx={{  margin: 'auto' }} variant="masonry" cols={2} gap={8}>
                {props.images.map((image, index) => (
                    <ImageListItem>
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="preview-image"
                            onClick={() => handleImageClick(image.src, image.alt)}
                            loading='lazy'
                        />
                    </ImageListItem>
                    
                ))}
            </ImageList>
        </Box>
        </div>

        <div>
        <Modal open={modalOpen} onClose={handleCloseModal} style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
            <Box>
                <Stack direction="column" spacing={1} alignItems={'center'}>
                    <img src={selectedImage} alt="Full size image" className="full-image" 
                    style={{ 
                        objectFit: 'contain',
                        maxHeight: window.innerHeight*0.75, maxWidth: window.innerWidth*0.75
                    }}
                    />
                </Stack>
                <Stack direction="column" spacing={1} alignItems={'center'}>
                    <h3 style={{fontFamily: 'Josefin Sans, serif', color: 'rgb(255, 255, 255)'}}>{selectImageAlt}</h3>
                    <Button onClick={handleCloseModal}>Close</Button>
                </Stack>
                
            </Box>
        </Modal>
        </div>
      </div>
    );
  }

export default PhotoViewer;