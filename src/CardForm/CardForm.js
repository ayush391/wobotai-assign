import { Button, Card, CardContent, CardHeader, Container, FormControlLabel, FormGroup, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup, Typography, useRadioGroup, useTheme } from '@mui/material'
import SelectInput from '@mui/material/Select/SelectInput'
import { Box } from '@mui/system'
import React from 'react'
import logo_design from '../assets/Solid_lines.svg'


const CardForm = () => {
    const theme = useTheme();
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Card sx={{ display: 'flex', justifyContent: 'center', borderRadius: '20px', backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' }}>
            <Container maxWidth='xs' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', margin: '1rem 0rem', alignItems: 'center' }}>
                    <img src={logo_design} style={{ width: '12%' }}>
                    </img>
                    <Typography component="div" variant="h4" fontWeight='700' textAlign='center' sx={{ margin: '1rem' }}>
                        It's a delight to have you onboard
                    </Typography>
                    <Typography component="div" variant="caption" textAlign='center'>
                        Help us know you better.
                    </Typography>
                    <Typography component="div" variant="caption" textAlign='center'>
                        (This is how we optimize Wobot as per your business needs)
                    </Typography>
                </Box>
                <CardContent sx={{ flex: '1' }}>
                    <form>
                        <FormGroup sx={{ marginBottom: '1rem' }}>
                            <InputLabel sx={{ marginBottom: '0.2rem' }}>
                                Company Name
                            </InputLabel>
                            <Input placeholder='e.g Example Inc' disableUnderline sx={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#00000050', borderRadius: '5px', padding: '0.2rem 0.5rem' }} />
                        </FormGroup>
                        <FormGroup sx={{ marginBottom: '1rem' }}>
                            <InputLabel sx={{ marginBottom: '0.2rem' }}>
                                Industry
                            </InputLabel>
                            <Select variant='standard' displayEmpty disableUnderline value={1} sx={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#00000050', borderRadius: '5px', padding: '0.2rem 0.5rem' }}>
                                <MenuItem value={1}><Typography sx={{ color: '#00000075' }}>Select</Typography></MenuItem>
                                <MenuItem value={2}><Typography sx={{ color: '#00000075' }}>Select 1</Typography></MenuItem>
                                <MenuItem value={3}><Typography sx={{ color: '#00000075' }}>Select 2</Typography></MenuItem>
                                <MenuItem value={4}><Typography sx={{ color: '#00000075' }}>Select 3</Typography></MenuItem>
                                <MenuItem value={5}><Typography sx={{ color: '#00000075' }}>Select 4</Typography></MenuItem>
                            </Select>
                        </FormGroup>
                        <FormGroup sx={{ marginBottom: '3rem' }}>
                            <InputLabel sx={{ marginBottom: '0.2rem' }}>
                                Company Size
                            </InputLabel>
                            <ToggleButtonGroup
                                color='primary'
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"

                            >
                                <ToggleButton value="1-20" sx={{ marginRight: '1rem', padding: '0rem 0.5rem', borderRadius: '2px', borderWidth: '0px', backgroundColor: '#00000010' }}>1-20</ToggleButton>
                                <ToggleButton value="21-50" sx={{ marginRight: '1rem', padding: '0rem 0.5rem', borderRadius: '2px', borderWidth: '0px', backgroundColor: '#00000010' }}>21-50</ToggleButton>
                                <ToggleButton value="51-200" sx={{ marginRight: '1rem', padding: '0rem 0.5rem', borderRadius: '2px', borderWidth: '0px', backgroundColor: '#00000010' }}>51-200</ToggleButton>
                                <ToggleButton value="201-500" sx={{ marginRight: '1rem', padding: '0rem 0.5rem', borderRadius: '2px', borderWidth: '0px', backgroundColor: '#00000010' }}>201-500</ToggleButton>
                                <ToggleButton value="500+" sx={{ marginRight: '1rem', padding: '0rem 0.5rem', borderRadius: '2px', borderWidth: '0px', backgroundColor: '#00000010' }}>500+</ToggleButton>
                            </ToggleButtonGroup>

                        </FormGroup>
                        <FormGroup sx={{ marginBottom: '2rem' }}>
                            <Button disableElevation variant='contained' color='primary' >
                                Get Started
                            </Button>
                        </FormGroup>
                    </form>
                </CardContent>
            </Container>
        </Card>
    )
}

export default CardForm