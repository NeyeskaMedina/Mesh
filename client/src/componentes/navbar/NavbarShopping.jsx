import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { CiFilter } from "react-icons/ci";
import SearchApp from '../search/Search.jsx';
import CartButtons from '../buttons/CartButtons.jsx';
import FilterShoppingModals from "../modals/filterModals/FilterShoppingModals.jsx";

const pages = ['Products', 'Pricing', 'Blog'];

function NavbarShopping() {
const [openModals, setOpenModals] = useState(false)
const handleClick = () =>{
    setOpenModals(true)
}
const handleClose = () =>{
  setOpenModals(false);
}
  return (
      <Box
        className='navShopping'
        sx={{
            width: '100%',
            height: 'auto',
            backgroundColor: 'var(--bgNavbar)',
            margin: '0',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between'
            // padding: '20px 10px 10px 10px'
        }}>
          <CiFilter
                style={{alignSelf: 'center'}}
                size={35}
                cursor={'pointer'}
                title='Filtrar'
                onClick={handleClick}
          />
          <Box sx={{display: 'flex', width: '100%', justifyContent: 'end'}}>
                <SearchApp />
                <CartButtons />
          </Box>
          <FilterShoppingModals openModals={openModals} handleClose={handleClose}/>
      </Box>
  );
}
export default NavbarShopping;
