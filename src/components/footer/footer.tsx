import QRCode from "react-qr-code";
function Footer() {
  return (
    <footer>
      <div>
        <hr color="black" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <h3>ارتباط با ما</h3>
      </div>
      <br />
      <h4>آدرس: تهران، خيابان انقلاب، خيابان دانشگاه ،</h4>
      <div>
        <h4>نبش خيابان ژاندارمري ، مجتمع تجاري دانشگاه</h4>
      </div>
      <div>
        <h4>، پلاک ۱۵۸ ، واحد ۳</h4>
      </div>
      <div>
        <h4>مرکز پخش تهران: ۶۶۹۸۱۴۵۴-۰۲۱</h4>
      </div>
      <div>
        <h4>زمان پاسخ گویی شنبه تا چهارشنبه ۱۰ تا ۱۷</h4>
      </div>
      <div>
        <h4>پنجشنبه ساعت ۱۰ تا ۱۳</h4>
      </div>
      <div>
        <h4>public@baazh.com</h4>
      </div>
      <hr />
      <h4>تمامی حقوق این وب سایت متعلق به انتشارات باژ می‌باشد.</h4>
      <QRCode value="https://instagram.com/baazhpub" />
    </footer>
  );
}

export default Footer;
