(function () {
    var currentScript = (function() {
      if (document.currentScript) {
        return document.currentScript;
      }
      return document.querySelector('script[src="/js/footer.js"]');
    })();
  
    currentScript.insertAdjacentHTML('beforebegin', `
    <footer id="js_footer" class="footer">
    <div class="main_footer wrapper inview fadeIn">
      <div class="footer-flex">
        <div class="footer-item">
          <h3>事業内容</h3>
          <div class="footer-left">
            <ul class="footer_column" id="footer"> 
              <li><a href="https://www.tech-bambook.co.jp/business/landing.html">ランディングページ制作</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/pamphlet.html">パンフレット制作</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/hp.html">ホームページ制作</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/card.html">名刺制作</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/system.html">システム開発</a></li>
            </ul>
            <ul class="footer_column" id="footer">
              <li><a href="https://www.tech-bambook.co.jp/business/logo.html">ロゴ制作</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/photo.html">イメージ画の撮影</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/web_ad.html">web広告制作</a></li>
              <li><a href="https://www.tech-bambook.co.jp/business/flyer.html">チラシ制作</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-item">
            <h3>実績・事例</h3>
            <ul class="footer_column">
              <li><a href="#">実績</a></li>
              <li><a href="#">事例</a></li>
              <li><a href="#">取引先</a></li>
            </ul>
          </div>
          <div class="footer-item">
            <h3>企業情報</h3>
            <ul class="footer_column">
              <li><a href="#">会社概要</a></li>
              <li><a href="#">社長挨拶</a></li>
              <li><a href="#">経営方針</a></li>
              <li><a href="#">特徴と強み</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="sub_footer wrapper inview fadeIn">
      <ul class="sub_footer_menu">
        <li><a href="https://www.tech-bambook.co.jp/business/sitemap.html">サイトマップ</a></li>
        <li><a href="#">個人情報保護方針</a></li>
        <li><a href="#">ご利用条件</a></li>
        <li><a href="https://www.tech-bambook.co.jp/business/contact.html">お問い合わせ</a></li>
      </ul>
      <div class="footer_company">Copylight©株式会社BAMBOOK(バンブック)All Rights Reserved.</div>
    </div>
    </footer>
    `);
  })();
  