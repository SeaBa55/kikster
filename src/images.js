const baseURL = process.env.PUBLIC_URL;

const images = [
    {
        title: "pexels-1",
        url: `${baseURL}/images/pexels-diego-gonzalez.jpg`
    },
    {
        title: "pexels-2",
        url: `${baseURL}/images/pexels-juan-rojas.jpg`
    },
    {
        title: "pexels-3",
        url: `${baseURL}/images/pexels-leticia-azevedo.jpg`
    },
    {
        title: "pexels-4",
        url: `${baseURL}/images/pexels-santiago-boada.jpg`
    },
    {
        title: "pexels-5",
        url: `${baseURL}/images/pexels-valentina-diaz.jpg`
    },
    {
        title: "pexels-6",
        url: `${baseURL}/images/pexels-akos-helgert.jpg`
    },
    {
        title: "pexels-7",
        url: `${baseURL}/images/pexels-nick-wehrli.jpg`
    },
    {
        title: "pexels-8",
        url: `${baseURL}/images/pexels-osmany-mederos.jpg`
    },
];

const jumbotron = [
    { 
        title: "jumbotronDefault",
        url: `${baseURL}/images/IMG_8208.JPG`
    }
];

const homeImages = [
    {
        title:"victory-pose",
        url:`${baseURL}/images/Cómo_lo_hacemos.PNG`
    },
    {
        title:"lake-dock",
        url:`${baseURL}/images/Por_qué_estamos_aquí.PNG`
    },
    {
        title:"group-hiking",
        url:`${baseURL}/images/Hacia_donde_vamos.PNG`
    },
    {
        title:"sight-sign",
        url:`${baseURL}/images/Hacia_donde_vamos - Mirador De La Virgen.PNG`
    },
    {
        title: "Group-meeting",
        url:`${baseURL}/images/Nuestra_gente.PNG`
    },
    {
        title: "Structure-overseeing-ocean",
        url:`${baseURL}/images/Áreas_de_trabajo.PNG`
    }
];

const portfolioImages = [
    {
        title:"kite-surf",
        url:`${baseURL}/images/IMG_5691-min.JPG`
    },
    {
        title:"team-photo",
        url:`${baseURL}/images/f22d7d69-2c5e-41ab-bff9-a35076d2f0bc-min.jpg`
    },
    {
        title:"mujer-sombrero",
        url:`${baseURL}/images/IMG_5131-min.JPG`
    },
    {
        title:"local-entreprenuers",
        url:`${baseURL}/images/12A6031E-01BC-450A-AA39-CD11CAC325D3-min.jpg`
    },
    {
        title:"lake",
        url:`${baseURL}/images/IMG_4494-min.jpg`
    },
    {
        title:"beach-entreprenuers",
        url:`${baseURL}/images/IMG_5128-min.JPG`
    }
];

const projectImages = [
    {
        title: "hiking-mountain",
        url:`${baseURL}/images/IMG_0477-min.JPG`
    },
    {
        title: "smoky-mountain",
        url:`${baseURL}/images/IMG_2519_MOV_AdobeExpress.gif`
    }
];

const aboutImages = [
    {
        title: "hiking-mountain-banner",
        url:`${baseURL}/images/IMG_7307-banner.jpg`
    },
    {
        title: "lake-island",
        url:`${baseURL}/images/Historia_1.JPG`
    },
    {
        title: "cactus-valley",
        url:`${baseURL}/images/IMG_7309.PNG`
    }
];

const logos = {
    default: {
        title: "kikster",
        url:`${baseURL}/kikster_logo.JPG`
    },
    nature: {
        title: "kikster-nature",
        url:`${baseURL}/kikster_logo_nature.jpg`
    },
    products: {
        title: "kikster-products",
        url:`${baseURL}/kikster_logo_products.jpg`
    }
}


const homeIcons = {
    gov: `${baseURL}/icons/capitol-washington-svgrepo-com.svg`,
    bus: `${baseURL}/icons/store-coffee-shop-svgrepo-com.svg`,
    nat: `${baseURL}/icons/pines-tree-svgrepo-com.svg`
}

export { images, jumbotron, portfolioImages, projectImages, aboutImages, homeIcons, logos, homeImages };