<#macro page name cssName>
    <!DOCTYPE html>
    <html lang="RU">
    <head>
        <meta charset="UTF-8">
        <title>${name}</title>
        <#--    <#include "/static/css/style.css">-->
        <link rel="icon" href="/static/images/logo/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" type="text/css" href="/static/css/${cssName}.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>

    <#nested>
    </body>
    <script src="/static/js/index.js"></script>
    </html>
</#macro>

<#macro header>
    <header class="header_view_container">
        <div class="header_container">
            <div class="menu_bar">
                <a class="menu_bar__logo logo" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 151 26"
                         class="header" data-cy="closeLogo">
                        <path fill="#FEFEFE" fill-rule="evenodd"
                              d="M49.307 3.24c-6.042 0-10.941 4.921-10.941 10.997 0 6.07 4.899 10.994 10.941 10.994 6.043 0 10.942-4.923 10.942-10.994 0-6.076-4.9-10.996-10.942-10.996zM24.87 3.239a9.33 9.33 0 00-7.757 4.143 9.336 9.336 0 00-7.757-4.143c-5.139 0-9.307 4.164-9.35 9.318H0v12.032h3.198v-12c.028-3.394 2.771-6.14 6.156-6.14 3.401 0 6.158 2.773 6.158 6.19v11.95h3.2v-11.97c.01-3.41 2.763-6.17 6.156-6.17 3.396 0 6.146 2.761 6.158 6.17v11.97h3.198V12.555h-.003c-.045-5.155-4.213-9.32-9.353-9.32l.001.002zm48.803.004c-5.105.038-9.234 4.185-9.278 9.314h-.004v12.031h3.2V12.591c.027-3.39 2.761-6.13 6.136-6.14h.183V3.239h-.237v.004zm6.609 8.68c.989-3.155 3.922-5.444 7.39-5.444 3.466 0 6.4 2.289 7.388 5.444H80.28zm7.39-8.657c-6.045 0-10.946 4.923-10.946 10.997 0 6.075 4.9 11 10.946 11 4.24 0 7.91-2.429 9.726-5.974L94.6 17.736c-1.27 2.556-3.894 4.312-6.929 4.312-4.05 0-7.369-3.123-7.712-7.103h13.314v-.002h5.308c.012-.228.035-.451.035-.68 0-6.075-4.901-10.998-10.945-10.998zM104.95 20.9a2.037 2.037 0 00-2.032 2.042 2.03 2.03 0 00.593 1.443 2.039 2.039 0 001.439.6 2.034 2.034 0 001.881-1.262c.102-.248.154-.514.153-.781a2.03 2.03 0 00-1.254-1.886 2.034 2.034 0 00-.78-.156zM116.665 0h-3.198v3.216h-3.209v3.026h3.209v8.944h-.002l.001.03v.053h.004c.044 5.13 4.173 9.277 9.279 9.315v.004h.235v-3.214h-.182c-3.376-.01-6.111-2.75-6.137-6.139V6.243h6.319V3.216h-6.319V0zm29.672 3.257l-8.447 17.614-8.449-17.614-.061-.04h-3.531l10.235 21.385h3.611l10.237-21.345h-3.595z"
                              clip-rule="evenodd"></path>
                    </svg>
                </a>
                <nav class="menu_nav">
                    <a href="/" class="menu_nav__item nav_text">
                        Сериалы
                    </a>
                    <a href="/" class="menu_nav__item nav_text">
                        Фильмы
                    </a>
                    <a href="/" class="menu_nav__item nav_text">
                        Шоу
                    </a>
                    <a href="/" class="menu_nav__item nav_text">
                        Детям
                    </a>
                    <a href="/" class="menu_nav__item nav_text">
                        ТВ
                    </a>
                </nav>
            </div>
            <div class="user_bar">
                <div class="user_bar__search_button button">
                    <svg class="user_bar__search_icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.95 12.47c2.01-2.755 1.69-6.73-.902-9.322C10.193.293 5.663.195 2.928 2.928c-2.733 2.734-2.634 7.265.22 10.12 2.593 2.592 6.567 2.912 9.322.902.056.165.15.32.28.45l2.671 2.671a1.167 1.167 0 001.65-1.65l-2.67-2.67a1.163 1.163 0 00-.451-.28zm-2.234-.753c1.914-1.914 1.845-5.085-.154-7.084-1.998-1.998-5.17-2.067-7.083-.153-1.914 1.913-1.845 5.084.154 7.083 1.998 1.998 5.17 2.067 7.083.154z">
                        </path>
                    </svg>
                    <span class="user_bar__placeholder">Найти</span>
                </div>
                <a class="user_bar__subscription button" href="/subscription">
                    7 дней подписки бесплатно
                </a>
                <a class="user_bar__sign button" href="/">
                    Войти
                </a>
            </div>
        </div>
    </header>
</#macro>

<#macro main>
    <main class="main-view-container">

    </main>
</#macro>

<#macro footer>
    <footer class="footer-view-container">

    </footer>
</#macro>
