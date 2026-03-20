export default function LanguageSwitcher({ currentLocale, locales, label, onChange }) {
  return (
    <nav className="language-switcher" aria-label={label}>
      {locales.map((entry) => (
        <button
          key={entry.code}
          type="button"
          className={entry.code === currentLocale ? "language-button is-active" : "language-button"}
          aria-pressed={entry.code === currentLocale}
          onClick={() => onChange(entry.code)}
        >
          <span aria-hidden="true">{entry.code.toUpperCase()}</span>
          <span className="sr-only">{entry.label}</span>
        </button>
      ))}
    </nav>
  );
}
