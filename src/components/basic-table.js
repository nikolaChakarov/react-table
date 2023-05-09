import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

const BasicTable = () => {
     const columns = useMemo(() => COLUMNS, []);
     const data = useMemo(() => MOCK_DATA, []);
    
    const tableInstance = useTable({
        columns,
        data
    });  
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    
    console.log('tableInstance:::', tableInstance );
    
    return <div>
        <table {...getTableProps()  }>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))
                }
            </thead>
            
            <tbody {...getTableBodyProps()}>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    
};

export default BasicTable;