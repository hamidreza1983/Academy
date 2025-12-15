import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBox = ({ value, onChange, placeholder = "جستجوی دوره‌ها..." }: SearchBoxProps) => {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control rounded-pill border-primary"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="input-group-text bg-primary border-0 rounded-pill text-white">
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBox;
