import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const generatePage = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { page, id, extraId } = useParams();
  let pageName = "";
  if (id && extraId) {
    pageName = `${page}/[id]/[extraId]`;
  } else if (id) {
    pageName = `${page}/[id]`;
  } else {
    pageName = `${page}`;
  }
  return generatePage(pageName);
};

export default PageRender;