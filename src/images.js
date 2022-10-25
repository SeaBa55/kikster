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
];

const jumbotron = [
    { 
        title: "jumbotronDefault",
        url: `${baseURL}/images/IMG_8208-min.JPG`
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
]

const projectImages = [
    {
        title: "hiking-mountain",
        url:`${baseURL}/images/IMG_0477-min.JPG`
    },
    {
        title: "smoky-mountain",
        url:`${baseURL}/images/IMG_2519_MOV_AdobeExpress.gif`
    }
]

export { images, jumbotron, portfolioImages, projectImages };