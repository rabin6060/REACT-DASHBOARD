import { GridColDef } from '@mui/x-data-grid'
import React from 'react'
import "./add.scss"
type Props = {
    slug:string,
    columns:GridColDef[],
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
}
const Add = (props:Props) => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    //add new item
    //axios.post
  }
  return (
    <div className='add'>
        <div className="modal">
            <span className='closeButton' onClick={()=>props.setOpen(false)}>X</span>
            <h2>Add new {props.slug}</h2>
            <form onSubmit={handleSubmit}>
                {
                    props.columns.filter(item=>(item.field !=="id" && item.field !== "img"))
                    .map(column=>(
                        <div key={column.field} className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.type} />
                        </div>
                    ))
                }
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add