import { useState } from 'react';

const FilterItem = (props) => {
    const { title, setFitler, filterValues} = props;
    const [checked, setChecked] = useState(false);
    const handleOnChange = () => {
        setChecked(!checked);
        let newfilterValues;
        if (!checked) {
            newfilterValues = [...filterValues];
            newfilterValues.push(title);
            
        } else {
            newfilterValues = filterValues.filter( item=> item !== title)
        }
        setFitler(newfilterValues);
    }
    return (
        <div className="filter-item">
              <input type="checkbox" id={title} name={title}  checked={checked} onChange={handleOnChange}></input>
              <div className='filter-item-name'>{title}</div> 
        </div>
    );
}

export default FilterItem;