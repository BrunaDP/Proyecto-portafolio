import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "ncsms587",
    dataset: 'production',
    apiVersion: '2022-10-16',
    useCdn: true,
    token: "sk8K2zi75lVPO18TgLg5Do3dVwrZ97UFvq2C2FJmrmnYhD9Tcx4Wj50VgsAFAIBPDVnY4sVJMwns7tN57aPdxmVaEjiqEk0ytMNse12UH4JUbbAAu0B0SASiMrQPFXygjYd3Aat6KD21HnTkmFrOLGsfaVPc9yhqUBIKq38LJrg6Os5iXFjP",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);