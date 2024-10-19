import { Home } from './components/Home'
import styled from 'styled-components';

const BackGroundWrapper = styled.div`
  background: #ddc7ca;
`;


function App() {

  return (
    <BackGroundWrapper>
      <Home />
    </BackGroundWrapper>
  )
}

export default App
