var links = document.querySelectorAll("link[href='https://gist-it.appspot.com/assets/embed.css'], link[href='https://gist-it.appspot.com/assets/prettify/prettify.css']");
links.forEach(function (link, index) {
  console.log(index, link);
  link.parentNode.removeChild(link);
});
