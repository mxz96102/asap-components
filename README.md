# ASAP Components

> Actually we need these components asap, I want it in an old easy way, no more packages and bundle problem. It's depended on Autonomous custom elements, for using component without any framework.

## How to use

> Using it in an old fashion way, using script tag and write html.

```html
<!DOCTYPE html>
<head>
  <title>ASAP COMPONENT</title>
  <script src="http://unpkg.com/asap-components/lib/asap-loader.min.js"></script>
  <style>
    asap-time {
      color: #484bff;
      font-family: monospace;
      font-weight: bold;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <asap-time id="time"></asap-time>
</body>
```

And this asap-time result in:

![image](https://user-images.githubusercontent.com/15213473/148364741-73df1a11-9347-4944-9820-1d4c480c1083.png)


## Components

So let's see what do we got here:

### Time

`<asap-time></asap-time>`

|arttribute|required|default|description|
|----|----|----|----|
|time|x|new Date()|time that should render, using time string or timestamp|
|format|x|'YYYY-MM-DD HH:mm:ss'|format that time display, using moment/dayjs format string|

