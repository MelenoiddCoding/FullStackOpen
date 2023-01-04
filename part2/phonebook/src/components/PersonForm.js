import React, {useState} from 'react';

function PersonForm({ persons, setPersons }) {

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addPerson = (event) => {
        event.preventDefault(event)
    
        const personObject = {
            name: newName,
            number: newNumber 
        }
        
        if(persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
        } else {
          setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
    }
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handlePhoneChange = (event) => {
        setNewNumber(event.target.value)
      }

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    phone: <input value={newNumber} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}

export default PersonForm;