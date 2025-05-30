import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT
    navigate('/secret-admin-login');  // Redirect to admin login
  };

  return (
    <header className="flex justify-between p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      {/* <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button> */}
    </header>
  );
};

export default AdminHeader;
