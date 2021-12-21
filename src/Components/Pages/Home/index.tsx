import { useContext } from 'react';
import { UseContext } from '../../Hooks/UseContext';
import Titles from '../../Title';
import { Container, SubContainer } from './style';

const Index = () => {
  const { dados } = useContext(UseContext);
  return (
    <Container>
      <Titles title="ESTENDA SUA MÃO" />
      <SubContainer>
        {dados.map((dado) => (
          <div key={dado.id}>
            <img src={dado.image} alt="" />
            <div>
              <p>{dado.description} </p>
              <p>{dado.description2} </p>
              <p>{dado.description3} </p>
            </div>
          </div>
        ))}
      </SubContainer>
    </Container>
  );
};

export default Index;
