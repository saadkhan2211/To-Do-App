
import { useState } from 'react';
import './App.scss';
import './component/Plan';
// import Plan from './component/Plan';

const App = () => {

  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [date, setDate] = useState([]);

  var d = new Date();

  const changeHandler = (text) => {
    setValue(text.target.value);
  }

  const storeValue = () => {
    setItems((items) => {
      const updatedList = [...items, value];
      setValue('');
      return updatedList;
    });
    setDate((date) => {
      const updatedDate = [...date, d.toLocaleTimeString()]
      return updatedDate;
    })
  }

  const removeItem = (i) => {
    const updatedList = items.filter((elem, id) => {
      return i !== id;
    })
    setItems(updatedList);
  }

  return (
    <div className="container my-5">
      <h1 className='text-center text-white'>Today's Plan</h1>
      <div className='row align-items-center justify-content-center my-5'>
        <div className='col-6 input-group w-75'>
          <input className='form-control border-0 shadow' type='text'
            placeholder='Write Plan Here' value={value} onChange={changeHandler}/>
          <button className='btn btn-success input-group-text shadow px-4' onClick={storeValue}>Add</button>
        </div>
      </div>
      <div className='row align-items-center justify-content-center'>
      <table className="table table-striped shadow w-75">
            <thead>
              <tr className='text-center'>
                <th scope="col">#</th>
                <th scope="col">To Do</th>
                <th scope="col">Created Date</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                items !== [] && items.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{item}</td>
                      <td>{date[i]}</td>
                      <td>
                        <button className='btn btn-danger' onClick={() => removeItem(i)}><i className='bi bi-trash'></i></button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
