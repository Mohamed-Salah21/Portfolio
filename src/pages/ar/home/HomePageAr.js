import "./home_ar.scss";
import "./home-media_ar.scss";
import Fade from "react-reveal/Fade";
var HomePageAr = () => {
  return (
    <div className="home-page-ar">
      <section className="container1">
        <Fade right cascade>
          <div className="article ">
            <header className="d-none d-sm-block">
              <h3>
                <span>مرحبا أنا </span>
              </h3>
              <h3>
                محمد صلاح <span> مصمم الواجهة الامامية </span>
              </h3>
            </header>
            <header className="d-block d-sm-none">
              <h3>
                <span> مرحبا </span>
              </h3>
              <h3> أنا محمد صلاح </h3>
              <h3>
                <span> مطور الواجهة الامامية </span>
              </h3>
            </header>
            <div>
              <p>
                أنا أعمل في تطوير الويب للواجهة الأمامية ، ولدي خبرة في التعامل
                مع البرمجة وتقنيات الويب الحديثة ، وقد قمت ببناء الكثير من
                المشاريع التي زادت من خبرتي وتدربت كثيرًا ، فأنا سريع التعلم
                وأحب دائمًا التطوير نفسي
              </p>
            </div>
            <ul>
              <a
                href="https://github.com/Mohamed-Salah21"
                target="_blank"
                rel=" noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-salah21/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1lBFKxXJtI_jK_ZpXPpqVoElo7fmDZOM_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </ul>
          </div>
        </Fade>
        <Fade left>
          <div className="background-wall ">
            <div className="my_pic"> </div>
          </div>
        </Fade>
      </section>
      <section className="container2">
        <Fade top>
          <div className="section-question">
            <h2> ماذا استطيع ان افعل ؟ </h2>
          </div>
        </Fade>
        <div className="section-container">
          <Fade right>
            <div className="texts">
              <p>
                أنا مهندس برمجيات ينفذ تصميمات الويب من خلال لغات البرمجة مثل
                HTML و CSS و JavaScript. إذا توجهت إلى أي موقع ، يمكنك مشاهدة
                عمل مطور الواجهة الأمامية في التنقل والتخطيطات (بما في ذلك هذه
                المقالة) ، وبالطريقة التي يبدو بها الموقع مختلفًا على هاتفك
                (بفضل تصميم الجوال أولاً أو التصميم سريع الاستجابة) وأنا مسؤول
                عن إنشاء تجربة مستخدم وظيفية من خلال إدارة الجانب المواجه للعميل
                في مواقع الويب
              </p>
              <p>ببساطة أنا أركز على الجوانب التي تواجه زوار موقع الويب.</p>
              <p>
                إذا كنت ترغب في معرفة المزيد قم بزيارة
                <a
                  href="https://en.wikipedia.org/wiki/Front-end_web_development"
                  target="_blank"
                  rel="noreferrer"
                >
                  ويكيبيديا
                </a>
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="images">
              <div></div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="container3">
        <div className="the_parent">
          <Fade top>
            <div className="question">
              <h2> هدفي </h2>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="answers">
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p> تحسين تجربة المستخدم </p>
              </div>
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p> تطوير واجهة المستخدم وصيانتها </p>
              </div>
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p> تنفيذ التصميم على مواقع المحمول </p>
              </div>

              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p>
                  إنشاء أدوات تعمل على تحسين التفاعل مع الموقع بغض النظر عن
                  المتصفح
                </p>
              </div>

              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p> ادارة سير عمل البرامج </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};
export default HomePageAr;