import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../utils/MOCK_DATA.json';
import { COLUMNS } from '../../utils/columns';
import './table.css';

const BasicTable = () => {
     const columns = useMemo(() => COLUMNS, []);
     const data = useMemo(() => MOCK_DATA, []);
    
    const tableInstance = useTable({
        columns,
        data
    });  
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    
    console.log('tableInstance:::', tableInstance );
    
    return <div className="wrapper">
                <div className="inner">
                    <table {...getTableProps()  }>
                        <thead className='t-head'>
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
                            
                        <tbody {...getTableBodyProps()} className='t-body'>
                        {
                                rows.map(row => {
                                    prepareRow(row);
                                    
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {
                                                row.cells.map(cell => {
                                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                })
                                            }
                                        </tr>           
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
};

export default BasicTable;