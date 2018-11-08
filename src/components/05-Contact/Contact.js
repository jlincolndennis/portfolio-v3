import React from 'react';
import contactStyle from './contact.module.scss';

const Contact = () => {
  return (
    <div id="contact" className={contactStyle.contact}>
      <h1>Let's Chat</h1>
      <div className={contactStyle.contactCopy}>
      <p>You've made it this far; admit it, you're interested. Get in touch with me! I am always open to dicuss opportunities, projects, comic books, and probably other interesting things too.</p>

      <p>And here, take my <a href="https://drive.google.com/file/d/129oLjhPBj5U1ximblAyND-8iotuGaCrn/view?usp=sharing">resume</a>. It might come in handy!</p>
      </div>

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
