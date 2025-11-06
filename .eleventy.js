module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Watch for CSS changes
  eleventyConfig.addWatchTarget("src/assets/styles.css");

  // Add date filter for Nunjucks
  eleventyConfig.addFilter("date", function(date, format) {
    const d = date === "now" ? new Date() : new Date(date);
    if (format === "yyyy") {
      return d.getFullYear();
    }
    return d.toISOString();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/ai-training/"
  };
};
