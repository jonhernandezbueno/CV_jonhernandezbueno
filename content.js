/**
 * Contenido bilingüe — datos de LinkedIn + ORCID
 * LinkedIn: jon-hernández-bueno-28467a26a
 * ORCID: 0009-0009-6640-0983
 */

const I18N = {
  es: {
    loaderTitle: "SYSTEM",
    loaderSub: "Sumergiendo en el mar del alma...",
    systemLabel: "SYSTEM",
    statRole: "ROL",
    statArcana: "ARCANA",
    arcanaName: "El Erudito",
    actionSelected: "SELECCIONADO",
    hintScroll: "DESPLAZAR",
    hintBackMenu: "MENÚ PRINCIPAL",
    codename: "PHANTOM SCIENTIST",
    menuTag: "MENÚ PRINCIPAL",
    heroTitle: "Investigador Doctoral · Seguridad en Computación Cuántica",
    previewTag: "VISTA PREVIA",
    hintNav: "NAVEGAR",
    hintConfirm: "CONFIRMAR",
    commandLabel: "Comandos",
    hintBack: "CERRAR",
    walletLabel: "ubicación actual",
    promptDefault: "Selecciona un comando.",
    identityTag: "JON HERNÁNDEZ BUENO - FÍSICO",
    dsPanelTitle: "SUBIR DE NIVEL",
    dsPanelEyebrow: "Subir de nivel",
    dsPanelHint: "Selecciona un registro para ver su contenido",
    dsCvRecords: "Registros",
    dsParameters: "Parámetros",
    dsCharName: "Jon Hernández-Bueno",
    dsCharClass: "Físico · Erudito",
    dsLabelName: "Nombre",
    dsLabelLevel: "Nivel",
    dsLabelSouls: "Almas",
    dsStatHP: "PS",
    dsStatEquipLoad: "Carga equip.",
    dsStatRightArmour: "Armadura der.",
    dsStatStamina: "Aguante",
    dsStatPhysDef: "Def. física",
    dsStatMagicDef: "Def. mágica",
    dsStatFlameDef: "Def. fuego",
    dsStatLightningDef: "Def. rayo",
    dsStatPoisonResist: "Resist. veneno",
    dsStatPhysicalAttack: "Ataque físico",
    dsStatMagicAttack: "Ataque mágico",
    dsStatRecord: "Registro",
    dsStatCodename: "Código",
    dsStatSummary: "Resumen",
    dsAttributes: {
      vitality: "Vitalidad",
      attunement: "Aprendizaje",
      endurance: "Aguante",
      strength: "Fuerza",
      dexterity: "Destreza",
      resistance: "Resistencia",
      intelligence: "Inteligencia",
      faith: "Fe"
    },
    dsAccept: "ACEPTAR",
    dsFooterSelect: "Seleccionar",
    dsFooterConfirm: "Abrir",
    dsFooterExit: "Salir",
    dsFlavors: {
      educacion: "Defensa física forjada en laboratorios, aulas y tesis.",
      publicaciones: "Ataque mágico y rayo que alcanzan revistas lejanas.",
      logros: "Golpes demoledores cincelados en la forja del mérito.",
      bibliografia: "Aguante y resistencia al veneno del olvido.",
      curiosidades: "Parámetros ocultos: llama alta, mente enigmática.",
      certificaciones: "Blindaje acumulado, certificación tras certificación.",
      patentes: "Rayo de innovación que incinera la frontera del arte."
    },
    settingSfx: "Efectos de sonido",
    menu: {
      educacion: "EDUCACIÓN",
      publicaciones: "PUBLICACIONES",
      logros: "LOGROS",
      bibliografia: "BIBLIOGRAFÍA",
      curiosidades: "CURIOSIDADES",
      certificaciones: "CERTIFICACIONES",
      patentes: "PATENTES"
    },
    sections: {
      educacion: {
        title: "EDUCACIÓN",
        codename: "SCHOLAR PATH",
        preview: "Físico teórico con master en matemática computacional.",
        content: `
          <div class="entry">
            <div class="entry-year">NOV 2024 — PRESENTE</div>
            <h3>Doctorado (PhD)</h3>
            <p class="entry-place">Universidad del País Vasco (UPV/EHU) · Leioa, País Vasco</p>
            <p>Ciberseguridad cuántica. Tecnologías de la información, comunicación y redes móviles. Investigación doctoral en TECNALIA en paralelo.</p>
          </div>
          <div class="entry">
            <div class="entry-year">OCT 2023 — JUL 2024</div>
            <h3>Máster en Modelización e Investigación Matemática, Estadística y Computacional</h3>
            <p class="entry-place">UPV/EHU · Departamento de Matemáticas</p>
            <p><strong>TFM:</strong> «Criptografía homomórfica: Implementación de protocolos cuánticos».</p>
          </div>
          <div class="entry">
            <div class="entry-year">SEP 2015 — JUN 2023</div>
            <h3>Grado en Física — Física Fundamental / Física Teórica</h3>
            <p class="entry-place">Universidad Complutense de Madrid (UCM)</p>
            <p><strong>TFG:</strong> «Física estadística del aprendizaje no supervisado».</p>
            <p>Prácticas docentes (dic 2022 — jun 2023): Laboratorio y tutorías a alumnos de 1º curso de Ciencias Físicas.</p>
          </div>
        `
      },
      publicaciones: {
        title: "PUBLICACIONES",
        codename: "RESEARCH ARCHIVE",
        preview: "Artículos publicados.",
        content: `
          <div class="entry">
            <div class="entry-year">2026 · PREPRINT</div>
            <h3>Quantum Homomorphic Encryption: Towards Practical and Private Computation on Untrusted Quantum Hardware</h3>
            <p class="entry-meta">Jon Hernández-Bueno, Oscar Lage, Marivi Higuero, Jasone Astorga · arXiv:2604.19256</p>
            <p>Marco universal QOTPH basado en Quantum One-Time Pad. Evaluación homomórfica de circuitos Clifford+T en simuladores y procesadores IBM Quantum reales.</p>
            <p><a href="https://arxiv.org/abs/2604.19256" target="_blank" rel="noopener">arXiv →</a> · <a href="https://scholar.google.es/citations?view_op=view_citation&hl=es&user=I5vwGuIAAAAJ&citation_for_view=I5vwGuIAAAAJ:qjMakFHDy7sC" target="_blank" rel="noopener">Google Scholar →</a></p>
          </div>
          <div class="entry">
            <div class="entry-year">2026 · CAPÍTULO DE LIBRO</div>
            <h3>Enhancing Blockchain with Quantum-Safe Verification: A Quantum Fingerprinting Framework</h3>
            <p class="entry-meta">Jon Hernández-Bueno, Oscar Lage, Marivi Higuero, Iñaki Seco-Aguirre, Julen Bernabé-Rodríguez</p>
            <p>Integración de Quantum Fingerprinting como mecanismo de verificación e integridad en blockchain. Publicado en Springer.</p>
            <p><a href="https://link.springer.com/chapter/10.1007/978-3-032-05877-5_3" target="_blank" rel="noopener">Ver publicación →</a></p>
          </div>
          <div class="entry">
            <div class="entry-year">2025 · CAPÍTULO DE LIBRO</div>
            <h3>A True Random Number Generator for Blockchain Wallets Based on Quantum Computation</h3>
            <p class="entry-meta">Jon Hernández-Bueno, Julen Bernabé-Rodríguez, Iñaki Seco-Aguirre, Leire Legarreta</p>
            <p>Q-TRNG y Q-SKG para claves y nonces de Ethereum con mejor entropía que generadores pseudoaleatorios convencionales.</p>
            <p><a href="https://link.springer.com/chapter/10.1007/978-3-031-81928-5_19" target="_blank" rel="noopener">Ver publicación →</a></p>
          </div>
          <p class="contact-line">
            <a href="https://orcid.org/0009-0009-6640-0983" target="_blank" rel="noopener">ORCID</a> ·
            <a href="https://www.linkedin.com/in/jon-hern%C3%A1ndez-bueno-28467a26a/" target="_blank" rel="noopener">LinkedIn</a> ·
            Scopus: 59703812300
          </p>
        `
      },
      logros: {
        title: "LOGROS",
        codename: "TROPHY CASE",
        preview: "Logros relevantes.",
        content: `
          <ul class="achievement-list">
            <li>
              <span class="ach-icon">★</span>
              <div>
                <strong>Best Paper Award — Blockchain'25</strong>
                <p>7th International Congress on Blockchain and Applications. Université de Lille, julio 2025. Por «Enhancing Blockchain with Quantum-Safe Verification: A Quantum Fingerprinting Framework».</p>
              </div>
            </li>
            <li>
              <span class="ach-icon">★</span>
              <div>
                <strong>IBM Qiskit Advocate</strong>
                <p>Miembro del programa de defensores de la comunidad cuántica de IBM.</p>
              </div>
            </li>
            <li>
              <span class="ach-icon">★</span>
              <div>
                <strong>Beca predoctoral TECNALIA</strong>
                <p>Grant nº 112794 · Programa BIKAINTEK 017-B2/2024.</p>
              </div>
            </li>
          </ul>
        `
      },
      bibliografia: {
        title: "BIBLIOGRAFÍA",
        codename: "LIFE ARCHIVE",
        preview: "Desarrollo profesional a lo largo de los años.",
        content: `
          <p class="note">Mi vida en fechas. No papers ni libros: esto soy yo.</p>
          <div class="entry">
            <div class="entry-year">ORÍGENES</div>
            <h3>Jon Hernández-Bueno</h3>
            <p>Nací en <strong>Vitoria-Gasteiz</strong> el 30 de octubre de 1997. Crecí con interés por la ciencia, por conocer y entender cómo funciona el mundo.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2015 — 2023</div>
            <h3>Años universitarios en Madrid</h3>
            <p>Entro en el Grado en Física en la Universidad Complutense de Madrid (UCM), itinerario de física fundamental y teórica.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2022 — 2023</div>
            <h3>Docencia en la UCM</h3>
            <p>Prácticas docentes en la Facultad de Ciencias Físicas: laboratorio y tutorías a alumnos de primer curso. También coordino visitas de institutos a la facultad.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2023</div>
            <h3>TFG y cambio de rumbo</h3>
            <p>Finalizo el grado con un TFG: «Física estadística del aprendizaje no supervisado». Cierro la etapa madrileña con una base sólida en física teórica y computación.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2023 — 2024</div>
            <h3>País Vasco: máster y primer contacto con TECNALIA</h3>
            <p>Vuelvo al País Vasco para el Máster en Modelización e Investigación Matemática, Estadística y Computacional (UPV/EHU, Leioa).</p>
            <p>TFM: «Criptografía homomórfica: Implementación de protocolos cuánticos». En paralelo, prácticas de investigación en TECNALIA (Bilbao) en el mismo campo.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2024 — HOY</div>
            <h3>Investigador doctoral</h3>
            <p>Inicio el doctorado en la UPV/EHU y el puesto de PhD Researcher en TECNALIA (equipo Ciberseguridad &amp; Blockchain). Investigo seguridad en computación cuántica, blockchain y criptografía aplicada.</p>
          </div>
          <div class="entry highlight">
            <p><strong>Hoy:</strong> Doctorando entre Derio y Leioa, físico de formación, criptógrafo cuántico de profesión.</p>
          </div>
        `
      },
      certificaciones: {
        title: "CERTIFICACIONES",
        codename: "SKILL TREE",
        preview: "Certificaciones adquiridas.",
        content: `
          <p class="note">Todas las licencias y certificaciones de mi <a href="https://www.linkedin.com/in/jon-hern%C3%A1ndez-bueno-28467a26a/" target="_blank" rel="noopener">LinkedIn</a> (62 en total).</p>
          <ul class="cert-list">
            <li class="cert-item">
              <span class="cert-rank">01</span>
              <div>
                <h3>Qiskit Advocate</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Septiembre 2025</p>
                <p class="cert-skills">Computación cuántica</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">02</span>
              <div>
                <h3>Qiskit Global Summer School 2025 — Quantum Excellence</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Agosto 2025</p>
                <p class="cert-skills">Computación cuántica</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">03</span>
              <div>
                <h3>Gestor en Ciberseguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">04</span>
              <div>
                <h3>Gestión en ciberseguridad: Gestión de incidentes</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">05</span>
              <div>
                <h3>Gestión en ciberseguridad: Desarrollo del programa de seguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">06</span>
              <div>
                <h3>Gestión en ciberseguridad: Gestión de proyectos de seguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">07</span>
              <div>
                <h3>Gestión en ciberseguridad: Gestión de riesgos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Gestión de riesgos</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">08</span>
              <div>
                <h3>Gestión en ciberseguridad: Gobierno de seguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">09</span>
              <div>
                <h3>Gestión en ciberseguridad: Conviértete en Cybersecurity Manager</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">10</span>
              <div>
                <h3>Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">11</span>
              <div>
                <h3>Curso de FinTech: Revolucionando las finanzas</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Blockchain, FinTech</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">12</span>
              <div>
                <h3>Futuro de Smart Contracts y Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Smart Contracts, Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">13</span>
              <div>
                <h3>Curso Empresas que utilizan Smart Contracts</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Smart Contracts</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">14</span>
              <div>
                <h3>Curso de introducción a Hyperledger Besu</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Hyperledger</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">15</span>
              <div>
                <h3>Curso de Hyperledger Fabric</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Hyperledger</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">16</span>
              <div>
                <h3>Curso Mi primera Dapp</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Smart Contracts, Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">17</span>
              <div>
                <h3>Curso Aplicaciones prácticas de los Smart Contracts sobre Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Smart Contracts, Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">18</span>
              <div>
                <h3>Curso de Smart Contracts y Solidity</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Mayo 2025</p>
                <p class="cert-skills">Smart Contracts, Solidity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">19</span>
              <div>
                <h3>Curso de Ethereum desde cero</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Blockchain, Ethereum</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">20</span>
              <div>
                <h3>Herramientas y tecnologías para ser desarrollador Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">21</span>
              <div>
                <h3>Ecosistema Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">22</span>
              <div>
                <h3>Curso de Introducción a Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">23</span>
              <div>
                <h3>Esquema Nacional de Seguridad (ENS): Fundamentos e implementación</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Esquema Nacional de Seguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">24</span>
              <div>
                <h3>Esquema Nacional de Seguridad (ENS): Implementación y Herramientas</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Esquema Nacional de Seguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">25</span>
              <div>
                <h3>Seguridad de la información y protección de datos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Seguridad de la información, Protección de datos</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">26</span>
              <div>
                <h3>Curso avanzado en Protección de datos y Seguridad de la información</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Seguridad de la información, Protección de datos</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">27</span>
              <div>
                <h3>Protección de datos y Seguridad de la información</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Protección de datos, Seguridad de la información</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">28</span>
              <div>
                <h3>Fundamentos Legales de la Ciberseguridad y Protección de Datos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Protección de datos</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">29</span>
              <div>
                <h3>Ciberseguridad en la Empresa</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">30</span>
              <div>
                <h3>Introducción al Esquema Nacional de Seguridad (ENS)</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">31</span>
              <div>
                <h3>Curso de desarrollo seguro</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">32</span>
              <div>
                <h3>Curso de Triage informático</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">33</span>
              <div>
                <h3>Curso de Seguridad de red en el ámbito corporativo: Capas 3 y 7 del modelo OSI</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">34</span>
              <div>
                <h3>Curso de Seguridad de red en el ámbito corporativo: Capa 2 del modelo OSI</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">35</span>
              <div>
                <h3>Curso de análisis y gestión del riesgo</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Análisis de riesgos</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">36</span>
              <div>
                <h3>Criptografía Simétrica y Asimétrica en la práctica</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Criptografía</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">37</span>
              <div>
                <h3>OSINT para fuga de datos empresariales</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">38</span>
              <div>
                <h3>Especialista en Hacking Ético</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">39</span>
              <div>
                <h3>Autopsy: Recuperación de datos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">40</span>
              <div>
                <h3>Metasploit para pentesting</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">41</span>
              <div>
                <h3>Herramientas avanzadas para búsquedas OSINT</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">42</span>
              <div>
                <h3>Curso OSINT: Técnicas de investigación e inteligencia en fuentes abiertas</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">43</span>
              <div>
                <h3>Análisis forense avanzado en sistemas Linux</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">44</span>
              <div>
                <h3>Análisis forense básico en sistemas Linux</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">45</span>
              <div>
                <h3>Análisis forense avanzado en sistemas Windows</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">46</span>
              <div>
                <h3>Análisis forense básico en sistemas Windows</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">47</span>
              <div>
                <h3>Curso de Hacking web</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Abril 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">48</span>
              <div>
                <h3>Onboarding en Ciberseguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Marzo 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">49</span>
              <div>
                <h3>Curso de Hacking Tools & Forensic: Red Team</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Marzo 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">50</span>
              <div>
                <h3>Curso de Hacking Tools: Blue Team</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">Marzo 2025</p>
                <p class="cert-skills">Ciberseguridad, Programación</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">51</span>
              <div>
                <h3>Quantum Business Foundations</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Noviembre 2024</p>
                <p class="cert-skills">Computación cuántica</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">52</span>
              <div>
                <h3>Certificado oficial EF SET 76/100 (C2 Proficient)</h3>
                <p class="cert-issuer">EF SET</p>
                <p class="cert-date">Octubre 2024</p>
                <p class="cert-skills">Inglés</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">53</span>
              <div>
                <h3>IBM Quantum Challenge 2024 Achievement</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Junio 2024</p>
                <p class="cert-skills">Computación cuántica</p><p><a href="https://credly.com/badges/199d75df-551c-49cd-85e0-eb58cc5ffeb2/linked_in_profile" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">54</span>
              <div>
                <h3>Variational Algorithm Design</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Junio 2024</p>
                <p class="cert-skills">Computación cuántica</p><p><a href="https://credly.com/badges/34315129-e9a3-4aab-98a0-b07038293813/linked_in_profile" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">55</span>
              <div>
                <h3>edX Verified Certificate for Introduction to Quantum Computing</h3>
                <p class="cert-issuer">edX</p>
                <p class="cert-date">Abril 2024</p>
                <p class="cert-skills">Computación cuántica</p><p class="cert-id">ID: 0e8a887eb3f94484a122202d6fd4823c</p><p><a href="https://courses.edx.org/certificates/0e8a887eb3f94484a122202d6fd4823c" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">56</span>
              <div>
                <h3>Practical Introduction to Quantum-Safe Cryptography</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Febrero 2024</p>
                <p class="cert-skills">Criptografía, Computación cuántica</p><p><a href="https://credly.com/badges/ec273eb0-4426-46a7-867e-0565d4a57831/linked_in_profile" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">57</span>
              <div>
                <h3>Basics of Quantum Information</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">Febrero 2024</p>
                <p class="cert-skills">Computación cuántica, Información cuántica</p><p><a href="https://credly.com/badges/eaefb830-01fd-4290-afff-51e9538578ec/linked_in_profile" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">58</span>
              <div>
                <h3>edX Verified Certificate for Visualizing Data with Python</h3>
                <p class="cert-issuer">edX</p>
                <p class="cert-date">Junio 2023</p>
                <p class="cert-skills">Visualización de datos, Ciencia de datos</p><p class="cert-id">ID: 7253538f8e074959af27e4d419c91306</p><p><a href="https://courses.edx.org/certificates/7253538f8e074959af27e4d419c91306" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">59</span>
              <div>
                <h3>edX Verified Certificate for Machine Learning with Python: A Practical Introduction</h3>
                <p class="cert-issuer">edX</p>
                <p class="cert-date">Enero 2023</p>
                <p class="cert-skills">Aprendizaje supervisado, Ciencia de datos</p><p class="cert-id">ID: bd42e18ef0f3495aaafee95547e16cf1</p><p><a href="https://courses.edx.org/certificates/bd42e18ef0f3495aaafee95547e16cf1" target="_blank" rel="noopener">Ver credencial →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">60</span>
              <div>
                <h3>Aplicaciones de la inteligencia artificial en Ciencias</h3>
                <p class="cert-issuer">Universidad Complutense de Madrid</p>
                <p class="cert-date">Febrero 2021</p>
                <p class="cert-skills">Física, Programación</p><p class="cert-id">ID: ES_U01000001_2021_EXP_046813</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">61</span>
              <div>
                <h3>Permiso de conducción B</h3>
                <p class="cert-issuer">Dirección General de Tráfico (DGT)</p>
                <p class="cert-date">Noviembre 2021</p>
                <p class="cert-skills">Conducción</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">62</span>
              <div>
                <h3>Certificado Elemental de música en la especialidad de percusión</h3>
                <p class="cert-issuer">Conservatorio profesional de música Jesús Guridi</p>
                <p class="cert-date">Noviembre 2012</p>
                <p class="cert-skills">Música, Percusión</p>
              </div>
            </li>
          </ul>
        `
      },
      patentes: {
        title: "PATENTES",
        codename: "PATENT FILE",
        preview: "Patentes desarrolladas como autor principal.",
        content: `
          <ul class="achievement-list">
            <li>
              <span class="ach-icon">◆</span>
              <div>
                <strong>Patente 1</strong>
                <p>Solicitada · <em>Patente secreta</em> (sin nombre ni descripción por confidencialidad).</p>
              </div>
            </li>
            <li>
              <span class="ach-icon">◆</span>
              <div>
                <strong>Patente 2</strong>
                <p>Solicitada · <em>Patente secreta</em> (sin nombre ni descripción por confidencialidad).</p>
              </div>
            </li>
          </ul>
        `
      },
      curiosidades: {
        title: "CURIOSIDADES",
        codename: "HIDDEN STATS",
        preview: "Curiosidades sobre mi.",
        content: `
          <div class="stat-grid">
            <div class="stat-card">
              <span class="stat-label">UBICACIÓN</span>
              <span class="stat-value">Vitoria-Gasteiz</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">CENTRO</span>
              <span class="stat-value">TECNALIA · Derio</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">ESPECIALIDAD</span>
              <span class="stat-value">Criptografía Cuántica</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">HERRAMIENTAS</span>
              <span class="stat-value">Qiskit · Python</span>
            </div>
          </div>
          <div class="entry">
            <h3>De la física teórica al qubit</h3>
            <p>«No estudies teóricas, no es aplicable en el mundo real». «Si vas por teóricas te pasarás toda la vida con un papel y boli». Son frases que escuché durante toda mi vida; hoy tengo la suerte de poder «tocar», «observar» y «jugar» con las maravillas de la cuántica.</p>
          </div>
          <div class="entry">
            <h3>Música</h3>
            <p>En 2012 obtengo el Certificado Elemental de música en percusión en el Conservatorio Profesional Jesús Guridi. Percusionista con formación en el conservatorio — el ritmo es mi otro lenguaje.</p>
          </div>
          <div class="entry">
            <h3>Hobbies</h3>
            <p>Mi verdadera pasión es la lectura y los videojuegos; nada me hace más feliz que encontrar una buena historia en la que sumergirme.</p>
          </div>
          <div class="entry">
            <h3>Esta página web</h3>
            <p>El diseño de esta página web está completamente inspirado y es homenaje a una historia que despierta en mi la nostalgia.</p>
          </div>
          <div class="entry">
            <h3>Palabras clave</h3>
            <p>Quantum Computing · Cryptography · Cybersecurity</p>
          </div>
          <div class="entry">
            <h3>Contacto</h3>
            <p>
              <a href="mailto:jonhernandezbueno@gmail.com">jonhernandezbueno@gmail.com</a><br>
              <a href="mailto:jon.hernandez@tecnalia.com">jon.hernandez@tecnalia.com</a><br>
              <a href="https://www.linkedin.com/in/jon-hern%C3%A1ndez-bueno-28467a26a/" target="_blank" rel="noopener">LinkedIn</a> ·
              <a href="https://orcid.org/0009-0009-6640-0983" target="_blank" rel="noopener">ORCID</a>
            </p>
          </div>
        `
      }
    }
  },

  en: {
    loaderTitle: "SYSTEM",
    loaderSub: "Descending into the Sea of Souls...",
    systemLabel: "SYSTEM",
    statRole: "ROLE",
    statArcana: "ARCANA",
    arcanaName: "The Scholar",
    actionSelected: "SELECTED",
    hintScroll: "SCROLL",
    hintBackMenu: "MAIN MENU",
    codename: "PHANTOM SCIENTIST",
    menuTag: "MAIN MENU",
    heroTitle: "PhD Researcher · Quantum Computing Security",
    previewTag: "PREVIEW",
    hintNav: "NAVIGATE",
    hintConfirm: "CONFIRM",
    commandLabel: "Commands",
    hintBack: "CLOSE",
    walletLabel: "current location",
    promptDefault: "Select a command.",
    identityTag: "JON HERNÁNDEZ BUENO - PHYSICIST",
    dsPanelTitle: "LEVEL UP",
    dsPanelEyebrow: "Level Up",
    dsPanelHint: "Select a record to view its content",
    dsCvRecords: "Records",
    dsParameters: "Parameters",
    dsCharName: "Jon Hernández-Bueno",
    dsCharClass: "Physicist · Scholar",
    dsLabelName: "Name",
    dsLabelLevel: "Level",
    dsLabelSouls: "Souls",
    dsStatHP: "HP",
    dsStatEquipLoad: "Equip Load",
    dsStatRightArmour: "Right Armour",
    dsStatStamina: "Stamina",
    dsStatPhysDef: "Physical Def.",
    dsStatMagicDef: "Magic Def.",
    dsStatFlameDef: "Flame Def.",
    dsStatLightningDef: "Lightning Def.",
    dsStatPoisonResist: "Poison Resist",
    dsStatPhysicalAttack: "Physical Attack",
    dsStatMagicAttack: "Magic Attack",
    dsStatRecord: "Record",
    dsStatCodename: "Codename",
    dsStatSummary: "Summary",
    dsAttributes: {
      vitality: "Vitality",
      attunement: "Attunement",
      endurance: "Endurance",
      strength: "Strength",
      dexterity: "Dexterity",
      resistance: "Resistance",
      intelligence: "Intelligence",
      faith: "Faith"
    },
    dsAccept: "ACCEPT",
    dsFooterSelect: "Select",
    dsFooterConfirm: "Open",
    dsFooterExit: "Exit",
    dsFlavors: {
      educacion: "Physical defense forged in labs, lectures and theses.",
      publicaciones: "Magic attack and lightning reaching distant journals.",
      logros: "Crushing blows tempered in the forge of merit.",
      bibliografia: "Endurance and resistance to the poison of oblivion.",
      curiosidades: "Hidden parameters: high flame, enigmatic mind.",
      certificaciones: "Armor stacked, certification upon certification.",
      patentes: "Lightning of innovation scorching the frontier of art."
    },
    settingSfx: "Sound effects",
    menu: {
      educacion: "EDUCATION",
      publicaciones: "PUBLICATIONS",
      logros: "ACHIEVEMENTS",
      bibliografia: "BIBLIOGRAPHY",
      curiosidades: "TRIVIA",
      certificaciones: "CERTIFICATIONS",
      patentes: "PATENTS"
    },
    sections: {
      educacion: {
        title: "EDUCATION",
        codename: "SCHOLAR PATH",
        preview: "Theoretical physicist with a master's in computational mathematics.",
        content: `
          <div class="entry">
            <div class="entry-year">NOV 2024 — PRESENT</div>
            <h3>PhD</h3>
            <p class="entry-place">University of the Basque Country (UPV/EHU) · Leioa, Basque Country</p>
            <p>Quantum cybersecurity. Information technologies, communication and mobile networks. Parallel doctoral research at TECNALIA.</p>
          </div>
          <div class="entry">
            <div class="entry-year">OCT 2023 — JUL 2024</div>
            <h3>Master's in Mathematical Modeling, Statistical, and Computational Research</h3>
            <p class="entry-place">UPV/EHU · Department of Mathematics</p>
            <p><strong>Master's thesis:</strong> "Homomorphic Cryptography: Implementation of Quantum Protocols".</p>
          </div>
          <div class="entry">
            <div class="entry-year">SEP 2015 — JUN 2023</div>
            <h3>Bachelor's in Physics — Fundamental / Theoretical Physics</h3>
            <p class="entry-place">Complutense University of Madrid (UCM)</p>
            <p><strong>Bachelor's thesis:</strong> "Statistical Physics of Unsupervised Learning".</p>
            <p>Teaching internship (Dec 2022 — Jun 2023): Lab sessions and tutoring for 1st-year Physics students.</p>
          </div>
        `
      },
      publicaciones: {
        title: "PUBLICATIONS",
        codename: "RESEARCH ARCHIVE",
        preview: "Published articles.",
        content: `
          <div class="entry">
            <div class="entry-year">2026 · PREPRINT</div>
            <h3>Quantum Homomorphic Encryption: Towards Practical and Private Computation on Untrusted Quantum Hardware</h3>
            <p class="entry-meta">Jon Hernández-Bueno, Oscar Lage, Marivi Higuero, Jasone Astorga · arXiv:2604.19256</p>
            <p>Universal QOTPH framework based on Quantum One-Time Pad. Homomorphic evaluation of Clifford+T circuits on simulators and real IBM Quantum processors.</p>
            <p><a href="https://arxiv.org/abs/2604.19256" target="_blank" rel="noopener">arXiv →</a> · <a href="https://scholar.google.es/citations?view_op=view_citation&hl=es&user=I5vwGuIAAAAJ&citation_for_view=I5vwGuIAAAAJ:qjMakFHDy7sC" target="_blank" rel="noopener">Google Scholar →</a></p>
          </div>
          <div class="entry">
            <div class="entry-year">2026 · BOOK CHAPTER</div>
            <h3>Enhancing Blockchain with Quantum-Safe Verification: A Quantum Fingerprinting Framework</h3>
            <p class="entry-meta">Jon Hernández-Bueno, Oscar Lage, Marivi Higuero, Iñaki Seco-Aguirre, Julen Bernabé-Rodríguez</p>
            <p>Integration of Quantum Fingerprinting as a verification and integrity mechanism for blockchain. Published by Springer.</p>
            <p><a href="https://link.springer.com/chapter/10.1007/978-3-032-05877-5_3" target="_blank" rel="noopener">View publication →</a></p>
          </div>
          <div class="entry">
            <div class="entry-year">2025 · BOOK CHAPTER</div>
            <h3>A True Random Number Generator for Blockchain Wallets Based on Quantum Computation</h3>
            <p class="entry-meta">Jon Hernández-Bueno, Julen Bernabé-Rodríguez, Iñaki Seco-Aguirre, Leire Legarreta</p>
            <p>Q-TRNG and Q-SKG for Ethereum keys and nonces with better entropy than conventional pseudo-random generators.</p>
            <p><a href="https://link.springer.com/chapter/10.1007/978-3-031-81928-5_19" target="_blank" rel="noopener">View publication →</a></p>
          </div>
          <p class="contact-line">
            <a href="https://orcid.org/0009-0009-6640-0983" target="_blank" rel="noopener">ORCID</a> ·
            <a href="https://www.linkedin.com/in/jon-hern%C3%A1ndez-bueno-28467a26a/" target="_blank" rel="noopener">LinkedIn</a> ·
            Scopus: 59703812300
          </p>
        `
      },
      logros: {
        title: "ACHIEVEMENTS",
        codename: "TROPHY CASE",
        preview: "Relevant achievements.",
        content: `
          <ul class="achievement-list">
            <li>
              <span class="ach-icon">★</span>
              <div>
                <strong>Best Paper Award — Blockchain'25</strong>
                <p>7th International Congress on Blockchain and Applications. Université de Lille, July 2025. For "Enhancing Blockchain with Quantum-Safe Verification: A Quantum Fingerprinting Framework".</p>
              </div>
            </li>
            <li>
              <span class="ach-icon">★</span>
              <div>
                <strong>IBM Qiskit Advocate</strong>
                <p>Member of IBM's quantum community advocate program.</p>
              </div>
            </li>
            <li>
              <span class="ach-icon">★</span>
              <div>
                <strong>TECNALIA predoctoral grant</strong>
                <p>Grant No. 112794 · BIKAINTEK program 017-B2/2024.</p>
              </div>
            </li>
          </ul>
        `
      },
      bibliografia: {
        title: "BIBLIOGRAPHY",
        codename: "LIFE ARCHIVE",
        preview: "Professional development over the years.",
        content: `
          <p class="note">My life in dates. Not papers or books: this is me.</p>
          <div class="entry">
            <div class="entry-year">ORIGINS</div>
            <h3>Jon Hernández-Bueno</h3>
            <p>Born in <strong>Vitoria-Gasteiz</strong> on October 30, 1997. I grew up with a passion for science, for learning and understanding how the world works.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2015 — 2023</div>
            <h3>University years in Madrid</h3>
            <p>I begin a Bachelor's in Physics at Complutense University of Madrid (UCM), fundamental and theoretical physics track.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2022 — 2023</div>
            <h3>Teaching at UCM</h3>
            <p>Teaching internship at the Faculty of Physical Sciences: lab sessions and tutoring for first-year students. I also help coordinate high school visits to the faculty.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2023</div>
            <h3>Bachelor's thesis and a new direction</h3>
            <p>I complete my degree with a thesis: "Statistical Physics of Unsupervised Learning". I close the Madrid chapter with a solid foundation in theoretical physics and computing.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2023 — 2024</div>
            <h3>Basque Country: master's and TECNALIA</h3>
            <p>I return to the Basque Country for a Master's in Mathematical Modeling, Statistical, and Computational Research (UPV/EHU, Leioa).</p>
            <p>Master's thesis: "Homomorphic Cryptography: Implementation of Quantum Protocols". In parallel, research internship at TECNALIA (Bilbao) in the same field.</p>
          </div>
          <div class="entry">
            <div class="entry-year">2024 — TODAY</div>
            <h3>Doctoral researcher</h3>
            <p>I start my PhD at UPV/EHU and a PhD Researcher position at TECNALIA (Cybersecurity &amp; Blockchain team). I research quantum computing security, blockchain, and applied cryptography.</p>
          </div>
          <div class="entry highlight">
            <p><strong>Today:</strong> PhD student between Derio and Leioa, physicist by training, quantum cryptographer by profession.</p>
          </div>
        `
      },
      certificaciones: {
        title: "CERTIFICATIONS",
        codename: "SKILL TREE",
        preview: "Certifications acquired.",
        content: `
          <p class="note">Every license and certification on my <a href="https://www.linkedin.com/in/jon-hern%C3%A1ndez-bueno-28467a26a/" target="_blank" rel="noopener">LinkedIn</a> (62 total).</p>
          <ul class="cert-list">
            <li class="cert-item">
              <span class="cert-rank">01</span>
              <div>
                <h3>Qiskit Advocate</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">September 2025</p>
                <p class="cert-skills">Quantum computing</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">02</span>
              <div>
                <h3>Qiskit Global Summer School 2025 — Quantum Excellence</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">August 2025</p>
                <p class="cert-skills">Quantum computing</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">03</span>
              <div>
                <h3>Gestor en Ciberseguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">04</span>
              <div>
                <h3>Gestión en ciberseguridad: Gestión de incidentes</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">05</span>
              <div>
                <h3>Gestión en ciberseguridad: Desarrollo del programa de seguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">06</span>
              <div>
                <h3>Gestión en ciberseguridad: Gestión de proyectos de seguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">07</span>
              <div>
                <h3>Gestión en ciberseguridad: Gestión de riesgos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Risk management</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">08</span>
              <div>
                <h3>Gestión en ciberseguridad: Gobierno de seguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">09</span>
              <div>
                <h3>Gestión en ciberseguridad: Conviértete en Cybersecurity Manager</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">10</span>
              <div>
                <h3>Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">11</span>
              <div>
                <h3>Curso de FinTech: Revolucionando las finanzas</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Blockchain, FinTech</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">12</span>
              <div>
                <h3>Futuro de Smart Contracts y Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Smart Contracts, Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">13</span>
              <div>
                <h3>Curso Empresas que utilizan Smart Contracts</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Smart Contracts</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">14</span>
              <div>
                <h3>Curso de introducción a Hyperledger Besu</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Hyperledger</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">15</span>
              <div>
                <h3>Curso de Hyperledger Fabric</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Hyperledger</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">16</span>
              <div>
                <h3>Curso Mi primera Dapp</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Smart Contracts, Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">17</span>
              <div>
                <h3>Curso Aplicaciones prácticas de los Smart Contracts sobre Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Smart Contracts, Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">18</span>
              <div>
                <h3>Curso de Smart Contracts y Solidity</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">May 2025</p>
                <p class="cert-skills">Smart Contracts, Solidity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">19</span>
              <div>
                <h3>Curso de Ethereum desde cero</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Blockchain, Ethereum</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">20</span>
              <div>
                <h3>Herramientas y tecnologías para ser desarrollador Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">21</span>
              <div>
                <h3>Ecosistema Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">22</span>
              <div>
                <h3>Curso de Introducción a Blockchain</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Blockchain</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">23</span>
              <div>
                <h3>Esquema Nacional de Seguridad (ENS): Fundamentos e implementación</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Esquema Nacional de Seguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">24</span>
              <div>
                <h3>Esquema Nacional de Seguridad (ENS): Implementación y Herramientas</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Esquema Nacional de Seguridad</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">25</span>
              <div>
                <h3>Seguridad de la información y protección de datos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Information security, Data protection</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">26</span>
              <div>
                <h3>Curso avanzado en Protección de datos y Seguridad de la información</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Information security, Data protection</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">27</span>
              <div>
                <h3>Protección de datos y Seguridad de la información</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Data protection, Information security</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">28</span>
              <div>
                <h3>Fundamentos Legales de la Ciberseguridad y Protección de Datos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Data protection</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">29</span>
              <div>
                <h3>Ciberseguridad en la Empresa</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">30</span>
              <div>
                <h3>Introducción al Esquema Nacional de Seguridad (ENS)</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">31</span>
              <div>
                <h3>Curso de desarrollo seguro</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">32</span>
              <div>
                <h3>Curso de Triage informático</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">33</span>
              <div>
                <h3>Curso de Seguridad de red en el ámbito corporativo: Capas 3 y 7 del modelo OSI</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">34</span>
              <div>
                <h3>Curso de Seguridad de red en el ámbito corporativo: Capa 2 del modelo OSI</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">35</span>
              <div>
                <h3>Curso de análisis y gestión del riesgo</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Risk analysis</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">36</span>
              <div>
                <h3>Criptografía Simétrica y Asimétrica en la práctica</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Cryptography</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">37</span>
              <div>
                <h3>OSINT para fuga de datos empresariales</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">38</span>
              <div>
                <h3>Especialista en Hacking Ético</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">39</span>
              <div>
                <h3>Autopsy: Recuperación de datos</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">40</span>
              <div>
                <h3>Metasploit para pentesting</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">41</span>
              <div>
                <h3>Herramientas avanzadas para búsquedas OSINT</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">42</span>
              <div>
                <h3>Curso OSINT: Técnicas de investigación e inteligencia en fuentes abiertas</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">43</span>
              <div>
                <h3>Análisis forense avanzado en sistemas Linux</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">44</span>
              <div>
                <h3>Análisis forense básico en sistemas Linux</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">45</span>
              <div>
                <h3>Análisis forense avanzado en sistemas Windows</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">46</span>
              <div>
                <h3>Análisis forense básico en sistemas Windows</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">47</span>
              <div>
                <h3>Curso de Hacking web</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">April 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">48</span>
              <div>
                <h3>Onboarding en Ciberseguridad</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">March 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">49</span>
              <div>
                <h3>Curso de Hacking Tools & Forensic: Red Team</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">March 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">50</span>
              <div>
                <h3>Curso de Hacking Tools: Blue Team</h3>
                <p class="cert-issuer">OpenWebinars</p>
                <p class="cert-date">March 2025</p>
                <p class="cert-skills">Cybersecurity, Programming</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">51</span>
              <div>
                <h3>Quantum Business Foundations</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">November 2024</p>
                <p class="cert-skills">Quantum computing</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">52</span>
              <div>
                <h3>Certificado oficial EF SET 76/100 (C2 Proficient)</h3>
                <p class="cert-issuer">EF SET</p>
                <p class="cert-date">October 2024</p>
                <p class="cert-skills">English</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">53</span>
              <div>
                <h3>IBM Quantum Challenge 2024 Achievement</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">June 2024</p>
                <p class="cert-skills">Quantum computing</p><p><a href="https://credly.com/badges/199d75df-551c-49cd-85e0-eb58cc5ffeb2/linked_in_profile" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">54</span>
              <div>
                <h3>Variational Algorithm Design</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">June 2024</p>
                <p class="cert-skills">Quantum computing</p><p><a href="https://credly.com/badges/34315129-e9a3-4aab-98a0-b07038293813/linked_in_profile" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">55</span>
              <div>
                <h3>edX Verified Certificate for Introduction to Quantum Computing</h3>
                <p class="cert-issuer">edX</p>
                <p class="cert-date">April 2024</p>
                <p class="cert-skills">Quantum computing</p><p class="cert-id">ID: 0e8a887eb3f94484a122202d6fd4823c</p><p><a href="https://courses.edx.org/certificates/0e8a887eb3f94484a122202d6fd4823c" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">56</span>
              <div>
                <h3>Practical Introduction to Quantum-Safe Cryptography</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">February 2024</p>
                <p class="cert-skills">Cryptography, Quantum computing</p><p><a href="https://credly.com/badges/ec273eb0-4426-46a7-867e-0565d4a57831/linked_in_profile" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">57</span>
              <div>
                <h3>Basics of Quantum Information</h3>
                <p class="cert-issuer">IBM</p>
                <p class="cert-date">February 2024</p>
                <p class="cert-skills">Quantum computing, Quantum information</p><p><a href="https://credly.com/badges/eaefb830-01fd-4290-afff-51e9538578ec/linked_in_profile" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">58</span>
              <div>
                <h3>edX Verified Certificate for Visualizing Data with Python</h3>
                <p class="cert-issuer">edX</p>
                <p class="cert-date">June 2023</p>
                <p class="cert-skills">Data visualization, Data science</p><p class="cert-id">ID: 7253538f8e074959af27e4d419c91306</p><p><a href="https://courses.edx.org/certificates/7253538f8e074959af27e4d419c91306" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">59</span>
              <div>
                <h3>edX Verified Certificate for Machine Learning with Python: A Practical Introduction</h3>
                <p class="cert-issuer">edX</p>
                <p class="cert-date">January 2023</p>
                <p class="cert-skills">Supervised learning, Data science</p><p class="cert-id">ID: bd42e18ef0f3495aaafee95547e16cf1</p><p><a href="https://courses.edx.org/certificates/bd42e18ef0f3495aaafee95547e16cf1" target="_blank" rel="noopener">View credential →</a></p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">60</span>
              <div>
                <h3>Aplicaciones de la inteligencia artificial en Ciencias</h3>
                <p class="cert-issuer">Universidad Complutense de Madrid</p>
                <p class="cert-date">February 2021</p>
                <p class="cert-skills">Physics, Programming</p><p class="cert-id">ID: ES_U01000001_2021_EXP_046813</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">61</span>
              <div>
                <h3>Permiso de conducción B</h3>
                <p class="cert-issuer">Dirección General de Tráfico (DGT)</p>
                <p class="cert-date">November 2021</p>
                <p class="cert-skills">Driving</p>
              </div>
            </li>
            <li class="cert-item">
              <span class="cert-rank">62</span>
              <div>
                <h3>Certificado Elemental de música en la especialidad de percusión</h3>
                <p class="cert-issuer">Conservatorio profesional de música Jesús Guridi</p>
                <p class="cert-date">November 2012</p>
                <p class="cert-skills">Music, Percussion</p>
              </div>
            </li>
          </ul>
        `
      },
      patentes: {
        title: "PATENTS",
        codename: "PATENT FILE",
        preview: "Patents developed as lead author.",
        content: `
          <ul class="achievement-list">
            <li>
              <span class="ach-icon">◆</span>
              <div>
                <strong>Patent 1</strong>
                <p>Filed · <em>Classified patent</em> (no title or description due to confidentiality).</p>
              </div>
            </li>
            <li>
              <span class="ach-icon">◆</span>
              <div>
                <strong>Patent 2</strong>
                <p>Filed · <em>Classified patent</em> (no title or description due to confidentiality).</p>
              </div>
            </li>
          </ul>
        `
      },
      curiosidades: {
        title: "TRIVIA",
        codename: "HIDDEN STATS",
        preview: "Curiosities about me.",
        content: `
          <div class="stat-grid">
            <div class="stat-card">
              <span class="stat-label">LOCATION</span>
              <span class="stat-value">Vitoria-Gasteiz</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">INSTITUTE</span>
              <span class="stat-value">TECNALIA · Derio</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">FOCUS</span>
              <span class="stat-value">Quantum Cryptography</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">TOOLS</span>
              <span class="stat-value">Qiskit · Python</span>
            </div>
          </div>
          <div class="entry">
            <h3>From theoretical physics to the qubit</h3>
            <p>"Don't study theory, it's not applicable in the real world." "If you go theoretical, you'll spend your whole life with paper and pen." I heard these phrases throughout my life; today I'm fortunate enough to "touch," "observe," and "play" with the wonders of quantum mechanics.</p>
          </div>
          <div class="entry">
            <h3>Music</h3>
            <p>In 2012 I earned the Elementary Music Certificate in percussion at Jesús Guridi Professional Conservatory. A percussionist trained at the conservatory — rhythm is my other language.</p>
          </div>
          <div class="entry">
            <h3>Hobbies</h3>
            <p>My true passions are reading and video games; nothing makes me happier than finding a good story to immerse myself in.</p>
          </div>
          <div class="entry">
            <h3>This website</h3>
            <p>The design of this website is fully inspired by and pays tribute to a story that fills me with nostalgia.</p>
          </div>
          <div class="entry">
            <h3>Keywords</h3>
            <p>Quantum Computing · Cryptography · Cybersecurity</p>
          </div>
          <div class="entry">
            <h3>Contact</h3>
            <p>
              <a href="mailto:jonhernandezbueno@gmail.com">jonhernandezbueno@gmail.com</a><br>
              <a href="mailto:jon.hernandez@tecnalia.com">jon.hernandez@tecnalia.com</a><br>
              <a href="https://www.linkedin.com/in/jon-hern%C3%A1ndez-bueno-28467a26a/" target="_blank" rel="noopener">LinkedIn</a> ·
              <a href="https://orcid.org/0009-0009-6640-0983" target="_blank" rel="noopener">ORCID</a>
            </p>
          </div>
        `
      }
    }
  }
};

