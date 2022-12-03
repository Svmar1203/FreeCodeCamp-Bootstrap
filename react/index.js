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

function Content() {
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

const h4 = document.createElement("h1");
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

ReactDOM.render(page, document.getElementById("two"));
