
import '../App.css';

const FilterImgs = ({filter, setFilter}) => {

    const handleSelectGroupChange = (event) => {
        setFilter({ ...filter, group: Number(event.target.value) });
    }
    
    const handleSelectImgChange = (event) => {
        setFilter({ ...filter, img: Number(event.target.value) });
    }

    const handleSelectExperimentChange = (event) => {
        setFilter({ ...filter, experiment: event.target.value });
    }

    const handleSelectGeometry = (event) => {
        setFilter({ ...filter, geometry: event.target.value });
    }
    return (
        <div className = 'FilterContainer'>
            <h2>Filtros</h2>
            
            <div>
            <label>Grupo</label>
            <select onChange={handleSelectGroupChange}>
                <option value="0">enter group</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </div>

            <div>
            <label>Img index </label>
            <select onChange={handleSelectImgChange}>
                <option value="0">enter img index</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </div>
            <div>
            <label>Experiment</label>
            <select onChange={handleSelectExperimentChange}>
                <option value="0">enter exp</option>
                <option value="experiment_english_captions">experiment_english_captions</option>
                <option value='experiment_spanish_captions'>experiment_spanish_captions</option>
                <option value='experiment_english_captions_textual_inversion'>experiment_english_captions_textual_inversion</option>
                <option value='experiment_english_captions_LORAV1'>experiment_english_captions_LORAV1</option>
                <option value='experiment_english_caps_LORA_V1_intento2'>experiment_english_caps_LORA_V1_intento2</option>
                <option value='experiment_english_captions_textual_inversion_neg_promts'>experiment_english_captions_textual_inversion_neg_promts</option>
                <option value='dibujos'>dibujos</option>
            </select>
            </div>

            <div>
                <label>Geometric</label>
                <select onChange={handleSelectGeometry}>
                    <option value="all">all</option>
                    <option value="0">non geometri</option>
                    <option value="1">geometric</option>
                </select>
            </div>
        </div>
    );
}
export default FilterImgs;