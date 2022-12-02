ReactDOM.render(
  <ul>
    <li>Bananas</li>
    <li>Strawberies</li>
  </ul>,
  document.getElementById("root")
);

function MainContent() {
  return <h1>I'm learning React!</h1>;
}

function Navbar() {
  return <h2>Hello, This is React!</h2>;
}

ReactDOM.render(
  <div>
    <MainContent />
    <Navbar />
  </div>,
  document.getElementById("root")
);

const h1 = document.createElement("h1");
h1.textContent = "Ths is an Imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
