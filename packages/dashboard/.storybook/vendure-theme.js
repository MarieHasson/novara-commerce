import { create } from 'storybook/theming';
import logo from './assets/vendure-logo.svg';

export default create({
    base: 'dark',
    brandTitle: 'Vendure Dashboard Components',
    colorPrimary: '#17c1ff',
    brandUrl: 'https://github.com/MarieHasson/novara-commerce',
    brandImage: logo,
    brandTarget: '_self',
});
