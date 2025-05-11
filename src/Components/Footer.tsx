import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='w-full h-screen bg-blue-800'>
      <div className='w-full h-6/10 bg-red-600 flex flex-col items-center'>
        <div className='w-9/10 h-1/5 flex items-center justify-end gap-10 text-white font-["Russo_One"]'>
          <a href="/payment-solution">Payment Solution</a>
          <a href="/integrations">Integrations</a>
          <a href="/api">API</a>
          <a href="/signin">Sign in</a>
        </div>
        <div className='w-9/10 h-4/5 bg-green-700'>

        </div>
      </div>
      <div className='w-full h-4/10'>

      </div>
    </footer>
  );
};

export default Footer;
