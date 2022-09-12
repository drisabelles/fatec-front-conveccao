import CadastroEstacao from './pages/CadastroEstacoes';
import { useState } from 'react';

function App() {
  
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <CadastroEstacao>
    </CadastroEstacao>
  )
}

export default App;