const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center -mt-12">
      <p>
        &copy; {year} <span className="text-orange-500">Task Manager</span> |
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
