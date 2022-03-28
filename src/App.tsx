import React from 'react';
import './App.css';
import Container from './components/Container';
import Teacher from './components/Teacher';

const App: React.FC = () => {

  const teacherList = [
    {
      firstName: "Sakib",
      lastName: "Ahmed"
    },
    {
      firstName: "Jahid",
      lastName: "Alom"
    },
    {
      firstName: "Sultan",
      lastName: "Shah"
    },
  ]
  return (
    <div className='App'>
      <Container name="Foyjunnesa Mayna" messages={22} isLogged={false} />
      <Teacher teacherList={teacherList} />
    </div>


  );
}

export default App;
