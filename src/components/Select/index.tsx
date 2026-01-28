type SelectProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export const Select = ({ value, options, onChange }: SelectProps) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
);
