import { Container } from './style';

interface ContextTypes {
  label: string;
  type: string;
  name: string;
  value?: string;
  error?: string;

  onChange?: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}: ContextTypes) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </Container>
  );
};

export default Input;
