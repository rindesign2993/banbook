(function () {
    var currentScript = (function() {
        if (document.currentScript) {
            return document.currentScript;
        }
        return document.querySelector('script[src="/js/header.js"]');
    })();

    currentScript.insertAdjacentHTML('beforebegin', `
        <header id="js-header" class="header">
            <div class="logo">
                <a href="https://tech-bambook.co.jp/">
                    <img src="https://www.tech-bambook.co.jp/img/logo.png" alt="会社のロゴ" title="会社のロゴ">
                    <h1>株式会社BAMBOOK</h1>
                </a>
            </div>
            <div class="Nav">
                <nav class="Nav_global" id="js-nav">
                    <ul class="Nav_global_list">
                        <li>
                            <a href="https://www.tech-bambook.co.jp/business/business.html" class="Nav_global_item">事業内容</a>
                        </li>
                        <li>
                            <a href="#" class="Nav_global_item">実績・事例</a>
                        </li>
                        <li>
                            <a href="#" class="Nav_global_item">企業情報</a>
                        </li>
                        <li><a href="https://www.tech-bambook.co.jp/business/contact.html" class="Nav_global_item">お問い合わせ</a></li>
                    </ul>
                </nav>
            </div>
            <button class="hamburger" id="js-hamburger" aria-label="メニューを開く">
                <span></span><span></span><span></span>
            </button>
            <div class="overlay active" id="js-overlay"></div>
        </header>
    `);
})();