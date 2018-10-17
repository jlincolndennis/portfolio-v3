import React from 'react';
import contactStyle from './05-contact.module.scss';

const Contact = () => {
  return (
    <div className={contactStyle.contact}>
      <h1>I See The Way You're Looking At Me...</h1>
      <p>You've made it this far, admit it, you're interested. Want to know more?</p>

      <h2>Contact</h2>
        <p>
          <a href="mailto:jlincolndennis@gmail.com">jlincolndennis@gmail.com</a>
        </p>

      <h2>Connect</h2>
        <p>
          <a href="https://github.com/jlincolndennis">GitHub</a>&nbsp;|&nbsp;
          <a href="https://twitter.com/jlincolndennis">Twitter</a>&nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/jlincolndennis">LinkedIn</a>&nbsp;|&nbsp;
          <a href="https://angel.co/jlincolndennis">AngelList</a>
        </p>

    </div>
  )
}

export default Contact;
