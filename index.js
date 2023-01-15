const Box = (props) => {
  //  Write your code here.

  const { className, text } = props;
  return <div className={`${className}`}>{text}</div>;
};

const element = (
  //  Write your code here.
  <div shadow class="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div shadow className="container">
      <Box className="small" text="Small" />
      <Box className="medium" text="Medium" />
      <Box className="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
