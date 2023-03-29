import "../style/Navbar.css";
function Navbar() {
  return (
    <div>
      <h1 className="task">Tasks</h1>
      <nav>
        <li>Incoming</li>
        <li>Today</li>
        <li>Calender</li>
      </nav>
    </div>
  );
}
export default Navbar;
