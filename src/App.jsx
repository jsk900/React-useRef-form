import { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
    });

    nameRef.current.value = '';
    ageRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <main>
      <h1>Welcome to React</h1>
      <form>
        <input type='text' placeholder='Name' ref={nameRef} />
        <input type='text' placeholder='Age' ref={ageRef} />
        <input type='text' placeholder='Email' ref={emailRef} />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <p>{formData.name}</p>
      <p>{formData.age}</p>
      <p>{formData.email}</p>
    </main>
  );
};

export default App;
