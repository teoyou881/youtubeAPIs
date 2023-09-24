import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function DynamicSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Define a function to fetch suggestions from the API
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('/employees.json');
        //const response = await fetch(`/api/suggestions?query=${searchQuery}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = response.json();
        //const data = await response.json();
        const employeeNames = data.map((employee) => employee.employee_name);
        setSuggestions(employeeNames);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    // Call the fetchSuggestions function when searchQuery changes
    fetchSuggestions();
  }, [searchQuery]);

  return (
    <div>
      <Select
        value={searchQuery}
        options={suggestions.map((suggestion) => ({
          value: suggestion,
          label: suggestion,
        }))}
        onChange={(selectedOption) => setSearchQuery(selectedOption.value)}
        isClearable
        placeholder="Search..."
      />
    </div>
  );
}

export default DynamicSearch;
