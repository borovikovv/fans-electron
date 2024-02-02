import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div>
      <h1>This is user page</h1>
      <div className="Hello">
        <Link to="/">Go to Main</Link>
      </div>
    </div>
  );
}
