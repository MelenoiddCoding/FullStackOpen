import React from 'react';
import Person from './Person';

const Persons = ({ persons, allPersons, searchBarValue }) => {
    return (
        <ul>
           {searchBarValue !== '' 
        ? ( 
          allPersons.map(person => 
            <Person key={allPersons.indexOf(person)} person={person}/>
          )
        ) : (
          persons.map(person => 
            <Person key={persons.indexOf(person)} person={person}/>
          )
        )} 
        </ul>
    );
};

export default Persons;