<#macro page name>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${name}</title>
<#--    <#include "/static/css/style.css">-->
</head>
<body>
<#nested>
</body>
</html>
</#macro>

<#macro header>
    <div class="logo">
        <img  src="/static/images/logo/simply_cinema.jpg" alt="simply cinema logo">
    </div>
</#macro>