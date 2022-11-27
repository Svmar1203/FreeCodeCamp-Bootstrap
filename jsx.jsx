const JSX = (
  <div>
    <h1>Hello</h1>
    <p>This is </p>
    <ul>
      <li>JSX</li>
      <li>JSX</li>
      <li>JSX</li>
    </ul>
  </div>
);

const JSX = (
  <div>
    {/*This is comments*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

ReactDOM.render(JSX, document.getElementById("challenge-node"));

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

const MyComponent = function () {
  // Change code below this line
  return <div>One way</div>;

  // Change code above this line
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line

    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );

    // Change code above this line
  }
}

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* Change code below this line */}
      <TypesOfFruit />

      {/* Change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* Change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
        <Vegetables />
      </div>
    );
  }
}
