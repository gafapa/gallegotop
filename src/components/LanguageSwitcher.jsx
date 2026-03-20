import { ChevronDown, Languages } from "lucide-react";

export default function LanguageSwitcher({ currentLocale, locales, label, onChange }) {
  return (
    <label className="language-switcher" aria-label={label}>
      <Languages size={15} aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <select value={currentLocale} onChange={(event) => onChange(event.target.value)}>
        {locales.map((entry) => (
          <option key={entry.code} value={entry.code}>
            {entry.label}
          </option>
        ))}
      </select>
      <ChevronDown size={15} aria-hidden="true" />
    </label>
  );
}
