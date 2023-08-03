import ContentBody from "../ContentBody";
import ContentHeader from "../ContentHeader";
import axios from "axios";
import React, { useState, useEffect } from "react";

const headerLinks = ["User"];
const Url = "http://localhost:3001/api/employees";

const PageHeader = () => {
  return <ContentHeader name="User" links={headerLinks}></ContentHeader>;
};

const PageContent = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    age: "",
    position: "",
  });
  useEffect(() => {
    // Fetch user data from the server when the component mounts
    axios
      .get(Url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleEditButton = (id) => {
    const userToEdit = users.find(({ _id }) => _id === id);
    setShowForm(false);
    setFormData(userToEdit);
  };
  const handleDeleteUser = (id) => {
    axios
      .delete(Url + "/" + id)
      .then((response) => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const handleAddButton = () => {
    setShowForm(false);
    setFormData({
      _id: "",
      name: "",
      age: "",
      position: "",
    });
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleAddButton}>Add User</button>
      <UserForm
        users={users}
        setUsers={setUsers}
        showForm={showForm}
        setShowForm={setShowForm}
        formData={formData}
        setFormData={setFormData}
      />
      <table className="table table-striped table-bordered table-hover table-condensed table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.position}</td>
              <td>
                <button onClick={() => handleEditButton(user._id)}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserForm = (props) => {
  const { formData, setFormData, users, setUsers, showForm, setShowForm } =
    props;
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleAddUser = () => {
    let addUser = {
      name: formData.name,
      age: formData.age,
      position: formData.position,
    };
    axios
      .post(Url, addUser)
      .then((response) => {
        setUsers([...users, response.data]);
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      })
      .finally(() => {
        setShowForm(true);
      });
  };

  const handleUpdateUser = () => {
    axios
      .put(Url + "/" + formData._id, formData) // Replace with actual API endpoint and data
      .then(() => {
        setUsers(
          users.map((c) => {
            return c._id === formData._id ? formData : c;
          }),
        );
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      })
      .finally(() => {
        setShowForm(true);
      });
  };

  return (
    <form hidden={showForm}>
      <div>
        <div>Name</div>
        <input
          key="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <div>Age</div>
        <input
          key="age"
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <div>Position</div>
        <input
          key="position"
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          placeholder="Position"
        />
      </div>
      {formData._id ? (
        <>
          <button type="button" onClick={handleUpdateUser}>
            Update
          </button>
          <button type="button" onClick={() => setShowForm(true)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={handleAddUser}>
            Add
          </button>
          <button type="button" onClick={() => setShowForm(true)}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
};

const User = () => {
  return (
    <ContentBody
      pageHeader={<PageHeader />}
      pageContent={<PageContent />}
    ></ContentBody>
  );
};

export default User;
