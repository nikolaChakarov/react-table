import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../utils/MOCK_DATA.json';
import { COLUMNS } from '../../utils/columns';
import useWidth from '../../hooks/useWidth';
import './table.css';

const BasicTable = () => {
     const columns = useMemo(() => COLUMNS, []);
     const data = useMemo(() => MOCK_DATA, []);
     const width = useWidth();
    
    const tableInstance = useTable({
        columns,
        data
    });  
    
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = tableInstance;
    
    return  <div className="inner">
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
                        
                        {width > 375 && <tfoot>
                            {
                                footerGroups.map(footerGroup => (
                                    <tr {...footerGroup.getFooterGroupProps()}>
                                        {
                                            footerGroup.headers.map((column, i) => (
                                                <td key={i} {...column.getFooterProps}>
                                                    {column.render('Footer')}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tfoot>}
                    </table>
                </div>
};

export default BasicTable;