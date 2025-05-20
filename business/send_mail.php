<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// reCAPTCHA検証
$recaptcha = $_POST['g-recaptcha-response'];
$secretKey = 'あなたのシークレットキー';
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptcha");
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
    die('reCAPTCHA認証に失敗しました。もう一度お試しください。');
}

// 入力データを取得
$inquiry = $_POST['inquiry'];
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$name_kana = htmlspecialchars($_POST['name_kana'], ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($_POST['company'], ENT_QUOTES, 'UTF-8');
$department = htmlspecialchars($_POST['department'], ENT_QUOTES, 'UTF-8');
$email = $_POST['email'];
$phone = $_POST['phone'];
$fax = $_POST['fax'];
$address = htmlspecialchars($_POST['address'], ENT_QUOTES, 'UTF-8');

// メール内容の作成
$to = "yuma.takemoto@tech-bambook.co.jp";
$subject = "【お問い合わせ】" . $inquiry;
$body = <<<EOT
以下の内容でお問い合わせがありました。

【お問い合わせ項目】 $inquiry
【お名前】 $name
【ふりがな】 $name_kana
【会社名】 $company
【部署名】 $department
【メールアドレス】 $email
【電話番号】 $phone
【FAX番号】 $fax
【住所】 $address
【お問い合わせ内容】
$message
EOT;

$headers = "From: " . $email . "\r\n" .
          "Reply-To: " . $email . "\r\n";

// メール送信
if (mail($to, $subject, $body, $headers)) {
  header("Location: thanks.html"); // 完了ページにリダイレクト
  exit;
} else {
  echo "メールの送信に失敗しました。";
}
?>
