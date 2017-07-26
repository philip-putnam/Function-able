import React from 'react';

const CreateFunction = () => {
  return (
    <div>
      <h1>Create a new Function</h1>
      <form>
        <label>Function/Event Name: </label>
        <input type='text' /><br/>
        <label>Function Date: </label>
        <input type='text' /><br/>
        <label>Funding Deadline: </label>
        <input type='text' /><br/>
        <label>Is this function dependent on meeting budget goals? </label>
        <input type='text' /><br/>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default CreateFunction;
