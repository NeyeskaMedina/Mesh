import React, { useContext, useEffect, useState } from 'react';
import {
    IconButton,
    Tooltip,
    Badge,
} from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartModals } from '../modals/cartModals/CartModals';
// import { AuthContext } from "../../context/AuthContext.jsx";
// import { DataContext } from '../../context/DataContext.jsx';


const CartButtons = () => {
    // const { userId } = useContext(AuthContext);
    // const { quantityCart } = useContext(DataContext);
    const [iconSelected, setIconSelected] = useState(false);
    const [openModals, setOpenModals] = useState(false);

    const handleClose = () =>{
        setOpenModals(false);
    }
    return (
        <>
        <IconButton
            onMouseDown={() => setIconSelected(true)} 
            onMouseUp={() => setIconSelected(false)}  
            onMouseLeave={() => setIconSelected(false)} 
        >
            <Tooltip
                onClick={() => setOpenModals(true)}
                title="Agrega productos al Carrito">
                    {/* badgeContent =>  userId ? quantityCart : */}
                <Badge 
                    color="secondary" 
                    badgeContent={7} 
                    showZero
                >
                    <MdOutlineShoppingCart
                        style={{ 
                            fontSize: 40,
                            color: iconSelected ? "var(--colorAlter)" : "var(--colorIcon)"
                        }} 
                        
                    />
                </Badge>
            </Tooltip>
        </IconButton>
        <CartModals openModals={openModals} handleClose={handleClose}/>
        </>
    );
};

export default CartButtons;