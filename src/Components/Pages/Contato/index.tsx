import { useState } from 'react';
import { api } from '../../../services/api';
import { Buttons } from '../../Button/style';
import Input from '../../Forms/Input';
import UseForm from '../../Hooks/UseForm';
import Titles from '../../Title';
import { Container } from './style';

const Index = () => {
  const email = UseForm('email');
  const nome = UseForm();
  const telefone = UseForm('telefone');
  const [comment, setComment] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoad(true);
    if (email.validate()) {
      const response = await api.post('post', {
        email: email.value,
        nome: nome.value,
        telefone: telefone.value,
        message: comment,
      });
      if (response.status === 201) {
        window.location.reload();
      }
    }
    setLoad(false);
  }
  return (
    <Container>
      <Titles title="ENTRE EM CONTATO" />

      <form onSubmit={handleSubmit}>
        <Input type="nome" label="Nome" name="nome" {...nome} />
        <Input type="email" label="Email" name="email" {...email} />
        <Input type="number" label="Telefone" name="telefone" {...telefone} />
        <textarea
          className="textarea"
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        {load ? (
          <Buttons disabled>ENVIANDO...</Buttons>
        ) : (
          <Buttons>ENVIAR</Buttons>
        )}
      </form>
    </Container>
  );
};

export default Index;
