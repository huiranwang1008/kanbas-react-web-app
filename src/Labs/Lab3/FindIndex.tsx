const FindIndex = () => {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['1', '3'];
  
    const fourIndex = numberArray1.findIndex(a => a === 2);
    const string3Index = stringArray1.findIndex(a => a === '1');
  
    return (
        <div id="wd-find-function">
        <h4>FindIndex Function</h4>
        fourIndex = {2} <br />
        string3Index = {'1'} <hr />
      </div>
  
    );
  };
  
  export default FindIndex;