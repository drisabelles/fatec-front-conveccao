import ButtonDefault from '../../components/ButtonDefault';
import HeaderDefault from '../../components/HeaderDefault';
import ParameterForm from '../../components/ParameterRegisterForm';


import THEME from '../../styles/theme';

import { Main, Footer, ContentFooter, Container } from './styles';

export function ParameterRegister(){
    return(
        <Container>
            <HeaderDefault title='Cadastro de parâmetros'/>
            <Main>
                1 <ParameterForm />
                2 <ParameterForm />
                3 <ParameterForm />
            </Main>
            <Footer>
                <ContentFooter>
                     <ButtonDefault 
                     title='Cadastrar' 
                     backgroundButton={THEME.colors.primary_green} 
                     widthButton={'184px'} 
                     heightButton={'56px'}
                     />
                </ContentFooter>
            </Footer>
        </Container>
    )
}