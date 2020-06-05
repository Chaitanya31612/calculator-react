const onFormSubmit = (e) => {
    e.preventDefault();
  }
  
  const handleAdd = () => {
    const numone = parseInt(document.getElementById('val1').value);
    const numtwo = parseInt(document.getElementById('val2').value);
  
    alert(numone + numtwo);
  }
  
  const handleSubstract = () => {
    const numone = parseInt(document.getElementById('val1').value);
    const numtwo = parseInt(document.getElementById('val2').value);
  
    alert(numone - numtwo);
  }
  
  const handleMult = () => {
    const numone = parseInt(document.getElementById('val1').value);
    const numtwo = parseInt(document.getElementById('val2').value);
  
    alert(numone * numtwo);
  }
  
  const handleDivide = () => {
    const numone = parseInt(document.getElementById('val1').value);
    const numtwo = parseInt(document.getElementById('val2').value);
  
    alert(numone / numtwo);
  }
  
  const handleClear = () => {
    document.getElementById('val1').value = '';
    document.getElementById('val2').value = '';
  }
  
  const template = (
    <div>
      <h1>Calcutation App</h1>
      <p>Put your calculations in the hand of computer</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="valone" id="val1" required/>
        <input type="text" name="valtwo" id="val2" required/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubstract}>Substract</button>
        <button onClick={handleMult}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, document.getElementById('app'));
  
  
  