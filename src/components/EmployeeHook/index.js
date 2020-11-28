import React from 'react';
import { useState, useEffect } from 'react';
import EmployeeContainer from '../employeeContainer';
import SearchForm from '../searchform/searchform';
import API from '../../utils/API';
export const EmployeeHook = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(json => {
                setLoading(false);
                setResults(json.results);
            });
    }, []);
    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    };
    const searchEmployee = query => {
        API.search(query)
          .then(res => { setSearch({ results: res.data});
          })
        //   .catch(err => this.setState({ error: err.message }));
      };
      
      const handleFormSubmit = event => {
        event.preventDefault();
        searchEmployee(search)
      };
          
      const handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        setSearch(
          event.target.value
        );
      };
    return (
        <ul>
            { results.map(data => {
                return (
                    <div className="text-center">
                        <img alt={data.name.last} className="img-fluid" src={data.picture.medium} style={{ margin: "0 auto" }} />
                        <h3>{data.name.first} {data.name.last}</h3>
                        <h3>{data.email}</h3>
                        <h3>{data.login.username}</h3>
                        <h3>{data.gender}</h3>
                        <SearchForm 
                         value={search}
                         handleInputChange={ handleInputChange }
                         handleFormSubmit={handleFormSubmit}/>
                    </div>
                )
            }) }
        </ul>
    );
};
export default EmployeeHook;