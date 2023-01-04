import React, { useState } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: 'Juan', number: '0124355'}
  ])
  const [allPersons, setAllPersons] = useState([]);
  
  
  const [ searchBarValue, setSearchBarValue] = useState('')

  




  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
        <Filter persons={persons} searchBarValue={searchBarValue} functions={{setAllPersons, setSearchBarValue}}/>
      <h2>Add a new Person</h2>
        <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
        <Persons persons={persons} allPersons={allPersons} searchBarValue={searchBarValue}/>
    </div>
  )
}

export default App