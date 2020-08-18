---
title: "Lets see how this goes!?"
my_number: 5

date: 2018-06-03 11:57:53 +0300
categories: jekyll update
somevar: 
  - sw1 
  - sw2 
  - sw3 
  - sw4
---

# Welcome

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
