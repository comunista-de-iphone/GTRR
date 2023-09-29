import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Homepage/HomePage'
import PrimeirosPassos from './pages/PrimeirosPassos/PrimeirosPassos'
import Faq from './pages/Faq/Faq'
import Cadastro from './pages/Cadastro/Cadastro'
import Manifesto from './pages/Manifesto/Manifesto'
import Estatuto from './pages/Estatuto/Estatuto'
import EmAndamento from './pages/EmAndamento/EmAndamento'
import Finalizados from './pages/Finalizados/Finalizados'
import SugiraProjeto from './pages/SugiraProjeto/SugiraProjeto'
import Error from './pages/Error/Error'
import './reset.css';
import './grid.css';

// a body precisa receber a grid contendo header contetn e footer 
// em seguida crie uma main e adicione uma nova grid contendo todo o estilo de content com grid 
// esse contenudo da content sempre sera atualizado quando mudar de pagina sempre mantendo a grid principal intacta

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/primeiros-passos' element={<PrimeirosPassos />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/manifesto' element={<Manifesto />} />
          <Route path='/estatuto' element={<Estatuto />} />
          <Route path='/em-andamento' element={<EmAndamento />} />
          <Route path='/finalizados' element={<Finalizados />} />
          <Route path='/sugestao' element={<SugiraProjeto />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;