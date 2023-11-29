
import { useParams } from 'react-router-dom';
import styles from '../Profile/Profile.module.css';
import { useContext, useEffect, useMemo, useState } from 'react';
import * as authService from '../../services/authService'
import useForm from '../../hooks/useForm';
import AuthContext from '../../context/authContext';

import * as feedBackService from '../../services/feedBackService'
export default function Profile () {

    const { userId } = useParams();
    const [user,setUser] = useState({});
    const [comments,setComments] = useState([]);
    const { email } = useContext(AuthContext);


    useEffect(() => {
            authService.getUserById()
            .then(res => {
                for (const user of res) {
                    if(user.res._id === userId){
                        setUser(user.res)
                    }
                }
            })

            feedBackService.getAll(userId)
            .then(setComments);
    },[userId]);

    console.log(comments);

    const addCommentHandler = async(values) => {
        const newComment = await feedBackService.create(
            userId,
            values.comment,
          );
            setComments(state => [...state,{...newComment, owner:{ email } }])
    }

    const initialValues = useMemo(() => ({
        comment:'',
    }),[])
    const {values,onChange,onSubmit} = useForm(addCommentHandler,initialValues)
    
    return (
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className={styles.card}>
              <div className="text-center">
                <img
                  src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
                  width={100}
                  className="rounded-circle"
                />
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Seller
                </span>
                <h5 className="mt-2 mb-0">{user.username}</h5>
                <span>Phone Number {user.phoneNumber}</span>
                <br />
                <span>Email {user.email}</span>
                <div className="px-4 mt-1">

                  <div className="details-comments">
                  <h2>About this Seller</h2>
                  <ul className={styles.socialList}>
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-dribbble" />
                  </li>
                  <li>
                    <i className="fa fa-instagram" />
                  </li>
                  <li>
                    <i className="fa fa-linkedin" />
                  </li>
                  <li>
                    <i className="fa fa-google" />
                  </li>
                </ul>
                    <ul>
                      {comments.map(({ _id, text, owner: { email } }) => (
                        <li key={_id} className="comment">
                          <p>
                            {email}: {text}
                          </p>
                        </li>
                      ))}
                    </ul>
                    {comments.length === 0 && (
                      <p className="no-comment">No comments.</p>
                    )}
                  </div>
                </div>
               

                <article className="create-comment">
          <label>What are you think about {user.username}</label>
          <form className="form" onSubmit={onSubmit}>
            <textarea
              name="comment"
              placeholder="What is your experience with this user..."
              value={values.comment}
              onChange={onChange}
            />
            <input
              className={styles.buttons}
              type="submit"
              defaultValue="Add Comment"
            />
          </form>
        </article>

                <div className={styles.buttons}>
                  <button className="btn btn-outline-primary px-4">
                    Message
                  </button>
                  <button className="btn btn-primary px-4 ms-3">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}