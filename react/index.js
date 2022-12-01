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

ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.getElementById("root")
);
