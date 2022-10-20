const BRAND_NAME_ZH_CN = "Authing";
const BRAND_NAME_ZH_CN_LOWER_CASE = "authing";
const BRAND_NAME_EN_US = "Authing";
const BRAND_NAME_EN_US_LOWER_CASE = "authing";

const DATABASE_CONNECTION_MENU_EN = {
  title: "Custom database",
  path: "/guides/database-connection/overview.html",
  children: [
    {
      title: "Configure database connection and scripting",
      path: "/guides/database-connection/configuration/",
    },
    {
      title: `Lazy migration of users to ${BRAND_NAME_EN_US}`,
      path: "/guides/database-connection/lazy-migration",
    },
    {
      title: "Fully use a custom database to save user data",
      path: "/guides/database-connection/custom-user-store.md",
    },
    {
      title: "Best Practice",
      path: "/guides/database-connection/best-practices.md",
    },
  ],
};

/**
 * 中文菜单
 */
const zhCnNavBar = {
  "/reference/": [
    {
      title: "Hello World",
      path: "/reference/hello-world",
    },
    {
      title: "Level1",
      path: "/reference/level1",
      children: [
        {
          title: "Level2",
          path: "/reference/level1/level2",
        }
      ]
    }
  ]
};

/**
 * 英文菜单
 */
const translatedZhCnNavBar = {
  
};

const addPrefixToLink = (navbar, prefix) => {
  if (!navbar) {
    return;
  }
  return navbar.map((item) => ({
    ...item,
    path: item.path && `${prefix}${item.path}`,
    children:
      item.children &&
      item.children.map((link) => {
        if (typeof link === "string") {
          return `${prefix}${link}`;
        }
        return {
          ...link,
          path: `${prefix}${link.path}`,
          children: addPrefixToLink(link.children, prefix),
        };
      }),
  }));
};

/**
 * 给所有路径加上 /en
 */
const getEnUsNavBar = (sidebars) => {
  const enUsNavBar = {};

  for (let attr in sidebars) {
    enUsNavBar[`/en${attr}`] = addPrefixToLink(sidebars[attr], "/en");
  }

  return enUsNavBar;
};

module.exports = {
  zhCnNavBar,
  enUsNavBar: getEnUsNavBar(translatedZhCnNavBar),
  BRAND_NAME_ZH_CN,
  BRAND_NAME_EN_US,
};
