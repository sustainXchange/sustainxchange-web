import { defaultLanguage } from "../config";

export const getIntlNodes = (query, locale) => {
  let nodes;
  console.log("default lang is", defaultLanguage);

  if (query.nodes.some(node => node.fields.locale === locale)) {
    nodes = query.nodes.filter(node => node.fields.locale === locale);
  } else {
    nodes = query.nodes.filter(
      node => node.fields.locale === `${defaultLanguage}`
    );
  }
  return nodes;
};
