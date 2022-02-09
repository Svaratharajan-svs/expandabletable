import useState from 'react'
import React from 'react';
import Button from '@material-ui/core/Button';
import useEffect from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { SvgIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Checkbox from '@material-ui/core/Checkbox';
const Minimize=(Props)=>{
 return <SvgIcon {...Props}>
   <MinimizeIcon/>
 </SvgIcon>
}
const Arrowforward=(Props)=>{
  return <SvgIcon {...Props}>
    <ArrowForwardIosIcon/>
  </SvgIcon>
}
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      width: 83
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      borderLeftStyle:"solid",
      borderWidth:"5px",
      borderColor: "darkcyan"

      
    },
  }))(TableRow);

  
  export default function Row(Props) {
      let row=Props.row
      let view= ""
      
      
      
    return <>
        <StyledTableRow  key={row.Id} style={{height:"80px"}}>
            <StyledTableCell >
                <Canview  row={row} view={view} subRows={row.subRows}/>
                
                </StyledTableCell>
              <StyledTableCell component="th" scope="row" style={{paddingRight:"20px"}}>
                {row.firstName}
              </StyledTableCell>
              <StyledTableCell >{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.age}</StyledTableCell>
              <StyledTableCell >{row.visits}</StyledTableCell>
              <StyledTableCell>{row.progress}</StyledTableCell>
            </StyledTableRow>
            
          
           <Childrow Id={row.Id} view={view} subRows={row.subRows}/>
          
    </>
  }
  
  function Childrow(props) {
    const subrows = props.subRows;
  
    if (subrows!=null) {
      return <div style={{display:props.view}}>
        {
            subrows.map((row,i)=>{
              row["Id"]=props.Id+String(i)
              return(
            <div key={row.Id} style={{ alignItems:"center",display: 'flex', flexdirection:"row"}}>
            <div style={{height:"80px",width:"2px",backgroundColor:"darkcyan" }}></div>
            <div style={{height:"2px",width:"80px",backgroundColor:"darkcyan"}}></div>
            <div style={{minWidth:"700px"}}>
            <Row  row={row}/>
            </div>
            </div>)}
            )
        }
      </div>
    }
    return <></>
  }


  const Canview=(props)=> {
    const isLoggedIn = props.subRows;
    
    
    const handleclick=(e)=>{
           
               console.log(props.row)
            
    }
    if (isLoggedIn!=null) {
      return <div  style={{display:"flex",flexdirection:"row",alignItems:"center"}}><Checkbox onChange={(e)=>handleclick(e)} style={{color:"darkcyan"}} /><Arrowforward style={{color:"darkcyan"}}/></div>
    }
    return <div style={{display:"flex",flexdirection:"row",alignItems:"center"}}><Checkbox onChange={(e)=>handleclick(e)} style={{color:"darkcyan"}}/><Minimize style={{color:"darkcyan"}}/></div>;
  }