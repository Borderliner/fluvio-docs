---
title: "This Week in Fluvio #62"
date: 2024-06-19
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

---
We released **Fluvio 0.11.9** last week.

## New release
Fluvio **v0.11.9** is now available!

Thank you to our newest contributor:
- [avikam]

To update you can run `fvm update`

```bash
$ fvm update

info: Updating fluvio stable to version 0.11.9. Current version is 0.11.8.
info: Downloading (1/5): fluvio@0.11.9
info: Downloading (2/5): fluvio-cloud@0.2.21
info: Downloading (3/5): fluvio-run@0.11.9
info: Downloading (4/5): cdk@0.11.9
info: Downloading (5/5): smdk@0.11.9
done: Installed fluvio version 0.11.9
done: Now using fluvio version 0.11.9

```

If you don't have Fluvio in your machine run:

```
curl -fsS https://hub.infinyon.cloud/install/install.sh | bash
```

If you are enjoying Fluvio please share with your friends!

## New features

We made the self hosted experience easier with the following:

- Added auth, compression, consumer arguments for edge mirroring
- Support to publish stateful data flows
- Version checker for `fluvio cluster resume`
- `fvm self update` support
- Warning before cluster deletion


## Upcoming features
InfinyOn Stateful Data Flows is going to be in `Public Beta` soon. Stateful Data Flows is a new product that will allow you to build end to end stream processing data flows on Fluvio streams.

We have released 10 developer preview iterations and shared with 50 to 100 developers. If you'd like access to the private beta, please fill out [this form].

## Bug fixes
This release includes a number of new features, bug fixes, documentation improvements, and improved error messaging.

See the [CHANGELOG] for details

## Good First Issues
We love our open source community contributors. Here are some issues that you could contribute to. All the best.

- [When a topic is deleted, connected clients should have their connection closed]
- [MQTT Connector: Prefix auto generated Client ID to prevent connection drops]
- [Remove localhost from fluvio in favor of 127.0.0.1]

## New blog post
We are building a series on Stateful Data Flow primitives. This is the introduction post: [The absolute beginners guide to dataflow primitives]

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello!

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions

[avikam]: https://github.com/avikam

[this form]: https://infinyon.com/request/ss-early-access/

[CHANGELOG]: https://github.com/infinyon/fluvio/blob/v0.11.9/CHANGELOG.md

[When a topic is deleted, connected clients should have their connection closed]: https://github.com/infinyon/fluvio/issues/3836

[MQTT Connector: Prefix auto generated Client ID to prevent connection drops]: https://github.com/infinyon/fluvio/issues/3825

[Remove localhost from fluvio in favor of 127.0.0.1]: https://github.com/infinyon/fluvio/issues/3866

[The absolute beginners guide to dataflow primitives]: https://infinyon.com/blog/2024/04/dataflow-primitives-intro/