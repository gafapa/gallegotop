import { startTransition, useDeferredValue, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Blocks, Globe2, LibraryBig, Mail, Search, Sparkles, Workflow } from "lucide-react";
import heroVisual from "./assets/hero-visual.svg";
import Seo from "./components/Seo";
import ExternalProjectCard from "./components/ExternalProjectCard";
import InternalProjectCard from "./components/InternalProjectCard";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SectionHeader from "./components/SectionHeader";
import { projectFocusContent } from "./content/projectFocusContent";
import { locales, messages } from "./content/siteContent";
import { categoryOrder, getExternalSites, getInternalApps } from "./data/catalog";

const iconMap = {
  ai: Sparkles,
  communication: Globe2,
  documents: LibraryBig,
  planning: Workflow,
};

const revealSection = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.5 },
};

function getInitialLocale() {
  if (typeof window === "undefined") {
    return "es";
  }

  const params = new URLSearchParams(window.location.search);
  const paramLocale = params.get("lang");
  const savedLocale = window.localStorage.getItem("gallego.top.locale");
  const browserLocale = window.navigator.languages
    ?.map((entry) => entry.slice(0, 2).toLowerCase())
    .find((entry) => messages[entry]);

  return [paramLocale, savedLocale, browserLocale, "es"].find((entry) => messages[entry]) || "es";
}

