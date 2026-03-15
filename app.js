const fallbackOrder = [
  { slug: "avatar", progress: false },
  { slug: "educhat", progress: false },
  { slug: "faladoiro", progress: false },
  { slug: "imagenes", progress: false },
  { slug: "lector", progress: false },
  { slug: "pdfing", progress: false },
  { slug: "proensia", progress: false },
  { slug: "profeplus", progress: true },
  { slug: "programacionesfp", progress: false },
  { slug: "rubricas", progress: false },
  { slug: "seguimiento", progress: false },
  { slug: "autenticador", progress: false },
  { slug: "vericopy", progress: false },
  { slug: "translate", progress: true },
  { slug: "preguntador", progress: false },
];

const categoryOrder = ["ai", "communication", "documents", "planning"];

const translations = {
  es: {
    pageTitle: "gallego.top | Herramientas para profes",
    metaDescription:
      "Herramientas docentes que se ejecutan en el navegador para trabajar con más tranquilidad en el contexto actual de protección de datos y uso de IA.",
    topbar: {
      subtitle: "Herramientas docentes en el navegador",
    },
    hero: {
      eyebrow: "Proyecto abierto",
      title: "Herramientas útiles para profes, pensadas para usarse con criterio.",
      lead:
        "Soy un profe que quiere ayudar a otros profes con aplicaciones que resuelvan trabajo real y que puedan utilizarse con más tranquilidad en el contexto actual de protección de datos y uso de IA.",
      support:
        "Todas las herramientas se ejecutan en el navegador para que la información no salga a ningún servicio externo durante su uso habitual.",
      ctaCatalog: "Ver aplicaciones",
      ctaContact: "Proponer una idea",
      statApps: "apps activas o en desarrollo",
      statStaticValue: "100%",
      statStatic: "web estática y rápida",
      statBrowserValue: "Local",
      statBrowser: "ejecución en navegador",
    },
    side: {
      label: "Enfoque",
      title: "Tecnología útil, simple de usar y pensada para el aula real.",
      copy:
        "El objetivo no es acumular demos de IA. Es crear utilidades concretas que reduzcan tareas repetitivas, faciliten la preparación de materiales y respeten mejor el contexto normativo actual.",
      item1: "Sin instalaciones complejas ni flujos innecesarios.",
      item2: "Con prioridad por el tratamiento local de la información.",
      item3: "Abierto a mejoras, nuevas ideas y necesidades reales de otros docentes.",
    },
    pillars: {
      one: {
        label: "Privacidad",
        title: "Uso desde el navegador",
        copy:
          "Las aplicaciones están pensadas para ejecutarse en el navegador, reduciendo al máximo la salida de datos y simplificando su adopción en entornos educativos.",
      },
      two: {
        label: "Utilidad",
        title: "Orientadas a trabajo docente real",
        copy:
          "Cada herramienta nace de tareas habituales: preparar materiales, revisar documentos, organizar trabajo o agilizar procesos que consumen tiempo.",
      },
      three: {
        label: "Evolución",
        title: "Proyecto vivo",
        copy:
          "El catálogo seguirá creciendo. Si echas en falta una aplicación o detectas mejoras, puedes escribir para proponerla.",
      },
    },
    catalog: {
      label: "Catálogo",
      title: "Aplicaciones agrupadas por categorías",
      copy:
        "Un conjunto de herramientas ligeras, accesibles desde gallego.top, organizado para que resulte fácil encontrar qué resuelve cada una.",
    },
    method: {
      label: "Cómo se plantean",
      title: "Un criterio simple para construir herramientas útiles",
      step1: "Identificar una necesidad docente concreta y frecuente.",
      step2: "Resolverla con una interfaz ligera, directa y sin pasos sobrantes.",
      step3: "Mantener la privacidad y la viabilidad de uso como requisito base.",
    },
    contact: {
      label: "Contacto",
      title: "Si falta una herramienta, se puede construir.",
      copy: "Puedes escribir para proponer una aplicación nueva, comentar una mejora o avisar de cualquier fallo.",
      cards: {
        one: {
          title: "Nuevas ideas",
          copy: "Si tienes una necesidad concreta, se puede estudiar una herramienta específica.",
        },
        two: {
          title: "Fallos o mejoras",
          copy: "Si algo no funciona o se puede hacer mejor, interesa saberlo para iterar.",
        },
      },
    },
    footer: {
      left: "gallego.top reúne herramientas para profes ejecutadas en el navegador.",
      right: "Contacto: pablo@gallegofalcon.com",
    },
    categories: {
      ai: {
        title: "IA aplicada",
        copy: "Herramientas de apoyo basadas en IA para generar, orientar o acelerar trabajo docente sin complicar el flujo de uso.",
      },
      communication: {
        title: "Comunicación y dinámica",
        copy: "Aplicaciones para trabajar interacción, conversación o preguntas de forma ágil desde el navegador.",
      },
      documents: {
        title: "Documentos y contenido",
        copy: "Utilidades para revisar, transformar o analizar materiales y documentos sin depender de procesos pesados.",
      },
      planning: {
        title: "Planificación y evaluación",
        copy: "Herramientas para organizar programación, seguimiento, rúbricas y otros procesos habituales de coordinación docente.",
      },
    },
    open: "Abrir app",
    progress: "En proceso",
  },
  gl: {
    pageTitle: "gallego.top | Ferramentas para profes",
    metaDescription:
      "Ferramentas docentes que se executan no navegador para traballar con máis tranquilidade no contexto actual de protección de datos e uso de IA.",
    topbar: {
      subtitle: "Ferramentas docentes no navegador",
    },
    hero: {
      eyebrow: "Proxecto aberto",
      title: "Ferramentas útiles para profes, pensadas para usarse con criterio.",
      lead:
        "Son un profe que quere axudar a outros profes con aplicacións que resolvan traballo real e que poidan usarse con máis tranquilidade no contexto actual de protección de datos e uso de IA.",
      support:
        "Todas as ferramentas se executan no navegador para que a información non saia a ningún servizo externo durante o seu uso habitual.",
      ctaCatalog: "Ver aplicacións",
      ctaContact: "Propoñer unha idea",
      statApps: "apps activas ou en desenvolvemento",
      statStaticValue: "100%",
      statStatic: "web estática e rápida",
      statBrowserValue: "Local",
      statBrowser: "execución no navegador",
    },
    side: {
      label: "Enfoque",
      title: "Tecnoloxía útil, simple de usar e pensada para a aula real.",
      copy:
        "O obxectivo non é acumular demos de IA. É crear utilidades concretas que reduzan tarefas repetitivas, faciliten a preparación de materiais e respecten mellor o contexto normativo actual.",
      item1: "Sen instalacións complexas nin fluxos innecesarios.",
      item2: "Con prioridade polo tratamento local da información.",
      item3: "Aberto a melloras, novas ideas e necesidades reais doutros docentes.",
    },
    pillars: {
      one: {
        label: "Privacidade",
        title: "Uso dende o navegador",
        copy:
          "As aplicacións están pensadas para executarse no navegador, reducindo ao máximo a saída de datos e simplificando a súa adopción en contornas educativas.",
      },
      two: {
        label: "Utilidade",
        title: "Orientadas a traballo docente real",
        copy:
          "Cada ferramenta nace de tarefas habituais: preparar materiais, revisar documentos, organizar traballo ou axilizar procesos que consomen tempo.",
      },
      three: {
        label: "Evolución",
        title: "Proxecto vivo",
        copy:
          "O catálogo seguirá medrando. Se botas en falta unha aplicación ou detectas melloras, podes escribir para propoñela.",
      },
    },
    catalog: {
      label: "Catálogo",
      title: "Aplicacións agrupadas por categorías",
      copy:
        "Un conxunto de ferramentas lixeiras, accesibles desde gallego.top, organizado para que resulte doado atopar que resolve cada unha.",
    },
    method: {
      label: "Como se plantexan",
      title: "Un criterio simple para construír ferramentas útiles",
      step1: "Identificar unha necesidade docente concreta e frecuente.",
      step2: "Resolvela cunha interface lixeira, directa e sen pasos sobrantes.",
      step3: "Manter a privacidade e a viabilidade de uso como requisito base.",
    },
    contact: {
      label: "Contacto",
      title: "Se falta unha ferramenta, pódese construír.",
      copy: "Podes escribir para propoñer unha aplicación nova, comentar unha mellora ou avisar de calquera fallo.",
      cards: {
        one: {
          title: "Novas ideas",
          copy: "Se tes unha necesidade concreta, pódese estudar unha ferramenta específica.",
        },
        two: {
          title: "Fallos ou melloras",
          copy: "Se algo non funciona ou se pode facer mellor, interesa sabelo para iterar.",
        },
      },
    },
    footer: {
      left: "gallego.top reúne ferramentas para profes executadas no navegador.",
      right: "Contacto: pablo@gallegofalcon.com",
    },
    categories: {
      ai: {
        title: "IA aplicada",
        copy: "Ferramentas de apoio baseadas en IA para xerar, orientar ou acelerar traballo docente sen complicar o fluxo de uso.",
      },
      communication: {
        title: "Comunicación e dinámica",
        copy: "Aplicacións para traballar interacción, conversa ou preguntas dunha forma áxil dende o navegador.",
      },
      documents: {
        title: "Documentos e contido",
        copy: "Utilidades para revisar, transformar ou analizar materiais e documentos sen depender de procesos pesados.",
      },
      planning: {
        title: "Planificación e avaliación",
        copy: "Ferramentas para organizar programación, seguimento, rúbricas e outros procesos habituais de coordinación docente.",
      },
    },
    open: "Abrir app",
    progress: "En proceso",
  },
  en: {
    pageTitle: "gallego.top | Tools for teachers",
    metaDescription:
      "Teaching tools that run in the browser so they can be used more safely within the current context of data protection and AI use.",
    topbar: {
      subtitle: "Teaching tools in the browser",
    },
    hero: {
      eyebrow: "Open project",
      title: "Useful tools for teachers, designed to be used with sound judgement.",
      lead:
        "I am a teacher who wants to help other teachers with applications that solve real work and can be used more comfortably within the current context of data protection and AI use.",
      support:
        "All tools run in the browser so information does not leave to any external service during normal use.",
      ctaCatalog: "View applications",
      ctaContact: "Suggest an idea",
      statApps: "active or in-progress apps",
      statStaticValue: "100%",
      statStatic: "static and fast website",
      statBrowserValue: "Local",
      statBrowser: "browser execution",
    },
    side: {
      label: "Approach",
      title: "Useful technology, simple to use and built for real classrooms.",
      copy:
        "The goal is not to collect AI demos. It is to build concrete utilities that reduce repetitive tasks, make materials easier to prepare and fit better within the current regulatory context.",
      item1: "No complex installation or unnecessary workflow.",
      item2: "Local data handling is a priority.",
      item3: "Open to improvements, new ideas and real needs from other teachers.",
    },
    pillars: {
      one: {
        label: "Privacy",
        title: "Browser-based use",
        copy:
          "The applications are designed to run in the browser, reducing data leaving the device as much as possible and making adoption easier in educational settings.",
      },
      two: {
        label: "Utility",
        title: "Built around real teaching work",
        copy:
          "Each tool starts from common tasks: preparing materials, reviewing documents, organising work or speeding up time-consuming processes.",
      },
      three: {
        label: "Evolution",
        title: "A living project",
        copy:
          "The catalogue will keep growing. If a tool is missing or you spot an improvement, you can write to propose it.",
      },
    },
    catalog: {
      label: "Catalogue",
      title: "Applications grouped by category",
      copy:
        "A set of lightweight tools available at gallego.top, organised so it is easy to find what each one helps with.",
    },
    method: {
      label: "How they are built",
      title: "A simple rule for building useful tools",
      step1: "Identify a concrete and frequent teaching need.",
      step2: "Solve it with a lightweight, direct interface and no unnecessary steps.",
      step3: "Keep privacy and practical usability as baseline requirements.",
    },
    contact: {
      label: "Contact",
      title: "If a tool is missing, it can be built.",
      copy: "You can write to suggest a new application, share an improvement or report any issue.",
      cards: {
        one: {
          title: "New ideas",
          copy: "If you have a specific need, a dedicated tool can be explored.",
        },
        two: {
          title: "Bugs or improvements",
          copy: "If something does not work or could work better, it is worth knowing so it can be improved.",
        },
      },
    },
    footer: {
      left: "gallego.top brings together browser-based tools for teachers.",
      right: "Contact: pablo@gallegofalcon.com",
    },
    categories: {
      ai: {
        title: "Applied AI",
        copy: "AI-assisted tools for generating, guiding or accelerating teaching work without complicating the usage flow.",
      },
      communication: {
        title: "Communication and interaction",
        copy: "Applications for conversations, interaction or question-based dynamics directly in the browser.",
      },
      documents: {
        title: "Documents and content",
        copy: "Utilities to review, transform or analyse materials and documents without heavy workflows.",
      },
      planning: {
        title: "Planning and assessment",
        copy: "Tools for organising planning, follow-up, rubrics and other common teaching coordination processes.",
      },
    },
    open: "Open app",
    progress: "In progress",
  },
};

