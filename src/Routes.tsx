import { Routes, Route } from 'react-router-dom';
import { CadastroEstacao } from './pages/cadastroEstacoes';


export function PathRoutes() {
    return (
        <Routes>
            {/*páginas de uso comum*/}
            <Route path="/cadastrarEstacao" element={<CadastroEstacao />} />
        </Routes>
    )
};