
const userTable = ({user}) => {
  console.log(user);
  return (
    <>
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    <select onClick={(e)=>handleUpdaterole(e.target.value)}  className="select w-fit">
                      <option value='User'>User</option>
                      <option value='Creator'>Creator</option>
                      <option value='Admin'>Admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost text-base  text-red-600 "
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                </>
  );
};

export default userTable;