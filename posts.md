---
permalink: /posts/
title: "Posts"
---

# Posts

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <h2 id="y{{ year.name }}">{{ year.name }}</h2>
  <ul>
    {% for post in year.items %}
      <li><a href="{{ post.url }}">{{ post.date | date: "%B" }}: {{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
