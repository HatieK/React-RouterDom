export default function Box() {
  const handleClick = (event) => {
    console.log("Button name: ", event.target.name);
  };

  const handleInputChange = (event) => {
    console.log("Input name: ", event.target.name);
    console.log("Input value: ", event.target.value);
  };

  return (
    <div>
      <input name="Input 1" onChange={handleInputChange} />
      <button name="Button 1" onClick={handleClick}>
        Button 1
      </button>
      <button name="Button 2" onClick={handleClick}>
        Button 2
      </button>
    </div>
  );
}
