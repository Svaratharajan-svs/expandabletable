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
      
      const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelecteds = Props.map((n) => n.Id);
          Props.setSelected(newSelecteds);
          return;
        }
        Props.setSelected([]);
      };
    
      const handleClick = (event, name) => {
        const selectedIndex = Props.selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(Props.selected, name);
          if(name.length>2){
            newSelected.push(name.substring(0,2))
            newSelected.push(name.substring(0,1))
          }
          if(name.length===2){
            newSelected.push(name.substring(0,1))
            newSelected = newSelected.concat(Props.selected,indexarray(name,5));
           
          }
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(Props.selected.slice(1));
        } else if (selectedIndex === Props.selected.length - 1) {
          newSelected = newSelected.concat(Props.selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            Props.selected.slice(0, selectedIndex),
            Props.selected.slice(selectedIndex + 1),
          );
        }
          
       
    
        Props.setSelected(newSelected);
      };
     const indexarray=(id,length)=>{
        let arr=[]
            let i=0;
            while(i<length) {
              const newid=id+String(i)
                arr.push(newid)
              i++
            }
            return arr;

      }
      const isSelected = (name) => Props.selected.indexOf(name) !== -1;
      const isItemSelected = isSelected(row.Id);
      const labelId = `enhanced-table-checkbox-${row.Id}`;
    return <>
        <StyledTableRow  key={row.Id} hover
                      onClick={(event) => handleClick(event, row.Id)}
                      role="checkbox"
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                      aria-checked={isItemSelected} style={{height:"80px"}}>
            <StyledTableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                  </StyledTableCell>
              <StyledTableCell component="th" scope="row" style={{paddingRight:"20px"}}>
                {row.firstName}
              </StyledTableCell>
              <StyledTableCell >{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.age}</StyledTableCell>
              <StyledTableCell >{row.visits}</StyledTableCell>
              <StyledTableCell>{row.progress}</StyledTableCell>
            </StyledTableRow>
            
          
           <Childrow selected={Props.selected} setSelected={Props.setSelected} Id={row.Id} view={view} subRows={row.subRows}/>
          
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
            <Row selected={props.selected} setSelected={props.setSelected}  row={row}/>
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