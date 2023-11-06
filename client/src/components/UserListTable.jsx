/* eslint-disable no-unused-vars */

import UserListItem from "./UserListItem";
import * as userService from "../services/userService";
import { useEffect,useState } from "react";
import CreateUserModal from "./CreateUserModal";
import ShowInfoModal from "./ShowInfoModal";
import UserDeleteModal from "./UserDeleteModal";
import Spinner from "./Spinner";


export default function UserListTable() {
    const [ users ,setUsers] = useState([]);
    const [showCreate,setShowCreate] = useState(false);
    const [showInfo,setShowInfo] = useState(false);
    const [showDelete,setShowDelete] = useState(false);
    const [selectedUser,setSelectedUser] = useState(null);
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        userService.getAll()
        .then((result) => setUsers(result))
        .catch(err => console.log(err))
        .finally(() =>  setIsLoading(false))
    },[]);
    //create
    const createUserClickHandler = () => {
        setShowCreate(true)
    }

    const hideCreateUserModal = () => {
        setShowCreate(false)
    }
    const userCreateHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData);
        
        const newUser = await userService.create(data);
        setUsers(state => [...state,newUser])

        setShowCreate(false);
    }

      //info
      const showInfoClickHandler =  (userId) => {
        setSelectedUser(userId);
        setShowInfo(true);
    }
    //delete 
    const showDeleteClickHandler = (userId) => {
      setSelectedUser(userId)
      setShowDelete(true)
    }
    const onDelete = async () => {
      //remove user from server
      const result = await userService.remove(selectedUser);
      //remove user from state
      setUsers(state => state.filter(users => users._id !== selectedUser))
      //close modal
      setShowDelete(false)
    }
   

    return (
      <div className="table-wrapper">

          { showCreate &&  <CreateUserModal
           onClose={hideCreateUserModal}
           onUserCreate={userCreateHandler} />}

            {showInfo && <ShowInfoModal
            onClose={ () => setShowInfo(false)}
            onUserDetails={showInfoClickHandler}
            userId={selectedUser}
            />}

            {showDelete && <UserDeleteModal
            onClose={ () => setShowDelete(false)}
            // onDeleteClick={onDelete}
            onDelete={ onDelete }
            />}

            {isLoading && <Spinner/>}
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  className="icon active-icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

                {users.map( user => (
                    <UserListItem
                        userId={user._id}
                        createdAt={user.createdAt}
                        email={user.email}
                        imageUrl={user.imageUrl}
                        key={user._id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        phoneNumber={user.phoneNumber}
                        onInfoClick={showInfoClickHandler}
                        onDeleteClick={showDeleteClickHandler}
                    />
                ))}

          </tbody>

        </table>
      <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
      </div>
    );
}