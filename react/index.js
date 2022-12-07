//function MainContent() {
// return <h1>I'm learning React!</h1>;
//}

//function Navbar() {
// return <h2>Hello, This is React!</h2>;
//}

//ReactDOM.render(
// <div>
//  <MainContent />
// <Navbar />
//</div>,
// document.getElementById("root")
//);

/*function Content() {
  return (
    <div className="all">
      <h1>My awesome website in React</h1>
      <h2>Reasons I love React</h2>
      <ol>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's a hireable skill</li>
        <li>It's actively maintained by skilled people</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<Content />, document.getElementById("root"));
*/

/////////////////////////

/*const h4 = document.createElement("h1");
h4.textContent = "Ths is an Imperative way to program";
h4.className = "header";
document.getElementById("heade").append(h4);
console.log(h4);

const page = (
  <div>
    <h1>This is JSX</h1>
    <p>This is paragraph</p>
  </div>
);
console.log(page);

ReactDOM.render(page, document.getElementById("two"));
*/

/////////////////////////////////////

/*ReactDOM.render(
  <nav>
    <h1>Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>,
  document.getElementById("three")
);
*/

////////////////////////////////////

/*const navbar = (
  <div className="navb">
    <h1>My awesome website in React</h1>
    <h2>Reasons I love React</h2>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);
ReactDOM.render(navbar, document.getElementById("three"));
*/

///////////////////////////////////////

/*const funfacts = (
  <nav>
    <img src="https://blog.logrocket.com/wp-content/uploads/2021/03/React_grid_components.png" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first relesed in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </nav>
);

ReactDOM.render(funfacts, document.getElementById("root"));
*/

////////////////////////////////////

function TemporaryName() {
  return (
    <div>
      <img src="https://blog.logrocket.com/wp-content/uploads/2021/03/React_grid_components.png" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first relesed in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TemporaryName />);

///////////////////////////////////

function Header() {
  return (
    <header>
      <nav>
        <img
          className="babel"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1280px-Babel_Logo.svg.png"
        />
        <ul className="nav-item">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1 className="babel1">What is Babel</h1>
      <ul>
        <li>It provides an easy, convenient way to prototype with Babel</li>
        <li>
          Using @babel/standalone, you can get started using Babel with just a
          simple script tag in your HTML
        </li>
        <li>
          If you're using Babel in production, you should normally not use
          @babel/standalone. Instead, you should use a build system running on
          Node.js, such as Webpack, Rollup, or Parcel, to transpile your JS
          ahead of time.
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>@ 2022 Svetlana's development. All rights reserved.</p>
    </footer>
  );
}

function Navbar() {
  return (
    <nav className="boot-nav">
      <img
        src="https://media.istockphoto.com/id/696701472/vector/boot-camp-round-grunge-ribbon-stamp.jpg?s=612x612&w=0&k=20&c=Fd_fdexqema5kNICS_L6ZX96cR6n_f9EwSVeUV_UAyI="
        width="50px"
      />
      <ul className="boot">
        <li>Developer</li>
        <li>Freelancing</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

function CustomPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Navbar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("two")).render(<CustomPage />);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<CustomPage />)
