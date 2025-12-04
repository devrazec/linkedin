import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>NotFound Page</h1>
      <Link to="/linkedin">Linkedin</Link> |{' '}
      <Link to="/notfound">Not Found</Link>
    </div>
  );
}
