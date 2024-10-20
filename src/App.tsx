import React from "react";
import logo from "./Images/Bazh-Site-Logo.png";
import DarMiyanZolmatImage from "./Images/Books Covers/Dar Miyan Zolmat.jpg";
import KhaneyePushaliImage from "./Images/Books Covers/Khaneye Pushali.jpg";
import Majmoeh2jeldiAnayeKhuninImage from "./Images/Books Covers/Majmoeh 2 jeldi Anaye Khunin.jpg";
import Majmoeh3JeldiEhzargarImage from "./Images/Books Covers/Majmoeh 3 Jeldi Ehzargar.jpg";
import Majmoeh3JeldiFeralhaImage from "./Images/Books Covers/Majmoeh 3 Jeldi Feralha.jpg";
import Majmoeh3JeldiWivardPaynzImage from "./Images/Books Covers/Majmoeh 3 Jeldi Wivard Paynz.jpg";
import Majmoeh4JeldiHayulaShenasImage from "./Images/Books Covers/Majmoeh 4 Jeldi Hayula Shenas.jpg";
import Majmoeh5JeldiTimarestanImage from "./Images/Books Covers/Majmoeh 5 Jeldi Timarestan.jpg";
import Majmoeh8JeldiSarireShisheiImage from "./Images/Books Covers/Majmoeh 8 Jeldi Sarire Shishei.jpg";
import Majmoeh3JeldiJangeMalakeSorkh from "./Images/Books Covers/Majmoeh 3 Jeldi Jange Malake Sorkh.jpg";
import Majmoeh4JeldiSadNafar from "./Images/Books Covers/Majmoeh 4 Jeldi Sad Nafar.jpg";
import Majmoeh5JeldiDavandeHezartu from "./Images/Books Covers/Majmoeh 5 Jeldi Davande Hezartu.jpg";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div dir="rtl">
      <header>
        <img src={logo} alt="نشر باژ" width={210} />
        <h1>نشر باژ</h1>
      </header>
      <main>
        <div>
          <center>
            <table>
              <tr>
                <td>
                  <img src={DarMiyanZolmatImage} alt="" width={180} />
                  <center>
                    <h3>در میان ظلمت</h3>
                    <div id="book-price">
                      <h4>271000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={KhaneyePushaliImage} alt="" width={180} />
                  <center>
                    <h3>خانه پوشالی</h3>
                    <div>
                      <h4>264000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh2jeldiAnayeKhuninImage} alt="" width={180} />
                  <center>
                    <h3> مجموعه 2 جلدی آنای خونین</h3>
                    <div>
                      <h4>828000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh3JeldiEhzargarImage} alt="" width={180} />
                  <center>
                    <h3>مجموعه 3 جلدی احظارگر</h3>
                    <div>
                      <h4>1021500 تومان</h4>
                    </div>
                  </center>
                </td>
              </tr>
            </table>
          </center>
        </div>
        <div>
          <center>
            <table>
              <tr>
                <td>
                  <img src={Majmoeh3JeldiFeralhaImage} alt="" width={180} />
                  <center>
                    <h3>مجموعه 3 جلدی فرال ها</h3>
                    <div>
                      <h4>1053000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh3JeldiWivardPaynzImage} alt="" width={180} />
                  <center>
                    <h3>مجموعه 3 جلدی ویوارد پینز</h3>
                    <div>
                      <h4>805000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img
                    src={Majmoeh4JeldiHayulaShenasImage}
                    alt=""
                    width={180}
                  />
                  <center>
                    <h3>مجموعه 4 جلدی هیولاشناس</h3>
                    <div>
                      <h4>1865000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh5JeldiTimarestanImage} alt="" width={180} />
                  <center>
                    <h3>مجموعه 5 جلدی تیمارستان</h3>
                    <div>
                      <h4>1990000 تومان</h4>
                    </div>
                  </center>
                </td>
              </tr>
            </table>
          </center>
        </div>
        <div>
          <center>
            <table>
              <tr>
                <td>
                  <img
                    src={Majmoeh8JeldiSarireShisheiImage}
                    alt=""
                    width={180}
                  />
                  <center>
                    <h3>مجموعه 8 جلدی سریر شیشه ای</h3>
                    <div>
                      <h4>5714000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh3JeldiJangeMalakeSorkh} alt="" width={180} />
                  <center>
                    <h3> مجموعه 3 جلدی جنگ ملکه سرخ</h3>
                    <div>
                      <h4>1509000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh4JeldiSadNafar} alt="" width={180} />
                  <center>
                    <h3>مجموعه 4 جلدی صد نفر</h3>
                    <div>
                      <h4>820000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <img src={Majmoeh5JeldiDavandeHezartu} alt="" width={180} />
                  <center>
                    <h3>مجموعه 5 جلدی دونده هزارتو</h3>
                    <div>
                      <h4>2218000 تومان</h4>
                    </div>
                  </center>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </tr>
            </table>
          </center>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
