import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-10 py-3">
      <p className="text-[#637588] text-sm font-normal leading-normal">© 2023 SkyLink. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Terms of Service</a>
        <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;