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

export { images, jumbotron };