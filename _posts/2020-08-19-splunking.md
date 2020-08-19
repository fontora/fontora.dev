---
title: "More testing"
categories: tinkering
tags: jekyll splunk
somevar: 
  - sw1 
  - sw2 
  - sw3 
  - sw4
---

# Welcome
{{ page.date | date: '%B %d, %Y' }}: Matt
---

Using **ini** code syntax:
```ini
[tcp://10.1.1.10:9995]
host = webhead-1
sourcetype = access_common
source = //10.1.1.10/var/log/apache/access.log
```

Using **css** code syntax:
```css
div#site_nav {
  padding-bottom: 10px;
  text-align: center;
}
```

Using **json** code syntax:
```json
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
```

Using **plaintext** code syntax:
```plaintext
This isn't very exciting.
nothing is being highlited?

Boo!
```

Using **powershell** code syntax:
```powershell
Get-Service | WHERE {$_.status -eq "Running"} | SELECT displayname
```

Using **python** code syntax:
```python
friends = ['john', 'pat', 'gary', 'michael']
for i, name in enumerate(friends):
    print ("iteration {iteration} is {name}".format(iteration=i, name=name))
```

Using **shell** code syntax:
```shell
for i in `seq 1 10; do echo "iteration: $i"; done
```

Using **xml** code syntax:
```xml
<breakfast_menu>
  <food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
    <calories>650</calories>
  </food>
  <food>
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>Light Belgian waffles covered with strawberries and whipped cream</description>
    <calories>900</calories>
  </food>
</breakfast_menu>
```

Using **ymal** code syntax:
```yaml
  vars:
    http_port: 80
    max_clients: 200

  tasks:
  - name: ensure apache is at the latest version
    yum:
      name: httpd
      state: latest
```

https://www.splunk.com/
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
