import styles from './styles.module.scss';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => (
  <input
    className={styles.input}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);
