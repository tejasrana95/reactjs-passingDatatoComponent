import React from 'react';
import './style.css';

export default function App() {
  const usersData = [
    {
      userid: 1,
      name: 'John Doe',
      fatherName: 'Narasimhan',
      class: '10th B',
      dob: '1990-01-01',
      address: 'Abc Palm Street',
      marks: [
        {
          maths: 99,
          science: 98,
          hindi: 99,
          english: 99.9,
          otherLang: 93,
          history: 30
        }
      ]
    },
    {
      userid: 2,
      name: 'Nilima Grover',
      fatherName: 'Ranya Sunder',
      class: '10th B',
      dob: '1990-01-01',
      address: 'Abc Palm Street',
      marks: [
        {
          maths: 99,
          science: 98,
          hindi: 99,
          english: 99.9,
          otherLang: 93,
          history: 30
        }
      ]
    },
    {
      userid: 3,
      name: 'Amrit Meda',
      fatherName: 'Shakti Parmar',
      class: '10th B',
      dob: '1990-01-01',
      address: 'Abc Palm Street',
      marks: [
        {
          maths: 99,
          science: 98,
          hindi: 99,
          english: 99.9,
          otherLang: 93,
          history: 30
        }
      ]
    },
    {
      userid: 4,
      name: 'Vasudha Cherian',
      fatherName: 'Nishant Prashad',
      class: '10th B',
      dob: '1990-01-01',
      address: 'Abc Palm Street',
      marks: [
        {
          maths: 99,
          science: 98,
          hindi: 99,
          english: 99.9,
          otherLang: 93,
          history: 30
        }
      ]
    }
  ];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
