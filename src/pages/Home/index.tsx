import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ButtonDefault} from '../../components/ButtonDefault';
import {HeaderDefault} from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { TableStation } from '../../components/TableStation';
import THEME from '../../styles/theme';
import {CircularProgress, Box, Container} from '@mui/material';
import { Main, Footer } from '../StationList/styles';


export function StationList(){

    return(
        <Container>
            <Sidebar />
            <HeaderDefault title='Home'/>
            <Main> 
              <Map />
            </Main>
            <Footer>
            </Footer>
        </Container>
    )
}
