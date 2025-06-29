<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    document.getElementById('id').addEventListner('click', function name(params) {
        alert("Hello")
    })
    document.getElementById('id').addEventListner('click', function name(e) {
        console.log(e)
    }, false)
</script>
</html>