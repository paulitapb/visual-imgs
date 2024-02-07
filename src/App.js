
import './App.css';
import OriginalImagesGrid from './components/OriginalImagesGrid.js';
import FilterImgs from './components/FilterImgs.js';

import React, { useState} from 'react';

function App() {
  const [filter, setFilter] = useState({group: 0, img: 0, experiment: ""});
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (url) => {
    setSelectedImages([...selectedImages, url]);
  };

  const exportSelectedImages = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedImages));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "selected_images.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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
          <OriginalImagesGrid filter={filter} onImageClick={handleImageClick}/>
        </div>
       
      </div>
  );
}
// <img src={`${process.env.PUBLIC_URL}/images/repo-fine-tuning/experiment_english_captions/2023-09-25/index474_group4_img1_seed877423056_cfg7.png`} alt="img" />
export default App;
