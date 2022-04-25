---
date: 2022-04-14
title: "Website Refresh"
categories: tech
tags: website

---

# Welcome

<small>{{ page.date | date: '%B %d, %Y' }}</small>

---

x

**Hello world**, this is my first Jekyll blog post.

I hope you like it!

Testing page.title: {{ page.title }}

make 'hi' capitals: {{ "hi" | capitalize }}

make 'BYE' lowercase: {{ "BYE" | downcase }}

page number: {{ page.my_number }}

Date: {{ page.date | date: '%B %d, %Y' }}

Array test: 
{% for item in page.somevar %}
  {{ item }}
{% endfor %}
