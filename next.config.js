module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/design": { page: "/design" },
      "/resume": { page: "/resume" },
      "/frontend": { page: "/frontend" },
      "/design/cadreel": { page: "/design/cadreel" },
      "/design/sfdhyperisland": { page: "/design/sfdhyperisland" },
      "/assessment": { page: "/assessment" },
    };
  },
};
