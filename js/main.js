// サイドメニュー
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

const navLinks = document.querySelectorAll(".sidebar nav ul li a");

window.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');
  const overlay = document.getElementById('js-overlay');

  function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation(); // クリックバブリング防止
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
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact_form');
  form.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('email_confirm').value;

    // メールアドレスの一致
    if (email !== emailConfirm) {
      alert('メールアドレスが一致していません。');
      event.preventDefault();
      return;
    }

    // フォーム送信時のバリデーション
    const phone = document.getElementById('phone').value;
    if (!(phone.length === 10 || phone.length === 11)) {
      alert('電話番号は10桁または11桁で入力してください。');
      event.preventDefault();
      return;
    }
  });

  // 電話番号欄に数字以外入力できないようにする
  document.getElementById('phone').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});
