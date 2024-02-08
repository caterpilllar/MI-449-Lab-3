// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("user", function(name, twitterUsername){
    return `<div class="user"> <div class="user_name"> ${name}</div> <div class="user_twitter"> @${twitterUsername} </div> </div>`
  });

  eleventyConfig.addShortcode("nav", function(test1){
    return `<nav>
    <ul>
      <li><a href="/" title="Go home">Home</a></sli>
      <li><a href="/about/" title=About>About</a></li>
      <li><a href="/log1/" title="Log Entry One">Log 1</a></li>
      <li><a href="/log2/" title="Log Entry Two">Log 2</a></li>
    </ul>
  </nav>`
  });

};

