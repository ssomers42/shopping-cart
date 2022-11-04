import './css/navbar.css';

//create state in Home for current tab
//clicking nav items updates state
//coniditonal rendering based on state
const Navbar = ({ setTab, cart }) => {
  let links = [...document.getElementsByClassName('tab')];

  const setActiveTab = (e) => {
    //onclick set all tabs to inactive. Add active class to clicked tab.
    links.forEach((ele) => {
      ele.classList.remove('active');
    });
    e.target.classList.add('active');
    let tab = e.target.textContent;
    console.log(tab);
    setTab(tab);
  };

  (function bindEvents() {
    links.forEach((ele) => {
      ele.addEventListener('click', setActiveTab);
    });
  })();

  return (
    <div id="navbar">
      <ul>
        <span className="tab active">Home</span>
        <div>
          <span id="cart-tab" className="tab">
            Cart
          </span>
          <span>({cart.length})</span>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
