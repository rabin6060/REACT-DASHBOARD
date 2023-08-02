import { DataGrid, GridValueGetterParams,GridColDef, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { Link } from 'react-router-dom'
import "./dataTable.scss"

type Props =  {
    columns:GridColDef[],
    rows:object[],
    slug:string
}

const DataTable = (props:Props) => {
    const handleDelete = (id:number)=>{
        //api call
        console.log(id + "has been deleted");
        
    }
    const actionColumns:GridColDef = {
        field:"actions",
        headerName:"Actions",
        width:180,
        renderCell:(params)=>{
            return (
                <div className='action'>
                    <Link to={`${params.row.id}`}>
                        <img src="./view.svg"  />
                    </Link>
                    <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                        <img src="./delete.svg"  />
                    </div>
                </div>
            )
        }
    
    }
  return (
    <div className='dataTable'>
     <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns,actionColumns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{
            toolbar:GridToolbar
        }}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs: 500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable