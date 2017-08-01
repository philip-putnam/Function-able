import React from 'react';

const Home = () => {
  return (
    <div className='welcomeMessage'>
      <h1>Welcome to Function-able!</h1>
      <p>
        The main functionality of the site is to help people easily create an event or, a function, and then have their friends, guests (or the public) help to crowd fund it, or certain aspects of it. Maybe you need help planning a bachelor/bachelorette party or you really want a certain band to play but it costs more than you have. It never hurts to ask!
      </p>
      <p>
        Written in JavaScript using the React library, this site is still in development! Data is persistent utilizing MongoDB and the back-end is being served using a Node server utilzing Express.
      </p>
      <h3>Known bugs and problems</h3>
      <p>
        As this project is still in development much of the functionality is not currently implemented. Login features using a Redux store and session variable is one of the most glaring issues. With very different user stories and features allowing certain users depending on authorization view or edit events this is a HUGE step toward full functionality.
      </p>

      <ul>
        <li>Styling with CSS or SCSS has not been fully implemented</li>
        <li>Stretch goals and contributing to them have not been fully fleshed out</li>
        <li>There is no profile page</li>
      </ul>

      <h1 className='reactTag'>React + Node + MongoDB</h1>

    </div>
  );
};

export default Home;
