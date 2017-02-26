var _ = require('lodash');
var HelpScoutDocs = require('helpscout-docs');
var apiKey = 'b07eca8e7be2ac11d49d30c786c451aa46b46aa7';
var hsdocs = new HelpScoutDocs(apiKey);
var ARTICLES_CATEGORY_ID = '5830a79fc697916f5d052b78';
const SEARC_HS_ARTICLES = hsdocs.articles.search;
var allArticles = {};
var collectinIDs = [];
var {tabTitle, afterTitle, body, end, seoData, closeTitle} = require('./staticVariables');
var fs = require("fs");
var slugsNotFound = [];

function writeThatShit(filename, data) {
    fs.writeFileSync(filename, data);
}

function findSlug(slug) {
    if (slug = "advanced-life-insurance") {
        return slug
    }
}


function getEachArticle(id) {
    hsdocs.articles.get({id:id}, (error, response) => {
        if (error) {
            console.error("Problem with the request: ",error)
        } else {
            let slug = response.article.slug;
            let name = response.article.name;
            let text = response.article.text;
            let searchValue = {"slug": slug};
            let index = _.findIndex(seoData, searchValue);

            if (index != -1) {
                let seoTitle = seoData[index].title;
                let seoDescription = seoData[index].metaDescription;
                let seoMetaDescription = `<meta name="description" content="${seoDescription}"/>`
                let seoKeywords = seoData[index].metaKeywords;
                let seoMetaKeywords = `<meta name="keywords" content="${seoKeywords}"/>`
                let canonicalVariable = seoData[index].canonicalTag;
                let canonicalTag = `<link rel="canonical" href="${canonicalVariable}"/>`

                let ogUrlVariable = seoData[index].ogUrl;
                let ogUrlTag = `<meta property="og:url" content="${ogUrlVariable}"/>`

                let ogTypeVariable = seoData[index].ogType;
                let ogTypeTag = `<meta property="og:type" content="${ogTypeVariable}"/>`

                let ogTitleVariable = seoData[index].ogTitle;
                let ogTitleTag = `<meta property="og:title" content="${ogTitleVariable}"/>`

                let ogDescriptionVariable = seoData[index].ogDescription;
                let ogDescriptionTag = `<meta property="og:description" content="${ogDescriptionVariable}"/>`

                let renderedPage = `${tabTitle}${seoTitle}${closeTitle}\n\t\t${seoMetaDescription}\n\t\t${seoMetaKeywords}\n\t\t${canonicalTag}\n\t\t${ogUrlTag}\n\t\t${ogTypeTag}\n\t\t${ogTitleTag}\n\t\t${ogDescriptionTag}${afterTitle}${name}\n${body}\n${text}\n${end}`
                writeThatShit(`resource-center/${slug}`, renderedPage)
            } else {
                console.log("this slug had no match: ",slug)
            }
        }
    });
}


// Collect article IDs
function getArticles(collection) {
    hsdocs.articles.getAllByCategory({id:collection}, (error, response) => {
        if (error) {
            console.error("Problem with the request: ",error)
        } else {
            allArticles = response.articles.items
            console.log("number of articles = ",allArticles.length);
            allArticles.map((ID) => {
                collectinIDs.push(ID.id);
            })
        }
        collectinIDs.map((articleID) => {
            getEachArticle(articleID)
        })

    });
}

module.exports.getArticles = getArticles;