const appMeta = {
  avatar: {
    category: "ai",
    tag: { es: "Presentación visual", gl: "Presentación visual", en: "Visual presentation" },
    title: { es: "3D AI Avatar", gl: "3D AI Avatar", en: "3D AI Avatar" },
    desc: {
      es: "Generación de avatares 3D y recursos visuales para presentar proyectos, ideas o materiales educativos con una identidad más cuidada.",
      gl: "Xeración de avatares 3D e recursos visuais para presentar proxectos, ideas ou materiais educativos cunha identidade máis coidada.",
      en: "3D avatar and visual resource generation for presenting projects, ideas or teaching materials with a more polished identity.",
    },
  },
  educhat: {
    category: "ai",
    tag: { es: "Asistencia IA", gl: "Asistencia IA", en: "AI assistance" },
    title: { es: "Edu Chat", gl: "Edu Chat", en: "Edu Chat" },
    desc: {
      es: "Asistente conversacional para preparar ideas, resolver dudas, reformular explicaciones o explorar recursos de apoyo docente.",
      gl: "Asistente conversacional para preparar ideas, resolver dúbidas, reformular explicacións ou explorar recursos de apoio docente.",
      en: "Conversational assistant for preparing ideas, solving questions, reframing explanations or exploring teaching support resources.",
    },
  },
  proensia: {
    category: "ai",
    tag: { es: "Automatización", gl: "Automatización", en: "Automation" },
    title: { es: "Asistente IA de Proens", gl: "Asistente IA de Proens", en: "Proens AI Assistant" },
    desc: {
      es: "Asistente de apoyo para procesos docentes que aprovecha IA para acelerar tareas, ordenar información y ganar tiempo.",
      gl: "Asistente de apoio para procesos docentes que aproveita IA para acelerar tarefas, ordenar información e gañar tempo.",
      en: "Support assistant for teaching processes that uses AI to speed up tasks, organise information and save time.",
    },
  },
  faladoiro: {
    category: "communication",
    tag: { es: "Diálogo guiado", gl: "Diálogo guiado", en: "Guided dialogue" },
    title: { es: "Faladoiro", gl: "Faladoiro", en: "Faladoiro" },
    desc: {
      es: "Herramienta centrada en conversaciones y simulaciones, útil para trabajar práctica oral, contextos o situaciones guiadas.",
      gl: "Ferramenta centrada en conversas e simulacións, útil para traballar práctica oral, contextos ou situacións guiadas.",
      en: "A tool focused on conversations and simulations, useful for oral practice, contexts or guided situations.",
    },
  },
  preguntador: {
    category: "communication",
    tag: { es: "Preguntas y dinámica", gl: "Preguntas e dinámica", en: "Questions and dynamics" },
    title: { es: "Preguntador", gl: "Preguntador", en: "Preguntador" },
    desc: {
      es: "Herramienta pensada para lanzar, organizar o trabajar preguntas desde el navegador de una forma simple y directa.",
      gl: "Ferramenta pensada para lanzar, organizar ou traballar preguntas dende o navegador dunha forma simple e directa.",
      en: "A tool designed to launch, organise or work with questions in the browser in a simple and direct way.",
    },
  },
  imagenes: {
    category: "documents",
    tag: { es: "Análisis visual", gl: "Análise visual", en: "Visual analysis" },
    title: { es: "Imágenes", gl: "Imaxes", en: "Images" },
    desc: {
      es: "Aplicación para revisar imágenes antes de incorporarlas a clase, materiales o documentación y detectar aspectos relevantes.",
      gl: "Aplicación para revisar imaxes antes de incorporalas á aula, aos materiais ou á documentación e detectar aspectos relevantes.",
      en: "Application to review images before using them in class, materials or documentation and detect relevant aspects.",
    },
  },
  lector: {
    category: "documents",
    tag: { es: "Lectura documental", gl: "Lectura documental", en: "Document reading" },
    title: { es: "Lector", gl: "Lector", en: "Reader" },
    desc: {
      es: "Lectura y trabajo sobre textos o PDFs desde el navegador, con una experiencia pensada para consultar contenido de forma cómoda.",
      gl: "Lectura e traballo sobre textos ou PDFs dende o navegador, cunha experiencia pensada para consultar contido dunha forma cómoda.",
      en: "Reading and working with texts or PDFs in the browser, designed for comfortable content consultation.",
    },
  },
  pdfing: {
    category: "documents",
    tag: { es: "Utilidades PDF", gl: "Utilidades PDF", en: "PDF utilities" },
    title: { es: "PDFing", gl: "PDFing", en: "PDFing" },
    desc: {
      es: "Conjunto de herramientas para tareas frecuentes con documentos PDF, orientadas a reducir pasos repetitivos del día a día.",
      gl: "Conxunto de ferramentas para tarefas frecuentes con documentos PDF, orientadas a reducir pasos repetitivos do día a día.",
      en: "A set of tools for common PDF tasks, focused on reducing repetitive day-to-day steps.",
    },
  },
  autenticador: {
    category: "documents",
    tag: { es: "Autenticidad documental", gl: "Autenticidade documental", en: "Document authenticity" },
    title: { es: "DocForensics", gl: "DocForensics", en: "DocForensics" },
    desc: {
      es: "Herramienta para revisar señales de autenticidad o anomalías en documentos digitales desde una interfaz simple.",
      gl: "Ferramenta para revisar sinais de autenticidade ou anomalías en documentos dixitais dende unha interface simple.",
      en: "Tool to review signs of authenticity or anomalies in digital documents from a simple interface.",
    },
  },
  vericopy: {
    category: "documents",
    tag: { es: "Similitud documental", gl: "Similaridade documental", en: "Document similarity" },
    title: { es: "VeriCopy", gl: "VeriCopy", en: "VeriCopy" },
    desc: {
      es: "Detección de similitud y copia entre documentos para comparar entregas, revisar textos y apoyar procesos de evaluación.",
      gl: "Detección de similaridade e copia entre documentos para comparar entregas, revisar textos e apoiar procesos de avaliación.",
      en: "Similarity and copying detection between documents for comparing submissions, reviewing texts and supporting assessment processes.",
    },
  },
  translate: {
    category: "documents",
    tag: { es: "Idiomas", gl: "Idiomas", en: "Languages" },
    title: { es: "Traductor", gl: "Tradutor", en: "Translator" },
    desc: {
      es: "Traducción de texto y documentos desde el navegador para adaptar materiales y hacerlos más accesibles o reutilizables.",
      gl: "Tradución de texto e documentos dende o navegador para adaptar materiais e facelos máis accesibles ou reutilizables.",
      en: "Translation of text and documents in the browser to adapt materials and make them more accessible or reusable.",
    },
  },
  profeplus: {
    category: "planning",
    tag: { es: "Productividad", gl: "Produtividade", en: "Productivity" },
    title: { es: "ProfePlus", gl: "ProfePlus", en: "ProfePlus" },
    desc: {
      es: "Espacio de utilidades para concentrar flujos de trabajo habituales y simplificar tareas que suelen dispersarse en varias herramientas.",
      gl: "Espazo de utilidades para concentrar fluxos de traballo habituais e simplificar tarefas que adoitan dispersarse en varias ferramentas.",
      en: "A utility space to bring together common workflows and simplify tasks that are usually scattered across several tools.",
    },
  },
  programacionesfp: {
    category: "planning",
    tag: { es: "Planificación", gl: "Planificación", en: "Planning" },
    title: { es: "FP Manager", gl: "FP Manager", en: "FP Manager" },
    desc: {
      es: "Aplicación para organizar programaciones y estructura docente con una visión más clara, editable y mantenible.",
      gl: "Aplicación para organizar programacións e estrutura docente cunha visión máis clara, editable e mantible.",
      en: "Application to organise teaching planning and structure with a clearer, editable and maintainable view.",
    },
  },
  rubricas: {
    category: "planning",
    tag: { es: "Evaluación", gl: "Avaliación", en: "Assessment" },
    title: { es: "Importador de Rúbricas", gl: "Importador de Rúbricas", en: "Rubric Importer" },
    desc: {
      es: "Automatiza la importación de rúbricas en Moodle a partir de Excel para evitar trabajo manual y errores de transcripción.",
      gl: "Automatiza a importación de rúbricas en Moodle a partir de Excel para evitar traballo manual e erros de transcrición.",
      en: "Automates rubric import into Moodle from Excel to avoid manual work and transcription errors.",
    },
  },
  seguimiento: {
    category: "planning",
    tag: { es: "Seguimiento", gl: "Seguimento", en: "Follow-up" },
    title: { es: "Planificador Portable", gl: "Planificador Portable", en: "Portable Planner" },
    desc: {
      es: "Planificación y seguimiento de tareas, sesiones o evolución, con una interfaz ligera y orientada a consulta rápida.",
      gl: "Planificación e seguimento de tarefas, sesións ou evolución, cunha interface lixeira e orientada á consulta rápida.",
      en: "Planning and follow-up of tasks, sessions or progress with a lightweight interface focused on quick access.",
    },
  },
};

