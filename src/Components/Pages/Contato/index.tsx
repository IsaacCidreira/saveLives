import { useState } from 'react';
import { api } from '../../../services/api';
import { Buttons } from '../../Button/style';
import Input from '../../Forms/Input';
import UseForm from '../../Hooks/UseForm';
import Titles from '../../Title';
import { Container } from './style';
interface addUser {
  id: number;
  email: string;
  telefone: string;
  message: string;
}
const Index = () => {
  const email = UseForm('email');
  const nome = UseForm();
  const telefone = UseForm();
  const [comment, setComment] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.validate()) {
      const response = await api.post('post', {
        email: email.value,
        nome: nome.value,
        telefone: telefone.value,
        message: comment,
      });

      if (response.status === 201) {
      }
    }
  }
  return (
    <Container>
      <Titles title="ENTRE EM CONTATO" />
      <form onSubmit={handleSubmit}>
        <Input type="email" label="Email" name="email" {...email} />
        <Input type="nome" label="Nome" name="nome" {...nome} />
        <Input type="number" label="telefone" name="telefone" {...telefone} />
        <textarea
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <Buttons>ENVIAR</Buttons>
      </form>
    </Container>
  );
};

export default Index;
