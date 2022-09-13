import CustomInput from '../InputDefault';
import {SForm, SFieldset, SLabel} from './styles'

export default function ParameterForm() {
    return (
        <SForm>
            <SFieldset>
                <SLabel>Nome do parâmetro</SLabel>
                <CustomInput placeholder='Digite o nome da estação'/>
            </SFieldset>
            <SFieldset>
                <SLabel>Descrição</SLabel>
                <CustomInput placeholder='Digite a data da instalação'/>
            </SFieldset>
        </SForm>
        
    );
}