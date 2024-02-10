
import React, { useEffect, useState} from "react";
import imgs from '../data.json'
import prompts from '../prompts.json'

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

const OriginalImagesGrid = ({filter, selectedImages, onImageClick, updateSelectedImages  }) => {
    
    const [imagesToDisplay, setImagesToDisplay] = useState([])
  
    useEffect(() => {
      
      if(imagesToDisplay.length < 10){
        console.log("imagesToDisplay", imagesToDisplay);
      }
    }, [imagesToDisplay]);

    const onClick = (url) => {
      const isImageAlreadySelected = selectedImages.filter(image => image.id === url.id).length > 0;
      if(!isImageAlreadySelected){
       
        onImageClick(url);
    }}
    
    const onClickSelectedImage = (url) => {
      const imagesFiltered = selectedImages.filter(image => image.id !== url.id);
      updateSelectedImages(imagesFiltered);
    };
    
    useEffect(() => {
        let imagesFiltered = imgs.filter(
          (img) => img.group === filter.group && img.img === filter.img && img.experiment === filter.experiment
        )
        
        if(filter.geometry !== 'all'){
          
          imagesFiltered = imagesFiltered.filter((img) => Number(img.geometric) === Number(filter.geometry));
        }
        setImagesToDisplay( imagesFiltered );
        
      }, [filter.group, filter.img, filter.experiment, filter.geometry]);
    
  

    return (
      <Grid container spacing={2}>
          {imagesToDisplay.map((url, index) => {
            const prompt = prompts.find((prompt) => prompt.idPrompt === url.promptUsed);
            const titleImg = prompt ? prompt.caption : '';
           
            return(
              <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
                  <Paper>
                      {selectedImages.includes(url) ? 
                          <SelectedImg src={`${process.env.PUBLIC_URL}/images/${url.dir}`} 
                                      alt="" 
                                      onClick={() => onClickSelectedImage(url)}
                                      title={titleImg} /> :
                          <Img src={`${process.env.PUBLIC_URL}/images/${url.dir}`} 
                                alt="" 
                                onClick={() => onClick(url)}
                                title={titleImg} />
                      }
                  </Paper>
              </Grid>
          )})}
      </Grid>

    );
};

export default OriginalImagesGrid;