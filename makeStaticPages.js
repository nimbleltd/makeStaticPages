const getArticles = require('./getArticles');
const ARTICLES_CATEGORY_ID = '5830a79fc697916f5d052b78';
let categories = ['58954c5fdd8c8e73b3e94e37', '58954beedd8c8e73b3e94e35', '5892593ddd8c8e73b3e939b4', '5830abe9c697916f5d052b87'];

categories.map((categoryIDS) => {
    getArticles.getArticles(categoryIDS);
});
