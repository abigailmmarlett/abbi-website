import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Portfolio. Built with React, TypeScript, and Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
