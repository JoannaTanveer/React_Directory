import React from 'react';
import { useState, useEffect } from 'react';
import TableRow from '../TableRow';
import SearchForm from '../searchform/searchform';
import API from '../../utils/API';
export const EmployeeHook = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    
    const [sort, setSort] = useState('id');
    const [filter, setFilter] = useState('all')
    
    
    useEffect(() => {
      API.getUsers()
      .then(res =>
         { 
          setResults(res);
          setLoading(false);
          
            
         }).catch(err => console.log(err)) 
    
    }, []);

    useEffect(() => {
      filterData();
    }, [filter])

    useEffect(() => {
      sortData();
    }, [sort])
  
    // function to sort data
    const sortData = () => {
      let newArray =[...results];
      console.log(sort, 'sort')
      if (sort === 'username') {
        newArray.sort((a, b) => {
          console.log(a[sort], 'a')

          return a[sort] > b[sort]? 1:-1;
        });
      }
      if (sort === 'last') {
        newArray.sort((a, b) => {
          return a[sort] > b[sort]? 1:-1;
        });
      } console.log(newArray, 'newarray') 
      setResults(newArray)
    }
      

  

  // function to filter data
  const filterData = () => {
    let newArray;
    switch(filter) {
      case 'cat':
        newArray = results.filter(
          row => row.username.includes('cat')
        )
        break;
      case 'bird':
        newArray = results.filter(
          row => row.username.includes('bird')
        )
        break;
      
      default:
        newArray = [...results];
    }
    setResults(newArray);
  }

      console.log(results, 'ChrisZ')
  return (
          
          <div className="text-center">
                <div className='sort'>
                <span>sort by:</span>
                <select 
                  id='order'
                  onChange={event => setSort(event.target.value)}
                  >
                    <option value='username'>username</option>
                    <option value='last'>last name</option>
                    
                </select>
              </div>
              <div className='filter'>
                <span>show:</span>
                <select 
                  id='filter'
                  onChange={event => setFilter(event.target.value)}
                  >
                    <option value='none'>all</option>
                    <option value='cat'>cat</option>
                    <option value='bird'>bird</option>
                    
                </select>
              </div>
            <table>
              <tbody>
              {results.map((row) => <TableRow row={row} key={row.uuid}/>
              )}
              </tbody>
            </table> 
            
              {/* <SearchForm 
                value={search}
                handleInputChange={ handleInputChange }
                handleFormSubmit={handleFormSubmit}/> */}
         
         </div>
      
    
  )
}
export default EmployeeHook;
