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
      <div>
        <ImageList sx={{ width: 500, height: 450 }} variant="masonry" cols={2} gap={8}>
            {props.images.map((image, index) => (
                <ImageListItem>
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="preview-image"
                        onClick={() => handleImageClick(image.src, image.alt)}
                    />
                </ImageListItem>
                
            ))}
        </ImageList>
        <div>
        <Modal open={modalOpen} onClose={handleCloseModal} style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
            <Box>
                <Stack direction="column" spacing={1} alignItems={'center'}>
                    <img src={selectedImage} alt="Full size image" className="full-image" 
                    style={{ 
                        width: '66%', height: '66%', objectFit: 'contain',
                        maxHeight: window.innerHeight, maxWidth: window.innerWidth
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