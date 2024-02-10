
import './App.css';
import OriginalImagesGrid from './components/OriginalImagesGrid.js';
import FilterImgs from './components/FilterImgs.js';

import React, { useState, useEffect} from 'react';

function App() {
  const [filter, setFilter] = useState({group: 0, img: 0, experiment: "", geometry: "all"});
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (url) => {
    setSelectedImages([...selectedImages, url]);
  };
  
  const updateSelectedImages = (newSelectedImgs) => {
    setSelectedImages(newSelectedImgs);
  }
  /* useEffect(() => {
    
    console.log('selectedImages has been updated:', selectedImages);
  }, [selectedImages]);
 */
  const exportSelectedImages = async () => {
    try {
      const data = await fetchImageData();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data);
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download", "selected_images.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } catch (error) {
        console.error("Error exporting image data:", error);
    }
    };
  
  const fetchImageData = async () => {
    
    const promises = selectedImages.map(image => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(image);
          }, 1000);
      });
    });

    try {
        const imageDataArray = await Promise.all(promises);
        const jsonData = JSON.stringify(imageDataArray, null, 2);
        
        return jsonData;
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className = 'header'>
            Explorador de imgs
          </h1>
          < FilterImgs filter={filter} 
                        setFilter={setFilter}
                        selectedImages={selectedImages}/>
           <button onClick={exportSelectedImages}>Export Selected Images</button>
        </div>
        
        <div className='app-container'>
          <OriginalImagesGrid filter={filter} selectedImages = {selectedImages} onImageClick={handleImageClick} updateSelectedImages ={updateSelectedImages}/>
         
          <div style={{position: 'relative', maxWidth: '200px', maxHeight: '200px', margin: '10px'}}>
            <p style= {{color:'white', position:'relative', textAlign:'center'}}>Original Image</p>
            { (filter.group !== 0 && filter.img !== 0) ?
              <img src={`${process.env.PUBLIC_URL}/images/img_original/img${filter.group}${filter.img}.png`} 
                    style={{maxWidth: '200px', maxHeight: '200px', margin: '10px'}}></img>
                : null
                }
          </div>
        </div>
    </div>
  );
}
export default App;
