export default function Profile({ user }) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Profile</h2>
        {!user ? <p className="text-sm">No user data.</p> : (
          <div className="mt-4">
            <p><strong>Name:</strong> {user.name}</p>
            <p className="mt-1"><strong>Email:</strong> {user.email}</p>
            <p className="mt-1"><strong>Role:</strong> {user.role}</p>
          </div>
        )}
      </div>
    );
  }
  