import { Box } from '@mui/material'
import React, { useState } from 'react'
import './style.css'
import { GeneralButtons } from '../../buttons/GeneralButtons';

export const CartModals = ( {openModals, handleClose} ) => {
    const [isHover, setIsHover] = useState(false);
  return (
    <Box 
        className={`modalsCart ${openModals ? 'show' : ''}`}
        onClick={handleClose}
    >
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: 'var(--colorRealModals)',
                    width: { xs: '100%', md: '540px' },
                    padding: '20px', 
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <span
                     onMouseEnter={() => setIsHover(true)}
                     onMouseLeave={() => setIsHover(false)}
                     onClick={handleClose}
                    style={{
                        width: '50px',
                        padding: "2px",
                        textAlign: 'center',
                        fontSize: '25px',
                        display: 'flex',
                        alignSelf: 'end',
                        cursor: 'pointer',
                        position: 'absolute',
                        color: isHover ? 'var(--colorExit)' : 'white',
                    }}
                >X</span>
                <Box sx={{minHeight: '80%', display: 'flex', flexDirection: 'column'}}>
                    <h1 
                        style={{
                            margin: '0 0 20px 0',
                            padding: '5px',
                            textAlign: 'center',
                            width: '100%',
                            color: 'var(--colorTitle)',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid var(--colorBorder)',
                    }}>Carrito de compras
                    </h1>
                    <Box
                        className='cartDetails' 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignSelf: 'center',
                            alignItems: 'center',
                            width: '80%',
                            padding: '10px', 
                            borderBottom: '1px solid #e0e0e0', 
                            mb: 2, 
                        }}
                    >
                        <img width={'50px'} height={'50px'} src="https://via.placeholder.com/70x70" alt="" />
                        <span style={{
                            fontSize: '18px',
                            color: '#ecc847',
                            padding: '0 10px 0 10px'
                        }}>Nombre completo de los productos a comprar</span>
                        <span style={{
                            fontSize: '18px',
                            color: '#ecc847',
                            fontWeight: 'bold'
                        }}>20.000</span>
                    </Box>
                    <Box
                        className='detailsAmount'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '90%',
                            justifyContent: 'flex-end',
                            padding: '10px 0',
                        }}
                    >
                        <h4 style={{
                            fontSize: '22px',
                            margin: '5px 0',
                            color: '#555',
                        }}>SubTotal: 20.000</h4>
                        <h6 style={{
                            fontSize: '18px',
                            margin: '5px 0',
                            color: '#555',
                        }}>Iva: 3.800</h6>
                        <h4 style={{
                            fontSize: '24px',
                            margin: '5px 0',
                            color: '#777',
                            fontWeight: 'bold',
                        }}>Total 23.800</h4>
                    </Box>
                </Box>
                    <GeneralButtons 
                        sx={{
                            width: '100%', 
                            padding: '10px',
                            fontSize: '18px',
                            marginTop: '20px',
                        }}
                        size={'20px'}>
                        Comprar
                    </GeneralButtons>
            </Box>
    </Box>
  )
}
