import { stripHtml } from "string-strip-html";
import axios from "axios";

export const fetchPageContent = async (pageId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_CMS_URL}/pages/${pageId}`);
  return stripHtml(data.content.rendered).result;
};

export const fetchPageTitle = async (pageId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_CMS_URL}/pages/${pageId}`);
  return stripHtml(data.title.rendered).result;
};

export const fetchImgs = async (galleryId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_CMS_URL}/media&parent=${galleryId}`);

  const finalImages = [];
  data.forEach((img) => {
    finalImages.push({
      original: img.source_url,
      thumbnail: img.media_details.sizes["thumbnail"].source_url,
    });
  });

  return finalImages;
};

export const fetchQoutes = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_CMS_URL}/posts`);
  const allQoutes = [];
  data.forEach((qoute) => {
    let newQoute = {};
    newQoute.from = stripHtml(qoute.title.rendered).result;
    newQoute.content = stripHtml(qoute.content.rendered).result;
    allQoutes.push(newQoute);
  });

  return allQoutes;
};
