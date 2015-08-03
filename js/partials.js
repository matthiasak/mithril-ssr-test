export const wrapper = (content) => `<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css">
</head>

<body>
    <div class="container">${content}</div>
    <script type="text/javascript" src="./app-browserify.js"></script>
</body>

</html>`