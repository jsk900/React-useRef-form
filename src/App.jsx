import { useRef } from 'react';
import './App.css';

const App = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const formDataRef = useRef({ name: '', age: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    formDataRef.current.name = nameRef.current.value;
    formDataRef.current.age = ageRef.current.value;
    formDataRef.current.email = emailRef.current.value;

    nameRef.current.value = '';
    ageRef.current.value = '';
    emailRef.current.value = '';
  };

  console.log(formDataRef.current);

  return (
    <main>
      <h1>Welcome to React</h1>
      <form>
        <input
          type='text'
          placeholder='Name'
          //value={nameRef.current}
          ref={nameRef}
        />
        <input
          type='text'
          placeholder='Age'
          //value={ageRef.current}
          ref={ageRef}
        />
        <input
          type='text'
          placeholder='Email'
          //value={emailRef.current}
          ref={emailRef}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <p>{formDataRef.current.name}</p>
      <p>{formDataRef.current.age}</p>
      <p>{formDataRef.current.email}</p>
    </main>
  );
};

export default App;
