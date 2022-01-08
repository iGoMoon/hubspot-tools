# HubSpot Fields JS CLI <!-- omit in toc -->

<img src="https://img.shields.io/badge/Version-1.0.1-brightgreen" />

CLI commands to transform `fields.js` into a `fields.json` file

## Installation

```shell
npm install @igomoon/hubspot-fields-js-cli -g
```
When a command below is run, it will transform the `fields.js` into a `fields.json` in the SAME directory, so it's very important that you add `fields.js` to your `.hsignore`

## Usage

Watch a directory for changes and transform
```shell
fields watch <src>
```

Scan a directory and transform.
```shell
fields parse <src>
```