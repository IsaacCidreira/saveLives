import { Container } from './style';

interface Title {
  title: string;
}
const Titles = ({ title }: Title) => {
  return <Container>{title}</Container>;
};

export default Titles;
