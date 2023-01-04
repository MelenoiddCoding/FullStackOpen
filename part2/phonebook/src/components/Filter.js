import React from 'react';


const Filter = ({ persons, searchBarValue, functions }) => {
    const handleSearchChange = (event) => {
        functions.setSearchBarValue(event.target.value)
        functions.setAllPersons(
          persons.filter(person => person.name.toLowerCase() === event.target.value.toLowerCase())
        )
    }

    return (
        <div>
            <div>
                filter shown with <input value={searchBarValue} onChange={handleSearchChange}/>
            </div>
        </div>
    );
};



export default Filter;