/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Eclipse 3D Model",
    description:
      "Eclipse 3D Model is an open-source 3D web application designed to help young learners understand the mechanics of eclipses",
    url: "https://github.com/Shaheer04/Eclipse-3D-Model",
  },
  {
    title: "Budgetier",
    description:
      "A web application designed to simplify the planning process for Hajj, Umrah, or Ziarat trips.",
    url: "https://github.com/Shaheer04/Budgetier",
  },
  {
    title: "My Transaction App",
    description:
      "A transaction web App where u can create, delete, edit and save your transactions, built using python and flask.",
    url: "https://github.com/Shaheer04/transaction_app",
  },
  {
    title: "Fake New detector",
    description: "A machine-learning model that predicts fake news articles.",
    url: "https://github.com/Shaheer04/fake_news_detection",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
