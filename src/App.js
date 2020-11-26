import React, { Component } from 'react';
import './App.css';
import FixedWidthIcons from "./icon/icons";

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
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'nevi'
    }
    this.scrollHandler = this.scrollHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('click', this.clickHandler);
  }
  scrollHandler(e) {
    if (window.scrollY > 400) {
      this.setState({ isActive: 'nevi-active' });
      console.log('d');
    } else if (window.scrollY <= 400) {
      this.setState({ isActive: 'nevi' });
    }
  }

  clickHandler(e) {
    window.scrollY = 400;
  }

  render() {
    return (
      <div className={this.state.isActive}>
        <div className="nevi_wrap">
          <div className="navi-left page-scroll">
            <a className="navbar-home" href="#page-top">Hyein World</a>
          </div>
          <div className="navi-right">
            <ul>
              <li className="page-scroll">
                <a href="#portfolio">About</a>
              </li>
              <li className="page-scroll">
                <a href="#about" onClick={this.clickHandler}>Skills</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Technic</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Project</a>
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
            <h1>About <i>'Hyein'</i></h1>
          </div>
          <div className="about_content">
            <div className="about_img">
              <img src={process.env.PUBLIC_URL + "/img/my_photo.jpg"} />
            </div>
            <div className="about_text_wrap">
              <h4>"Never Back Down"</h4>
              <p>
                개발자라면 갖춰야 할 덕목은 탄탄한 <strong>"Mental"</strong> 이라고 생각합니다.
                어려운 문제가 닥쳐오더라도 단단한 멘탈을 기반으로
                관심가지고 노력하면 결국에는 자신의 한계를 뛰어넘을 수 있습니다.
            </p>
              <p>
                저는 항상 사회생활을 하면서 서로에게 win-win이 되는 관계를 지향해왔습니다.
                근무하면서 의자나 책상처럼 그저 회사를 구성하는 존재가 되는 것,
                단순히 생계수단이 되는 것이 아니라 반드시 어느 자리에서든 필요한 사람이 되어야 한다고 생각합니다.
            </p>
              <h4>"Values"</h4>
              <ul>
                <li><FixedWidthIcons />위기를 기회로 바꾸자</li>
                <li><FixedWidthIcons />따라올 자 없다고 자부하는 근면성실함과 책임감</li>
                <li><FixedWidthIcons />원만한 대인관계를 바탕으로 한 효율적인 커뮤니케이션 스킬</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
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
                  <img src={process.env.PUBLIC_URL + "/img/Java_logo.png"} alt="1" />
                </div>
                <p>Java</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/HTML_logo.png"} alt="1" />
                </div>
                <p>HTML</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/CSS_logo.png"} alt="1" />
                </div>
                <p>CSS</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/JavaScript_logo.png"} alt="1" />
                </div>
                <p>JavaScript</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/jsp_logo.png"} alt="1" />
                </div>
                <p>JSP</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/React_logo.png"} alt="1" />
                </div>
                <p>React</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/JQeury_logo.png"} alt="1" />
                </div>
                <p>JQuery</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/Spring_logo.png"} alt="1" />
                </div>
                <p>Spring</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/sql_logo.png"} alt="1" />
                </div>
                <p>SQL</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/ibatis_logo.png"} alt="1" />
                </div>
                <p>ibatis</p>
              </li>
              <li>
                <div>
                  <img src={process.env.PUBLIC_URL + "/img/mybatis_logo.png"} alt="1" />
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
      <div className="project">
        <div className="project_wrap">
          <div className="project_title">
            <h1>Project</h1>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src={process.env.PUBLIC_URL + "/img/project_kakao.png"} />
            </div>
            <div className="content">
              <span>2019.05.27 ~ 2019.06.11 (15일)</span>
              <h4>카카오프렌즈샵 사이트 벤치마킹</h4>
              <p>사용 기술: Java, HTML, CSS, Javascript, Ajax, Bootstrap, JSP, EL, JSTL, SQL, ibatis, jQuery, 모델2</p>
              <ul>
                <li><FixedWidthIcons />ajax와 json을 사용하여 추가기능 구현</li>
                <li><FixedWidthIcons />카테고리별, 옵션별(캐릭터, 최신, 가격, 글로벌 배송) 상품 정렬</li>
                <li><FixedWidthIcons />상품갯수에 따라 페이징 개수가 다르게 표현 (페이징 처리)</li>
              </ul>
            </div>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src={process.env.PUBLIC_URL + "/img/project_camping.jpg"} />
            </div>
            <div className="content">
              <span>2019.7.22 ~ 2019.8.19 (29일)</span>
              <h4>캠핑 사이트 개발</h4>
              <p>사용 기술: Java, HTML, CSS, Javascript, Ajax, Bootstrap, JSP, EL, JSTL, SQL, mybatis, jQuery, circles.min.js, owlcarousel</p>
              <ul>
                <li><FixedWidthIcons />Ajax를 사용하여 키워드별, 지역별 검색기능(클릭시 캠핑상세페이지로 이동)</li>
                <li><FixedWidthIcons />circles-master library를 사용하여 카테고리별 캠핑장 개수 통계</li>
                <li><FixedWidthIcons />OwlCarousel library를 사용하여 북마크 및 최신순 캠핑장 목록 슬라이드</li>
              </ul>
            </div>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src={process.env.PUBLIC_URL + "/img/project_kanbanboard.PNG"} />
            </div>
            <div className="content">
              <span>2020.05.18 ~ 2020.05.25 (7일)</span>
              <h4>칸반 앱 만들기</h4>
              <p>사용 기술: React, CSS, Javascript</p>
              <p>description: 프로젝트 관리 앱</p>
              <h3>Learn</h3>
              <ul>
                <li><FixedWidthIcons />React 적응하기</li>
                <li><FixedWidthIcons />컴포넌트에 대해 이해하기</li>
                <li><FixedWidthIcons />토글 기능</li>
              </ul>
            </div>
          </div>
          <div className="project_content">
            <div className="content_img">
              <img src={process.env.PUBLIC_URL + "/img/project_dropZone.PNG"} />
            </div>
            <div className="content">
              <span>2020.05.26 ~ 2020.06.03 (8일)</span>
              <h4>DropZone</h4>
              <p>사용 기술: React, CSS, Javascript, React, DropZone, axios</p>
              <p>description: DropZone 영역에 이미지 업로드시 이미지 내용 보여주기</p>
              <h3>Learn</h3>
              <ul>
                <li><FixedWidthIcons />DropZone library</li>
                <li><FixedWidthIcons />axios, fileAPI</li>
                <li><FixedWidthIcons />base64 인코딩방식</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App2;