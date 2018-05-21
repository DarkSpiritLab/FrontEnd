import { englishMessages } from 'admin-on-rest';

import customEnglishMessages from './en';

import chineseMessages from './cn';

export default {
    en: { ...englishMessages, ...customEnglishMessages },
    cn: { ...chineseMessages},
};
