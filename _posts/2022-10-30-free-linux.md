---
date: 2022-10-30
title: "Free Linux?"
categories: linux
tags: RHEL Ubuntu
---
# {{ page.title }}

<div style="text-align: right;"><small>{{ page.date | date: '%B %d, %Y' }}</small></div>
---

## RHEL

Red Hat Developer Subscription for Individuals (16 machines): <https://developers.redhat.com/articles/faqs-no-cost-red-hat-enterprise-linux>

1. Create an account: <https://developers.redhat.com/register>
2. Confirm subscription is available: <https://access.redhat.com/management/subscriptions/>
3. Attach the license:

```shell
sudo subscription-manager register
sudo subscription-manager refresh
sudo subscription-manager attach --auto
```

4. Verify

```shell
$ subscription-manager list | grep Status:
Status:         Subscribed
```

5. Dashboard: <https://access.redhat.com/management>

## Ubuntu

Ubuntu Pro for free (5 machines): <https://ubuntu.com/pro/beta>

1. Create an account: <https://ubuntu.com/login>
2. Find token under "Free Personal Token"
3. Attach the license:

```shell
sudo pro attach <TOKEN>
```

4. Verify:

```shell
$ pro status | grep -A2 "STATUS"
SERVICE          ENTITLED  STATUS    DESCRIPTION
esm-infra        yes       enabled   Expanded Security Maintenance for Infrastructure
livepatch        yes       enabled   Canonical Livepatch service
```

5. Dashboard: <https://ubuntu.com/pro/dashboard>
