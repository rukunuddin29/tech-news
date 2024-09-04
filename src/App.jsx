import React from 'react';
import Body from './Component/Body';
import MyFooter from './Component/MyFooter';

function App() {
  return (
    <div className='px-6 py-3 gap-16 bg-gray-900 text-white flex flex-col min-h-screen'>
      <Body />
       <MyFooter></MyFooter>
    </div>
  );
}

export default App;
