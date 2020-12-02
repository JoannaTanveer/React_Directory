import React from "react";

function TableRow(row) {
  const data= row.row;
  
  return (
    
      <tr>
          <td>{ data.last }</td>
          <td>{ data.first }</td>
          <td>{ data.username }</td>
          <td><a href={`mailto:${data.email}`}>{ data.email }</a></td>
          <td>{ data.phone }</td>
          
      </tr>
    
  );
}

export default TableRow;
