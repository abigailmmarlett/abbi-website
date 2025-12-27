import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to connect!
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-button">
              Email Me
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-button">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-button">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