// Experiencia laboral (añadida a educación vía helper en script si se quiere panel aparte)
const EXPERIENCE = {
  es: `
    <div class="entry">
      <div class="entry-year">NOV 2024 — PRESENTE</div>
      <h3>Investigador Doctoral (PhD Researcher)</h3>
      <p class="entry-place">TECNALIA Research &amp; Innovation · Equipo Ciberseguridad &amp; Blockchain</p>
      <p>Investigación en computación cuántica aplicada a ciberseguridad.</p>
    </div>
    <div class="entry">
      <div class="entry-year">NOV 2023 — JUL 2024</div>
      <h3>Prácticas de investigación</h3>
      <p class="entry-place">TECNALIA · Bilbao</p>
      <p>Proyecto: Criptografía homomórfica — implementación de protocolos cuánticos.</p>
    </div>
  `,
  en: `
    <div class="entry">
      <div class="entry-year">NOV 2024 — PRESENT</div>
      <h3>PhD Researcher</h3>
      <p class="entry-place">TECNALIA Research &amp; Innovation · Cybersecurity &amp; Blockchain Team</p>
      <p>Research in quantum computing applied to cybersecurity.</p>
    </div>
    <div class="entry">
      <div class="entry-year">NOV 2023 — JUL 2024</div>
      <h3>Research Internship</h3>
      <p class="entry-place">TECNALIA · Bilbao</p>
      <p>Project: Homomorphic Cryptography — implementation of quantum protocols.</p>
    </div>
  `
};

// Inyectar experiencia en sección educación
['es', 'en'].forEach((lang) => {
  const hdr = lang === 'es'
    ? '<h3 class="section-sub">EXPERIENCIA LABORAL</h3>'
    : '<h3 class="section-sub">WORK EXPERIENCE</h3>';
  I18N[lang].sections.educacion.content += hdr + EXPERIENCE[lang];
});
