const baseURL = process.env.PUBLIC_URL;

const portfolio = [
    {
        id: "cerros-orientales",
        title: "Cerros Orientales de Bogotá",
        primary_img: `${baseURL}/images/cerros-orientales-primary.PNG`,
        carousel_img: `${baseURL}/images/cerros-orientales-primary-resize.PNG`,
        secondary_img: `${baseURL}/images/cerros-orientales-secondary.JPG`,
        location: "Bogotá",
        desciption: "Estructuración y planteamiento del modelo de operación del “Proyecto Sendero de Las Mariposas”,  Corporación Autónoma Regional de Cundinamarca – CAR. Uso Público de Cerros Orientales. Desarrollo realizado para el “Consorcio Sendero Las Mariposas 2017” (HMV Consultoría – WSP Consultoría – Concol).",
        area: "24,000 sq. ft.",
        date: "Años 2018 - 2019",
        budget: "570,000"
    },
    {
        id: "corredor-ambiental",
        title: "Corredor Ambiental del Río Arzobispo",
        primary_img: `${baseURL}/images/corredor-ambiental-primary.PNG`,
        carousel_img: `${baseURL}/images/corredor-ambiental-secondary-resize.JPG`,
        secondary_img: `${baseURL}/images/corredor-ambiental-secondary.JPG`,
        location: "Bogotá",
        desciption: "Estructuración y planteamiento del modelo de operación para el proyecto “Paseo del Río Arzobispo - Un corredor para la vida”  de la Empresa de Acueducto y Alcantarillado de Bogotá - EAAB ESP, para el “Consorcio DARP 2017”.",
        area: "24,000 sq. ft.",
        date: "Año 2019",
        budget: "570,000"
    },
    {
        id: "río-bogotá",
        title: "Río Bogotá",
        primary_img: `${baseURL}/images/rio-bogota-primary.PNG`,
        carousel_img: `${baseURL}/images/rio-bogota-primary-resize.PNG`,
        secondary_img: `${baseURL}/images/rio-bogota-secondary.PNG`,
        location: "Bogotá",
        desciption: "Elaboración de los estudios de capacidad de carga para los componentes terrestre y fluvial del proyecto “Parque Lineal del Río Bogotá” de la Secretaría Distrital de Planeación, para el “Consorcio Río Bogotá 2019” (HMV Consultoría – HMV Proyectos – WSP Consultoría).",
        area: "24,000 sq. ft.",
        date: "Año 2020",
        budget: "570,000"
    },
    {
        id: "senderos-quebrada-las-delicias",
        title: "Senderos Quebrada Las Delicias y Cerro Guadalupe - Aguanoso",
        primary_img: `${baseURL}/images/senderos-quebrada-primary.JPG`,
        carousel_img: `${baseURL}/images/senderos-quebrada-secondary-resize.JPG`,
        secondary_img: `${baseURL}/images/senderos-quebrada-secondary.JPG`,
        location: "Bogotá",
        desciption: "Elaboración de los “Planes de Desarrollo Ecoturístico y de Gestión Socioambiental para cada sendero” Secretaría Distrital de Ambiente - SDA, la Empresa de Acueducto y Alcantarillado de Bogotá - EAAB ESP, el Instituto Distrital de Turismo - IDT y Aguas Bogotá SA ESP. Desarrollo llevado a cabo con la empresa Ecosimple SAS.",
        area: "24,000 sq. ft.",
        date: "Años 2019 – 2020",
        budget: "570,000"
    },
    {
        id: "embalse-del-neusa",
        title: "Embalse del Neusa, Tausa",
        primary_img: `${baseURL}/images/embalse-del-neusa-primary.JPG`,
        carousel_img: `${baseURL}/images/embalse-del-neusa-primary-resize.JPG`,
        secondary_img: `${baseURL}/images/Trayectoria_Embalse_del_Neusa_Cogua_ Cundinamarca_3.JPG`,
        location: "Cundinamarca",
        desciption: "Diseñar el Plan de Fortalecimiento y Gestión Ecoturística para Destinos de Naturaleza - Guacatá Ecotravel Experience, municipio de Tausa y municipios con vocación turística de su entorno cercano, para el disfrute de la naturaleza y el patrimonio histórico, ambiental y cultural de la regió. Ecoplanet Solutions SAS.",
        area: "24,000 sq. ft.",
        date: "Años 2020 – 2022",
        budget: "570,000"
    },
    {
        id: "la-guajira",
        title: "La Guajira",
        primary_img: `${baseURL}/images/la-guajira-primary.JPG`,
        carousel_img: `${baseURL}/images/la-guajira-primary-resize.JPG`,
        secondary_img: ``,
        location: "Nariño",
        desciption: "Dibulla (sendero del río Palomino), San Juan del Cesar (Totumo), Manaure (playa Mayapo), Riohacha y Uribia (Cabo de La Vela - Pilón de Azúcar. Nariño:  Sandoná, Cumbal (Volcán Cumbal), Ipiales (Santuario de Las Lajas), Pasto (Laguna de La Cocha) y Tumaco (Playa del Morro). Proyectos de Reactivación Turística. Formulación y planteamiento de la puesta en marcha de los  Protocolos de Uso y Seguridad. Ciclos de capacitación en operación, sostenibilidad y negocios verdes. Grupo Empresarial - GEAM Consultores.",
        area: "24,000 sq. ft.",
        date: "Años 2021 - 2022",
        budget: "570,000"
    },
    {
        id: "red-de-miradores-de-flora",
        title: "Red de Miradores de Flora y Fauna de Nariño",
        primary_img: `${baseURL}/images/Trayectoria_Red_de_Miradores_de_Flora_y_Fauna_de_Nariño_2.JPG`,
        carousel_img: `${baseURL}/images/red-de-miradores-primary-resize.PNG`,
        secondary_img: `${baseURL}/images/Trayectoria_Red_de_Miradores_de_Flora_y_Fauna_de_Nariño_1.JPG`,
        location: "Flora",
        desciption: "Fortalecimiento del Turismo de Naturaleza. 4 Lugares priorizados: Laguna de La Cocha, Laguna de la Bolsa – Reserva Natural de Los Capotes, Tumaco - Isla Bocagrande y Reserva Natural Río Ñambí. Diseños, formulación del Plan Maestro y estructuración del proyecto para acceder a los recursos de inversión nacional (Sistema General de Regalías - SGR | Fase III) y otras fuentes de financiamiento.  Gobernación de Nariño|Instituto Global para el Crecimiento Verde – GGGI – Reino de Noruega.",
        area: "24,000 sq. ft.",
        date: "Años 2021 – 2022",
        budget: "570,000"
    },
    {
        id: "salto-del-tequendama",
        title: "Salto del Tequendama, Soacha | Cundinamarca",
        primary_img: `${baseURL}/images/salto-del-tequendama-primary.JPG`,
        carousel_img: `${baseURL}/images/salto-del-tequendama-secondary-resize.JPG`,
        secondary_img: `${baseURL}/images/salto-del-tequendama-secondary.JPG`,
        location: "Cundinamarca",
        desciption: "Elaboración de los estudios de capacidad de carga del puente peatonal y demás áreas de espacios logísticos complementarios, proyecto “Jardines Colgantes del Tequendama” del municipio de Soacha. Taller Arquitectos.",
        area: "24,000 sq. ft.",
        date: "Año 2022",
        budget: "570,000"
    },
    {
        id: "pasto-nariño",
        title: "Pasto | Nariño",
        primary_img: `${baseURL}/images/pasto-narino-primary.JPG`,
        carousel_img: `${baseURL}/images/pasto-narino-primary-resize.JPG`,
        secondary_img: `${baseURL}/images/pasto-narino-secondary.JPG`,
        location: "Nariño",
        desciption: "Acompañamiento para la formalización empresarial ante la Cámara de Comercio de Pasto de 8 organizaciones con vocación de turismo comunitario, quienes se constituyeron como Prestadores de Servicios Turísticos - PST, obteniendo el Registro Nacional de Turismo – RNT en el marco del Plan de Fortalecimiento de las actividades de la Mesa Intersectorial de Turismo de Pasto y la promoción de iniciativas de turismo comunitario en la región. PDT Nariño y Subsecretaría de Turismo Alcaldía de Pasto.",
        area: "24,000 sq. ft.",
        date: "Año 2022",
        budget: "570,000"
    },
    {
        id: "Ruta del Barniz de Pasto Mopa-Mopa",
        title: "Ruta del Barniz de Pasto Mopa-Mopa | Nariño",
        primary_img: `${baseURL}/images/Mapa_Tres_Rutas_del_Barniz_2.jpg`,
        carousel_img: `${baseURL}/images/Mapa_Tres_Rutas_del_Barniz_2.jpg`,
        secondary_img: `${baseURL}/images/Mapa_Tres_Rutas_del_Barniz.jpg`,
        location: "Nariño",
        desciption: "Fortalecimiento de los Maestros Artesanos del Barniz de Pasto - Mopa Mopa, mediante el diseño y puesta en marcha de la experiencia turística en el marco de la ejecución del Proyecto de Desarrollo Territorial en Condiciones de Paz. Diseño de portafolio, mapa y otros materiales POP. PDT Nariño y Secretaría de Cultura de la Alcaldía de Pasto.",
        area: "24,000 sq. ft.",
        date: "Año 2023",
        budget: "570,000"
    },
    {
        id: "Plan Maestro Turismo Cafetero Cañón del Juanambú Buesaco",
        title: "Plan Maestro Turismo Cafetero Cañón del Juanambú Buesaco | Nariño",
        primary_img: `${baseURL}/images/Plan Maestro Turismo Cafetero Cañón del Juanambú Buesaco.jpg`,
        carousel_img: `${baseURL}/images/Plan Maestro Turismo Cafetero Cañón del Juanambú Buesaco_3.jpg`,
        secondary_img: `${baseURL}/images/Plan Maestro Turismo Cafetero Cañón del Juanambú Buesaco_2.jpg`,
        location: "Nariño",
        desciption: "Formulación del plan maestro para viabilizar el desarrollo del turismo cafetero en el Cañón del Juanambú. Diseño arquitectónico del Centro de Experiencia del Café Especial de Nariño. En consorcio con Aurica. Instituto Global para el Crecimiento Verde – GGGI – Reino de Noruega – Comfamiliar Nariño.",
        area: "24,000 sq. ft.",
        date: "Año 2023",
        budget: "570,000"
    },
    {
        id: "Parque La Sauceda Hermosillo",
        title: "Parque La Sauceda Hermosillo | Estado de Sonora México",
        primary_img: `${baseURL}/images/Parque La Sauceda Hermosillo.jpg`,
        carousel_img: `${baseURL}/images/Parque La Sauceda Hermosillo_3.jpg`,
        secondary_img: `${baseURL}/images/Parque La Sauceda Hermosillo_2.jpg`,
        location: "Sonora",
        desciption: "Formulación del estudio de operación sostenible para el proyecto de renovación del Parque La Sauceda.  Secretaría de Infraestructura y Desarrollo Urbano del Estado de Sonora – Arimeci Consultoría – Tezontle Arquitectos.",
        area: "24,000 sq. ft.",
        date: "Año 2023",
        budget: "570,000"
    },
    {
        id: "Productividad Verde",
        title: "Productividad Verde | Tolima - Bolívar - Boyacá",
        primary_img: `${baseURL}/images/Productividad Verde.jpeg`,
        carousel_img: `${baseURL}/images/Productividad Verde.jpeg`,
        secondary_img: `${baseURL}/images/Productividad Verde.jpeg`,
        location: "Boyacá",
        desciption: "Acompañamiento en el componente de asistencia técnica para mejorar la productividad y competitividad de las empresas (prestadores  de servicios turísticos), buscando el fortalecimiento desde la promoción de acciones que aumenten la capacidad del sector industrial en adaptación y mitigación al cambio climático y bioeconomía. Ibagué, Cartagena y Sogamoso. Consorcio Idom Ecosimple - Colombia Productiva.",
        area: "24,000 sq. ft.",
        date: "Año 2023",
        budget: "570,000"
    },
    {
        id: "Parque Aventura La Chorrera",
        title: "Parque Aventura La Chorrera | Choachí - Cundinamarca",
        primary_img: `${baseURL}/images/Parque Aventura La Chorrera_3.jpg`,
        carousel_img: `${baseURL}/images/Parque Aventura La Chorrera.jpg`,
        secondary_img: `${baseURL}/images/Parque Aventura La Chorrera_2.jpg`,
        location: "Cundinamarca",
        desciption: "Realizar el Estudio de Capacidad de Carga del sendero del Parque Aventura La Chorrera, con el fin de promover el desarrollo ecoturístico en la zona y mejorar las condiciones que contribuyan a alcanzar un mejor manejo de este escenario natural con un alto reconocimiento a nivel nacional. Parque Aventura La Chorrera SAS.",
        area: "24,000 sq. ft.",
        date: "Año 2024",
        budget: "570,000"
    },
    {
        id: "Habitación de Hotel",
        title: "Habitación de Hotel | Economía Circular",
        primary_img: `${baseURL}/images/Habitación de Hotel_3.jpg`,
        carousel_img: `${baseURL}/images/Habitación de Hotel.jpg`,
        secondary_img: `${baseURL}/images/Habitación de Hotel_2.jpg`,
        location: "Nacional",
        desciption: "Desarrollar e implementar un concepto para el diseño de habitaciones de hotel según criterios circulares. GIZ - Cooperación Alemana para el Desarrollo en Colombia | ProUSAR. En consorcio con Waste To Worth LATAM. En desarrolloDesarrollar e implementar un concepto para el diseño de habitaciones de hotel según criterios circulares. GIZ - Cooperación Alemana para el Desarrollo en Colombia | ProUSAR. En consorcio con Waste To Worth LATAM. En desarrolloDesarrollar e implementar un concepto para el diseño de habitaciones de hotel según criterios circulares. GIZ - Cooperación Alemana para el Desarrollo en Colombia | ProUSAR. En consorcio con Waste To Worth LATAM. En desarrollo",
        area: "24,000 sq. ft.",
        date: "Año 2024",
        budget: "570,000"
    }
];

export { portfolio };