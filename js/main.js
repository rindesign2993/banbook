document.addEventListener('DOMContentLoaded', function () {
  // ▼ jQueryのinviewイベント（プラグインが読み込まれている前提）
  if (typeof $ !== 'undefined' && typeof $.fn.on === 'function') {
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      }
    });
  } else {
    console.warn("jQuery または inview プラグインが読み込まれていません。");
  }

  // ▼ ナビゲーションのアクティブリンク
  const navLinks = document.querySelectorAll(".sidebar nav ul li a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ▼ ハンバーガーメニュー
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');
  const overlay = document.getElementById('js-overlay');

  if (hamburger && nav && overlay) {
    function toggleMenu() {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
      overlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    overlay.addEventListener('click', function () {
      toggleMenu();
    });

    document.addEventListener('click', function (e) {
      const target = e.target;
      const isClickInsideMenu = nav.contains(target) || hamburger.contains(target);
      if (!isClickInsideMenu && nav.classList.contains('open')) {
        toggleMenu();
      }
    });
  }

  // ▼ フォームバリデーション
  const form = document.querySelector('.contact_form');
  if (form) {
    const emailInput = form.querySelector('#email');
    const emailConfirmInput = form.querySelector('#email_confirm');
    const phoneInput = form.querySelector('#phone');

    if (emailInput && emailConfirmInput && phoneInput) {
      // 入力制限：数字のみ
      phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
      });

      // 送信時チェック
      form.addEventListener('submit', function (event) {
        const email = emailInput.value;
        const emailConfirm = emailConfirmInput.value;
        const phone = phoneInput.value;

        if (email !== emailConfirm) {
          alert('メールアドレスが一致していません。');
          event.preventDefault();
          return;
        }

        if (!/^\d{10,11}$/.test(phone)) {
          alert('電話番号は10桁または11桁で入力してください。');
          event.preventDefault();
          return;
        }
      });
    }
  }
});
