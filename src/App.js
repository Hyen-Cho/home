import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
  render() {
    return (
      <div>
        <Nevi />
        {/* <Main /> */}
        <About />
        <Technic />
        <Project />
      </div>
    )
  }
}

class Nevi extends Component {
  render() {
    return (
      <div className="nevi">
        <div className="nevi_wrap">
          <div className="navi-left page-scroll">
            <a className="navbar-home" href="#page-top">PortFolio</a>
          </div>
          <div className="navi-right">
            <ul>
              <li className="page-scroll">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="page-scroll">
                <a href="#about">About</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

// class Main extends Component {
//   render() {
//     return (
//       <div className="main_wrap">
//         <div>

//         </div>
//       </div>
//     )
//   }
// }

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about_wrap">
          <div className="about_title">
            <h1>About Hyein</h1>
          </div>
          <div className="about_content">
            <div className="about_img">
              <img />
            </div>
            <div className="about_text_wrap">
              <h4>"Never Back Down"</h4>
              <p>
                개발자라면 갖춰야 할 덕목은 탄탄한 Mental 이라고 생각합니다.
                관심가지고 노력하면 나의 한계를 뛰어넘을 수 있다.
            </p>
              <p>
                저는 항상 사회생활을 하면서 서로에게 win-win이 되는 관계를 지향해왔습니다.
                근무하면서 의자나 책상처럼 그저 회사를 구성하는 존재가 되는 것,
                단순히 생계수단이 되는 것이 아니라 반드시 어느 자리에서든 필요한 사람이 되어야 한다고 생각합니다.
            </p>
              <h4>"Values"</h4>
              <ul>
                <li><i></i>위기를 기회로 바꾸자</li>
                <li><i></i>따라올 자 없다고 자부하는 근면성실함과 책임감</li>
                <li><i></i>원만한 대인관계를 바탕으로 한 효율적인 커뮤니케이션 스킬</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Technic extends Component {
  render() {
    return (
      <div className="tech_wrap">
        <div className="tech_inner-wrap">
          <div className="tech_title">
            <h1>Skills</h1>
          </div>
          <div className="tech_list">
            <ul>
              <li>
                <div>
                  <img src="img/Java_logo.png" alt="1" />
                </div>
                <p>Java</p>
              </li>
              <li>
                <div>
                  <img src="img/HTML_logo.png" alt="1" />
                </div>
                <p>HTML</p>
              </li>
              <li>
                <div>
                  <img src="img/CSS_logo.png" alt="1" />
                </div>
                <p>CSS</p>
              </li>
              <li>
                <div>
                  <img src="img/JavaScript_logo.png" alt="1" />
                </div>
                <p>JavaScript</p>
              </li>
              <li>
                <div>
                  <img src="img/jsp_logo.png" alt="1" />
                </div>
                <p>JSP</p>
              </li>
              <li>
                <div>
                  <img src="img/React_logo.png" alt="1" />
                </div>
                <p>React</p>
              </li>
              <li>
                <div>
                  <img src="img/JQeury_logo.png" alt="1" />
                </div>
                <p>JQuery</p>
              </li>
              <li>
                <div>
                  <img src="img/Spring_logo.png" alt="1" />
                </div>
                <p>Spring</p>
              </li>
              <li>
                <div>
                  <img src="img/sql_logo.png" alt="1" />
                </div>
                <p>SQL</p>
              </li>
              <li>
                <div>
                  <img src="img/ibatis_logo.png" alt="1" />
                </div>
                <p>ibatis</p>
              </li>
              <li>
                <div>
                  <img src="img/mybatis_logo.png" alt="1" />
                </div>
                <p>mybatis</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class Project extends Component {
  render() {
    return (
      <div className="project_wrap">
        <div className="project_slide">

        </div>
      </div>
    )
  }
}

export default App2;