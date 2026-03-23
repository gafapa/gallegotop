import { Check, ChevronDown, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher({ currentLocale, locales, label, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const currentEntry = locales.find((entry) => entry.code === currentLocale) || locales[0];

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSelect(nextLocale) {
    onChange(nextLocale);
    setIsOpen(false);
  }

  return (
    <div ref={rootRef} className={isOpen ? "language-switcher is-open" : "language-switcher"}>
      <button
        type="button"
        className="language-trigger"
        aria-label={label}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Languages size={15} aria-hidden="true" />
        <span className="language-current">{currentEntry.label}</span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div className="language-menu" role="menu" aria-label={label}>
          {locales.map((entry) => {
            const isSelected = entry.code === currentLocale;

            return (
              <button
                key={entry.code}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                className={isSelected ? "language-option is-selected" : "language-option"}
                onClick={() => handleSelect(entry.code)}
              >
                <span>{entry.label}</span>
                <span className="language-option-meta">
                  <span className="language-code">{entry.code.toUpperCase()}</span>
                  {isSelected ? <Check size={14} aria-hidden="true" /> : null}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
