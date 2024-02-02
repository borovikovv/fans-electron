import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <h1>This is main page</h1>
      <div className="Hello">
        <Link to="/user">Go to User</Link>
      </div>
    </div>
  );
}
