import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/secret-admin-login');
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-200">
      <h1 className="text-2xl font-bold text-cyan-700 tracking-tight">
        Admin Dashboard
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full font-medium transition"
      >
        Logout
      </button>
    </header>
  );
};

export default AdminHeader;
