import { HiMiniSun, HiMiniMoon, HiMiniComputerDesktop } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const options = [
  { value: 'system', label: 'System', icon: HiMiniComputerDesktop },
  { value: 'light', label: 'Light', icon: HiMiniSun },
  { value: 'dark', label: 'Dark', icon: HiMiniMoon },
];

export default function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Theme selection">
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          className={`theme-toggle__btn ${preference === value ? 'theme-toggle__btn--active' : ''}`}
          onClick={() => setPreference(value)}
          aria-label={`${label} theme`}
          aria-pressed={preference === value}
          title={label}
        >
          <Icon size={16} />
          <span className="theme-toggle__label"></span>
        </button>
      ))}
    </div>
  );
}