function matchesQuery(app, query) {
  const haystack = [app.slug, app.titleLabel, app.description, app.tagLabel].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export default function App() {
  const [locale, setLocale] = useState(getInitialLocale);
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const reduceMotion = useReducedMotion();
  const copy = messages[locale];
  const focusCopy = projectFocusContent[locale] || projectFocusContent.es;
  const internalApps = getInternalApps(locale);
  const externalSites = getExternalSites(locale);

  useEffect(() => {
    window.localStorage.setItem("gallego.top.locale", locale);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("lang", locale);
    window.history.replaceState({}, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    setActiveCategory("all");
    setQuery("");
  }, [locale]);

  const groupedApps = categoryOrder
    .map((category) => ({
      category,
      ...copy.ui.categories[category],
      items: internalApps.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  const filteredGroups = groupedApps
    .map((group) => ({
      ...group,
      items: group.items.filter((app) => {
        const categoryMatch = activeCategory === "all" || app.category === activeCategory;
        const queryMatch = !deferredQuery.trim() || matchesQuery(app, deferredQuery);
        return categoryMatch && queryMatch;
      }),
    }))
    .filter((group) => group.items.length > 0);

  const visibleCount = filteredGroups.reduce((total, group) => total + group.items.length, 0);
  const heroStats = [
    { value: internalApps.length, label: copy.ui.stats.internal },
    { value: externalSites.length, label: copy.ui.stats.external },
    { value: locales.length, label: copy.ui.stats.languages },
  ];
  const featuredApps = internalApps.slice(0, 4);
  const categoryButtons = [
    { code: "all", label: focusCopy.allProjects, count: internalApps.length },
    ...groupedApps.map((group) => ({ code: group.category, label: group.title, count: group.items.length })),
  ];
  const navItems = [
    { href: "#catalog", label: copy.ui.catalogLabel },
    { href: "#community", label: copy.ui.externalLabel },
    { href: "#contact", label: copy.ui.contactLabel },
  ];

  function handleCategorySelect(category) {
    setActiveCategory(category);
    document.getElementById("catalog")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function clearFilters() {
    setActiveCategory("all");
    setQuery("");
  }

  return (
    <>
      <Seo locale={locale} copy={copy} internalApps={internalApps} externalSites={externalSites} />

      <a className="skip-link" href="#content">
        {copy.ui.skipToContent}
      </a>

      <div className="page-shell">
        <div className="page-orb page-orb-a" />
        <div className="page-orb page-orb-b" />
        <div className="page-mesh" />

        <header className="site-header">
          <a className="brand" href="#top">
            <span className="brand-mark">g.</span>
            <span>
              <strong>gallego.top</strong>
              <small>{copy.ui.subtitle}</small>
            </span>
          </a>

          <nav className="site-nav" aria-label={copy.ui.navigationLabel}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-tools">
            <LanguageSwitcher
              currentLocale={locale}
              locales={locales}
              label={copy.ui.languageSwitcherLabel}
              onChange={(nextLocale) => startTransition(() => setLocale(nextLocale))}
            />

            <a className="contact-link" href="mailto:pablo@gallegofalcon.com">
              <Mail size={16} aria-hidden="true" />
              {copy.ui.navCta}
            </a>
          </div>
        </header>

        <main id="content" className="content-shell">
          <section id="top" className="hero">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="section-kicker">{focusCopy.projectsPrimaryLabel}</span>
              <h1>{focusCopy.projectsPrimaryTitle}</h1>
              <p className="hero-lead">{focusCopy.projectsPrimaryCopy}</p>
              <p className="hero-support">{copy.ui.catalogCopy}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#catalog">
                  {copy.ui.heroPrimary}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#community">
                  {copy.ui.heroSecondary}
                </a>
              </div>

              <div className="hero-categories" aria-label={focusCopy.categorySummary}>
                {groupedApps.map((group) => (
                  <button
                    key={group.category}
                    type="button"
                    className={activeCategory === group.category ? "hero-category-button is-active" : "hero-category-button"}
                    onClick={() => handleCategorySelect(group.category)}
                  >
                    <span>{group.title}</span>
                    <strong>{group.items.length}</strong>
                  </button>
                ))}
              </div>

              <div className="hero-stats" role="list" aria-label={copy.ui.livePanelLabel}>
                {heroStats.map((item) => (
                  <article key={item.label} className="stat-card" role="listitem">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="hero-panel"
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <div className="visual-frame">
                <img className="visual-image" src={heroVisual} alt="" />
              </div>

              <div className="hero-panel-copy">
                <span className="section-kicker">{copy.ui.catalogLabel}</span>
                <h2>{copy.ui.catalogTitle}</h2>
                <p>{copy.ui.heroLead}</p>
              </div>

              <div className="featured-grid">
                {featuredApps.map((app) => (
                  <a key={app.slug} className="featured-app" href={app.href} target="_blank" rel="noreferrer">
                    <span className="card-badge">{app.tagLabel}</span>
                    <strong>{app.titleLabel}</strong>
                    <small>{app.slug}</small>
                  </a>
                ))}
              </div>
            </motion.aside>
          </section>

          <motion.section id="catalog" className="catalog-section" {...(reduceMotion ? {} : revealSection)}>
            <SectionHeader
              id="catalog-title"
              eyebrow={copy.ui.catalogLabel}
              title={copy.ui.catalogTitle}
              description={copy.ui.catalogCopy}
            />

            <div className="catalog-shell">
              <aside className="filter-panel">
                <span className="section-kicker">{focusCopy.projectsPrimaryLabel}</span>
                <h3>{focusCopy.projectsPrimaryTitle}</h3>
                <p>{focusCopy.projectsPrimaryCopy}</p>

                <label className="search-box" htmlFor="project-search">
                  <Search size={18} aria-hidden="true" />
                  <span className="sr-only">{focusCopy.searchLabel}</span>
                  <input
                    id="project-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={focusCopy.searchPlaceholder}
                  />
                </label>

                <div className="filter-stack" aria-label={focusCopy.categorySummary}>
                  {categoryButtons.map((category) => (
                    <button
                      key={category.code}
                      type="button"
                      className={activeCategory === category.code ? "filter-chip is-active" : "filter-chip"}
                      onClick={() => setActiveCategory(category.code)}
                    >
                      <span>{category.label}</span>
                      <strong>{category.count}</strong>
                    </button>
                  ))}
                </div>

                <div className="results-row" role="status" aria-live="polite">
                  <span>
                    {focusCopy.resultsLabel}: <strong>{visibleCount}</strong>
                  </span>
                  {(activeCategory !== "all" || query.trim()) ? (
                    <button type="button" className="text-button" onClick={clearFilters}>
                      {focusCopy.clearFilter}
                    </button>
                  ) : null}
                </div>
              </aside>

              <div className="catalog-results">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map((group) => {
                    const Icon = iconMap[group.category] || Blocks;

                    return (
                      <motion.section
                        key={group.category}
                        className={`category-panel tone-${group.category}`}
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.45 }}
                      >
                        <div className="category-header">
                          <div className="category-title">
                            <span className="category-icon">
                              <Icon size={18} aria-hidden="true" />
                            </span>
                            <div>
                              <span className="section-kicker">{group.title}</span>
                              <h3>{group.title}</h3>
                            </div>
                          </div>
                          <p>{group.copy}</p>
                        </div>

                        <div className="project-grid">
                          {group.items.map((app) => (
                            <InternalProjectCard key={app.slug} app={app} copy={copy} reduceMotion={reduceMotion} />
                          ))}
                        </div>
                      </motion.section>
                    );
                  })
                ) : (
                  <article className="empty-state">
                    <h3>{focusCopy.noResultsTitle}</h3>
                    <p>{focusCopy.noResultsCopy}</p>
                  </article>
                )}
              </div>
            </div>
          </motion.section>

          <motion.section className="support-strip" {...(reduceMotion ? {} : revealSection)}>
            <article className="support-card">
              <span className="section-kicker">{copy.ui.methodLabel}</span>
              <h3>{copy.ui.methodTitle}</h3>
              <p>{copy.ui.methodSteps[0]}</p>
            </article>

            <article className="support-card">
              <span className="section-kicker">{copy.ui.manifestoLabel}</span>
              <h3>{copy.ui.manifestoTitle}</h3>
              <p>{copy.ui.manifestoPoints[0]}</p>
            </article>

            <article className="support-card">
              <span className="section-kicker">{copy.ui.seoLabel}</span>
              <h3>{copy.ui.seoTitle}</h3>
              <p>{copy.ui.seoItems[0]}</p>
            </article>
          </motion.section>

          <motion.section id="community" className="community-section" {...(reduceMotion ? {} : revealSection)}>
            <SectionHeader
              id="community-title"
              eyebrow={focusCopy.externalAfter}
              title={copy.ui.externalTitle}
              description={copy.ui.externalCopy}
              compact
            />

            <div className="external-grid">
              {externalSites.length > 0 ? (
                externalSites.map((site) => <ExternalProjectCard key={site.url} copy={copy} site={site} />)
              ) : (
                <article className="external-card empty-card">
                  <span className="card-badge">{copy.ui.externalLabel}</span>
                  <h3>{copy.ui.externalEmptyTitle}</h3>
                  <p>{copy.ui.externalEmptyCopy}</p>
                </article>
              )}
            </div>
          </motion.section>

          <motion.section id="contact" className="story-section" {...(reduceMotion ? {} : revealSection)}>
            <article className="story-card is-compact">
              <span className="section-kicker">{focusCopy.storyLabel}</span>
              <h2>{focusCopy.storyTitle}</h2>
              <p className="story-lead">{focusCopy.storyLead}</p>
            </article>

            <aside className="contact-card is-compact">
              <span className="section-kicker">{copy.ui.contactLabel}</span>
              <h2>{copy.ui.contactTitle}</h2>
              <p>{copy.ui.contactCopy}</p>
              <a className="button button-primary" href="mailto:pablo@gallegofalcon.com">
                {copy.ui.contactButton}
              </a>

              <ol className="story-list">
                {focusCopy.storyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
            </aside>
          </motion.section>
        </main>

        <footer className="footer">
          <p>{copy.ui.footer}</p>
        </footer>
      </div>
    </>
  );
}
