const baseURL = process.env.PUBLIC_URL;

const portfolio = [
    {
        id: "cerros-orientales",
        title: "Cerros Orientales de Bogotá",
        primary_img: `${baseURL}/images/cerros-orientales-primary.PNG`,
        secondary_img: `${baseURL}/images/cerros-orientales-secondary.JPG`,
        location: "Bogotá",
        desciption: "Estructuración y planteamiento del modelo de operación del “Proyecto Sendero de Las Mariposas”,  Corporación Autónoma Regional de Cundinamarca – CAR. Uso Público de Cerros Orientales. Desarrollo realizado para el “Consorcio Sendero Las Mariposas 2017” (HMV Consultoría – WSP Consultoría – Concol). Años 2018 - 2019."
    },
    {
        id: "corredor-ambiental",
        title: "Corredor Ambiental del Río Arzobispo",
        primary_img: `${baseURL}/images/corredor-ambiental-primary.PNG`,
        secondary_img: `${baseURL}/images/corredor-ambiental-secondary.JPG`,
        location: "Bogotá",
        desciption: "Estructuración y planteamiento del modelo de operación para el proyecto “Paseo del Río Arzobispo - Un corredor para la vida”  de la Empresa de Acueducto y Alcantarillado de Bogotá - EAAB ESP, para el “Consorcio DARP 2017”. Año 2019."
    },
    {
        id: "río-bogotá",
        title: "Río Bogotá",
        primary_img: `${baseURL}/images/rio-bogota-primary.PNG`,
        secondary_img: `${baseURL}/images/rio-bogota-secondary.PNG`,
        location: "Bogotá",
        desciption: "Elaboración de los estudios de capacidad de carga para los componentes terrestre y fluvial del proyecto “Parque Lineal del Río Bogotá” de la Secretaría Distrital de Planeación, para el “Consorcio Río Bogotá 2019” (HMV Consultoría – HMV Proyectos – WSP Consultoría). Año 2020."
    },
    {
        id: "senderos-quebrada-las-delicias",
        title: "Senderos Quebrada Las Delicias y Cerro Guadalupe - Aguanoso",
        primary_img: `${baseURL}/images/senderos-quebrada-primary.JPG`,
        secondary_img: `${baseURL}/images/senderos-quebrada-secondary.JPG`,
        location: "Bogotá",
        desciption: "Elaboración de los “Planes de Desarrollo Ecoturístico y de Gestión Socioambiental para cada sendero”  Secretaría Distrital de Ambiente - SDA, la Empresa de Acueducto y Alcantarillado de Bogotá - EAAB ESP, el Instituto Distrital de Turismo - IDT y Aguas Bogotá SA ESP. Desarrollo llevado a cabo con la empresa Ecosimple SAS. Años 2019 – 2020."
    },
    {
        id: "embalse-del-neusa",
        title: "Embalse del Neusa, Cogua",
        primary_img: `${baseURL}/images/embalse-del-neusa-primary.JPG`,
        secondary_img: `${baseURL}/images/embalse-del-neusa-secondary.JPG`,
        location: "Cundinamarca",
        desciption: "Diseñar el Plan de Fortalecimiento y Gestión Ecoturística para Destinos de Naturaleza - Guacatá Ecotravel Experience, municipio de Tausa y municipios con vocación turística de su entorno cercano, para el disfrute de la naturaleza y el patrimonio histórico, ambiental y cultural de la regió. Ecoplanet Solutions SAS. Años 2020 – 2021 – 2022."
    },
    {
        id: "la-guajira",
        title: "La Guajira",
        primary_img: `${baseURL}/images/la-guajira-primary.JPG`,
        secondary_img: ``,
        location: "Nariño",
        desciption: "Dibulla (sendero del río Palomino), San Juan del Cesar (Totumo), Manaure (playa Mayapo), Riohacha y Uribia (Cabo de La Vela - Pilón de Azúcar. Nariño:  Sandoná, Cumbal (Volcán Cumbal), Ipiales (Santuario de Las Lajas), Pasto (Laguna de La Cocha) y Tumaco (Playa del Morro). Proyectos de Reactivación Turística. Formulación y planteamiento de la puesta en marcha de los  Protocolos de Uso y Seguridad. Ciclos de capacitación en operación, sostenibilidad y negocios verdes. Grupo Empresarial - GEAM Consultores. Años 2021 - 2022."
    },
    {
        id: "red-de-miradores-de-flora",
        title: "Red de Miradores de Flora y Fauna de Nariño",
        primary_img: `${baseURL}/images/red-de-miradores-primary.PNG`,
        secondary_img: `${baseURL}/images/red-de-miradores-secondary.PNG`,
        location: "Flora",
        desciption: "Fortalecimiento del Turismo de Naturaleza. 4 Lugares priorizados: Laguna de La Cocha, Laguna de la Bolsa – Reserva Natural de Los Capotes, Tumaco - Isla Bocagrande y Reserva Natural Río Ñambí. Diseños, formulación del Plan Maestro y estructuración del proyecto para acceder a los recursos de inversión nacional (Sistema General de Regalías - SGR | Fase III) y otras fuentes de financiamiento.  Gobernación de Nariño|Instituto Global para el Crecimiento Verde – GGGI – Reino de Noruega. Años 2021 – 2022."
    },
    {
        id: "salto-del-tequendama",
        title: "Salto del Tequendama, Soacha | Cundinamarca",
        primary_img: `${baseURL}/images/salto-del-tequendama-primary.JPG`,
        secondary_img: `${baseURL}/images/salto-del-tequendama-secondary.JPG`,
        location: "Cundinamarca",
        desciption: "Elaboración de los estudios de capacidad de carga del puente peatonal y demás áreas de espacios logísticos complementarios, proyecto “Jardines Colgantes del Tequendama” del municipio de Soacha. Taller Arquitectos. Año 2022."
    },
    {
        id: "pasto-nariño",
        title: "Pasto | Nariño",
        primary_img: `${baseURL}/images/pasto-narino-primary.JPG`,
        secondary_img: `${baseURL}/images/pasto-narino-secondary.JPG`,
        location: "Nariño",
        desciption: "Acompañamiento para la formalización empresarial ante la Cámara de Comercio de Pasto de 8 organizaciones con vocación de turismo comunitario, quienes se constituyeron como Prestadores de Servicios Turísticos - PST, obteniendo el Registro Nacional de Turismo – RNT en el marco del Plan de Fortalecimiento de las actividades de la Mesa Intersectorial de Turismo de Pasto y la promoción de iniciativas de turismo comunitario en la región. PDT Nariño y Subsecretaría de Turismo Alcaldía de Pasto. Año 2022."
    }
];


export { portfolio };