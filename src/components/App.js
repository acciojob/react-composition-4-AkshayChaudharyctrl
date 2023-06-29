
import React from "react";
import Form from "./../Form";
import './../styles/App.css';

const App = () => {
  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
  ];

  return (
    <div>
     <Form onSubmit={handleSubmit} fields={fields} />
    </div>
  );
};

export default App;