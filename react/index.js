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

const funfacts = (
  <nav>
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
