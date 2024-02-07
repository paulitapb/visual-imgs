
import React, { useEffect, useState} from "react";
import imgs from '../data.json'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const Img = styled('img')({
    width: '100%',
    height: 'auto',
  });
  const SelectedImg = styled(Img)({
    border: '2px solid red',
});

const OriginalImagesGrid = ({filter = {"group":3, "img":2}, onImageClick }) => {
    
    const [imagesToDisplay, setImagesToDisplay] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
      console.log("imagesToDisplay", imagesToDisplay.length);
      if(imagesToDisplay.length < 10){
        console.log("imagesToDisplay", imagesToDisplay);
      }
    }, [imagesToDisplay]);

    const onClick = (url) => {
      setSelectedImages([...selectedImages, url]);
      onImageClick(url);
    }



    useEffect(() => {
        const imagesFiltered = imgs.filter(
          (img) => img.group === filter.group && img.img === filter.img && img.experiment === filter.experiment
        )
        setImagesToDisplay( imagesFiltered );
        
      }, [filter.group, filter.img, filter.experiment]);
    
  

    return (
      <Grid container spacing={2}>
          {imagesToDisplay.map((url, index) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
                  <Paper>
                      {selectedImages.includes(url) ? 
                          <SelectedImg src={`${process.env.PUBLIC_URL}/images/repo-fine-tuning/${url.dir}`} alt="" onClick={() => onClick(url)} /> :
                          <Img src={`${process.env.PUBLIC_URL}/images/repo-fine-tuning/${url.dir}`} alt="" onClick={() => onClick(url)} />
                      }
                  </Paper>
              </Grid>
          ))}
      </Grid>
        
    );
};

export default OriginalImagesGrid;