module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "src/icons": "/" });

  eleventyConfig.addCollection("resenas", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/resenas/*.md").reverse();
  });

  eleventyConfig.addCollection("planoDelDia", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/el-plano/*.md").reverse();
  });

  eleventyConfig.addCollection("rescates", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/rescates/*.md").reverse();
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  // Nombre propio para evitar el choque con el "slice" de agrupar de Nunjucks
  eleventyConfig.addFilter("sliceItems", (arr, start, end) => {
    return Array.isArray(arr) ? arr.slice(start, end) : [];
  });

  // Texto y clase visual para el sistema de calificación Luz / Contraluz / Sombra
  eleventyConfig.addFilter("ratingIndex", (rating) => {
    const scale = { luz: 3, contraluz: 2, sombra: 1 };
    return scale[(rating || "").toLowerCase()] || 0;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