function getValue(lang, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], translations[lang]);
}

function applyTranslations(lang) {
  const active = translations[lang] ? lang : "es";
  document.documentElement.lang = active;
  document.title = translations[active].pageTitle;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", translations[active].metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getValue(active, node.dataset.i18n);
    if (value) {
      node.textContent = value;
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === active);
  });

  localStorage.setItem("gallego.top.lang", active);
}

function parseWebsFile(text) {
  const items = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const progress = line.includes("*");
      return { slug: line.replace("*", "").trim(), progress };
    });

  const seen = new Map();

  items.forEach((item) => {
    if (!seen.has(item.slug)) {
      seen.set(item.slug, item);
      return;
    }

    if (item.progress) {
      seen.set(item.slug, { ...seen.get(item.slug), progress: true });
    }
  });

  return Array.from(seen.values());
}

async function loadApps() {
  try {
    const response = await fetch("./.webs", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Cannot load .webs");
    }

    const items = parseWebsFile(await response.text());
    if (items.length) {
      return items;
    }
  } catch (error) {
    console.warn("Using fallback app order.", error);
  }

  return fallbackOrder;
}

function renderCatalog(apps, lang) {
  const container = document.getElementById("catalog-groups");
  if (!container) {
    return;
  }

  const grouped = categoryOrder
    .map((category) => {
      const items = apps
        .map((app) => {
          const meta = appMeta[app.slug];
          if (!meta || meta.category !== category) {
            return null;
          }
          return { ...app, ...meta };
        })
        .filter(Boolean);

      return { category, items };
    })
    .filter((group) => group.items.length > 0);

  container.innerHTML = grouped
    .map(({ category, items }) => {
      const categoryCopy = translations[lang].categories[category];

      return `
        <section class="category-group">
          <div class="category-head">
            <div>
              <span class="section-label">${categoryCopy.title}</span>
              <h3>${categoryCopy.title}</h3>
              <p>${categoryCopy.copy}</p>
            </div>
          </div>
          <div class="category-grid">
            ${items
              .map((item) => {
                const title = item.title[lang] || item.title.es;
                const tag = item.tag[lang] || item.tag.es;
                const desc = item.desc[lang] || item.desc.es;
                const progress = item.progress
                  ? `<span class="progress-pill">${translations[lang].progress}</span>`
                  : "";

                return `
                  <article class="app-card">
                    <div class="app-top">
                      <span class="card-tag">${tag}</span>
                      ${progress}
                    </div>
                    <div>
                      <h3>${title}</h3>
                      <p>${desc}</p>
                    </div>
                    <div class="app-bottom">
                      <span>${item.slug}</span>
                      <a class="app-link" href="https://gallego.top/${item.slug}/" target="_blank" rel="noreferrer">${translations[lang].open}</a>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  const statApps = document.getElementById("stat-apps");
  if (statApps) {
    statApps.textContent = String(apps.length);
  }
}

async function init() {
  const savedLang = localStorage.getItem("gallego.top.lang") || "es";
  const apps = await loadApps();
  applyTranslations(savedLang);
  renderCatalog(apps, savedLang);

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang || "es";
      applyTranslations(lang);
      renderCatalog(apps, lang);
    });
  });
}

init();
