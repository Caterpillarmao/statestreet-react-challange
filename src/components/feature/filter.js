import FilterItem from "./filterItem";

const Filter = (props) => {
    const { title, filterNames, setFitler, filterValues } = props;
    const getFilters = () => {
        return filterNames.map((item, index) => {
            return (
                <FilterItem key={index} title={item} setFitler={setFitler} filterValues={filterValues}/>
            )
        })
    }
    return (
        <div className="filter-panel">
            <div className="filter-header">{title}</div>
            {getFilters()}
        </div>
    );
}

export default Filter;