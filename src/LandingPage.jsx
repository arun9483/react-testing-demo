import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // this page contains only static content
  return (
    <div className="landing-page grid-container">
      <header className="grid-item">
        <h1>This is landing page</h1>
        <h3>landing page description need to be put here.</h3>
      </header>
      <nav className="grid-item">
        <h3>navigation</h3>
        <ul>
          <li>nav one</li>
          <li>nav two</li>
          <li>
            <details>
              <summary>
                <h4>nested navigation links</h4>
              </summary>
              <ol>
                <li>nested one</li>
                <li>nested two</li>
                <li>nested three</li>
                <li>nested four</li>
              </ol>
            </details>
          </li>
          <li>nav three</li>
        </ul>
      </nav>
      <main className="grid-item">
        <h3>this is main content area</h3>
        <section className="about">
          <h4>about company</h4>
          <p>
            Consectetur ipsum nostrud ea sint anim. Cillum nostrud aliqua cillum
            proident cillum ex non id qui eiusmod cillum nulla nisi sunt. Duis
            ea fugiat pariatur pariatur adipisicing voluptate consequat est
            excepteur aute tempor sint. Tempor tempor est proident laboris
            laboris dolor labore ea officia excepteur sit ut consectetur. Minim
            pariatur amet irure eiusmod dolore commodo et irure. Excepteur
            pariatur est consequat nulla eu labore sint elit nostrud enim aute
            est. Quis ex excepteur magna anim nulla commodo velit Lorem ad duis
            sunt fugiat. Do ipsum ea enim adipisicing officia consequat. Nostrud
            consectetur fugiat elit mollit minim mollit nostrud laboris id.
            Velit anim exercitation irure dolor. Mollit adipisicing fugiat non
            nisi occaecat quis labore duis ea tempor ea dolore aliquip minim.
          </p>
        </section>
        <section className="products">
          <h4>Products</h4>
          <div>
            Consectetur ipsum nostrud ea sint anim. Cillum nostrud aliqua cillum
            proident cillum ex non id qui eiusmod cillum nulla nisi sunt. Duis
            ea fugiat pariatur pariatur adipisicing voluptate consequat est
            excepteur aute tempor sint. Tempor tempor est proident laboris
            laboris dolor labore ea officia excepteur sit ut consectetur. Minim
            pariatur amet irure eiusmod dolore commodo et irure. Excepteur
            pariatur est consequat nulla eu labore sint elit nostrud enim aute
            est. Quis ex excepteur magna anim nulla commodo velit Lorem ad duis
            sunt fugiat. Do ipsum ea enim adipisicing officia consequat. Nostrud
            consectetur fugiat elit mollit minim mollit nostrud laboris id.
            Velit anim exercitation irure dolor. Mollit adipisicing fugiat non
            nisi occaecat quis labore duis ea tempor ea dolore aliquip minim.
          </div>
        </section>
        <div className="about">
          <h4>Services</h4>
          <p>
            Consectetur ipsum nostrud ea sint anim. Cillum nostrud aliqua cillum
            proident cillum ex non id qui eiusmod cillum nulla nisi sunt. Duis
            ea fugiat pariatur pariatur adipisicing voluptate consequat est
            excepteur aute tempor sint. Tempor tempor est proident laboris
            laboris dolor labore ea officia excepteur sit ut consectetur. Minim
            pariatur amet irure eiusmod dolore commodo et irure. Excepteur
            pariatur est consequat nulla eu labore sint elit nostrud enim aute
            est. Quis ex excepteur magna anim nulla commodo velit Lorem ad duis
            sunt fugiat. Do ipsum ea enim adipisicing officia consequat. Nostrud
            consectetur fugiat elit mollit minim mollit nostrud laboris id.
            Velit anim exercitation irure dolor. Mollit adipisicing fugiat non
            nisi occaecat quis labore duis ea tempor ea dolore aliquip minim.
          </p>
        </div>
      </main>
      <footer className="grid-item">footer goes here</footer>
    </div>
  );
};

export default LandingPage;
