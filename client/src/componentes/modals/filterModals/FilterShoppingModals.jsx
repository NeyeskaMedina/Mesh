import { Box, Checkbox, FormControlLabel, Slider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './style.css'
import { GeneralButtons } from '../../buttons/GeneralButtons.jsx';

const FilterShoppingModals = ({ openModals, handleClose }) => {
    const [isHover, setIsHover] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100]); // Ejemplo de rango de precio

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    return (
        <Box
            className={`modalsFilter ${openModals ? 'show' : ''}`}
            onClick={handleClose}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '60vh',
                    backgroundColor: 'var(--colorRealModals)',
                    width: { xs: '100%', md: '40%' },
                    padding: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de Cerrar */}
                <span
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={handleClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        fontSize: '25px',
                        cursor: 'pointer',
                        color: isHover ? 'var(--colorExit)' : 'white',
                    }}
                >X</span>

                {/* Título */}
                <Typography variant="h5" sx={{
                    textAlign: 'center',
                    color: 'var(--colorTitle)',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    borderBottom: '2px solid var(--colorBorder)',
                    paddingBottom: '10px'
                }}>
                    Filtros de Búsqueda
                </Typography>

                {/* Filtros */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Filtro de Categoría */}
                    <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 'bold' }}>Categoría</Typography>
                    <TextField 
                        variant="outlined" 
                        placeholder="Buscar categoría"
                        fullWidth
                        size="small"
                    />

                    {/* Filtro de Rango de Precio */}
                    <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 'bold' }}>Rango de Precio</Typography>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={500} // Puedes ajustar el máximo según tus productos
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#777' }}>
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </Box>

                    {/* Filtro de Marca */}
                    <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 'bold' }}>Marca</Typography>
                    <Box>
                        <FormControlLabel control={<Checkbox />} label="Marca A" />
                        <FormControlLabel control={<Checkbox />} label="Marca B" />
                        <FormControlLabel control={<Checkbox />} label="Marca C" />
                    </Box>

                    {/* Filtro de Disponibilidad */}
                    <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 'bold' }}>Disponibilidad</Typography>
                    <FormControlLabel control={<Checkbox />} label="Solo productos en stock" />
                </Box>

                {/* Botón de Aplicar Filtros */}
                <GeneralButtons
                    sx={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '18px',
                        marginTop: '20px',
                    }}
                    size={'20px'}
                >
                    Aplicar Filtros
                </GeneralButtons>
            </Box>
        </Box>
    );
};

export default FilterShoppingModals;
