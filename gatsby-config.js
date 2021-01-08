/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const fs = require("fs");

const globalNavFilePath = require.resolve(
  "@adobe/gatsby-theme-aio/globalNav.json"
);
const globalNav = JSON.parse(fs.readFileSync(globalNavFilePath, "utf8"));

globalNav.menus = [globalNav.menus[2]];

module.exports = {
  siteMetadata: {
    globalNav,
    /*versions: [
      {
        title: 'v4.1'
      },
      {
        title: 'v1.4',
        path: 'https://github.com/AdobeDocs/uxp-xd'
      }
    ],*/
    pages: [
      {
        title: "UXP for Adobe XD",
        path: "/",
      },
      {
        title: "Develop",
        path: "/develop/",
      },
      {
        title: "UXP",
        path: "/uxp/",
      },
      {
        title: "Design",
        path: "/design/",
      },
      {
        title: "Share",
        path: "/distribution/",
      },
    ],
    subPages: [
      ...require("./summary.js"),
      {
        title: "UXP API",
        path: "/uxp/reference-js/",
        header: true,
        pages: [
          {
            title: "JavaScript Reference",
            path: "/uxp/reference-js/",
            pages: require("./reference-js.js"),
          },
          {
            title: "CSS Reference",
            path: "/uxp/reference-css/",
            pages: require("./reference-css.js"),
          },
          {
            title: "HTML Reference",
            path: "/uxp/reference-html/",
            pages: require("./reference-html.js"),
          },
          {
            title: "Spectrum UXP Reference",
            path: "/uxp/reference-spectrum/",
            pages: require("./reference-spectrum.js"),
          },
          {
            title: "Known Issues",
            path: "/uxp/known-issues/",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || "/xd/uxp",
};
