
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
                <option value="english_captions">english_captions</option>
                <option value="spanish_captions">spanish_captions</option>
            </select>
            </div>
        </div>
    );
}
export default FilterImgs;