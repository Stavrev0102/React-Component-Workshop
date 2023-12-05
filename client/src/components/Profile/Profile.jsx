
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../Profile/Profile.module.css';
import { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import * as authService from '../../services/authService'
import useForm from '../../hooks/useForm';
import AuthContext from '../../context/authContext';

import * as feedBackService from '../../services/feedBackService'
import reducer from './feedbackReducer';
import Spinner from '../Spinner/Spinner';
 

export default function Profile () {

    const { userId } = useParams();
    const [user,setUser] = useState({});
    // const [feedback,setFeedback] = useState([]);
    const [feedback,dispatch] = useReducer(reducer,[])
    const { email,_id } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true);
    let currentUsers = []


    useEffect(() => {
            authService.getUserById()
            .then(res => {
               console.log(Object.values(res))
               for (const el of Object.values(res)) {
                  currentUsers.push(el.res._id)
               }
               if(!currentUsers.includes(userId)){
                navigate('/')
               }
               console.log(currentUsers)
               for (const user of res) {
                 if(user.res._id === userId){
                   setUser(user.res)
                   setIsLoading(false)
                        // console.log(res)
                    }
                }
                
            })
            .catch(err => {
             console.log(err.message)
            })

            feedBackService.getAll(userId)
            .then((result) => {
              dispatch({
                type:'GET_FEEDBACK',
                payload:result
              })
            });
    },[userId]);

    // console.log(feedback);
    // const [feedbacks,setFeedback] = useState('');

    const addFeedbackHandler = async(values) => {
        const newFeedback = await feedBackService.create(
            userId,
            values.feedback,
          );
            // setFeedback(state => [...state,{...newFeedback, owner:{ email } }])
            newFeedback.owner = {email};
            // setFeedback('')

            dispatch({
              type:'CREATE_FEEDBACK',
              payload:newFeedback
            })

    }

    
    const {values,onChange,onSubmit} = useForm(addFeedbackHandler,'')

    const contactClickHandler = () => {
      const confirmation = confirm(`Phone Number : ${user.phoneNumber}`)

    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.spinner}>
          {isLoading === true && <Spinner/>}
        </div>
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
              <div className="text-center mt-3 ">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Seller
                </span>
                <h5 className={styles.username}>{user.username}</h5>
                <span className={styles.phone}>
                  Phone Number: {user.phoneNumber}
                </span>
                <br />
                <span className={styles.email}>Email: {user.email}</span>
                <div className="px-4 mt-1">
                  <div className={styles.details}>
                    <h2 CLA>See what people think ?</h2>
                    <ul className={styles.socialList}>
                      <li>
                        <i className="fa fa-facebook" />
                      </li>

                      <li>
                        <i className="fa fa-instagram" />
                      </li>
                      <li>
                        <i className="fa fa-linkedin" />
                      </li>
                    </ul>

                    <div className={styles.commentsDiv}>
                      <ul>
                        {feedback.map(({ _id, text, owner: { email } }) => (
                          <li key={_id} className={styles.comment}>
                            <p>
                              <span>
                                {email}: <br />
                              </span>{" "}
                              {text}
                            </p>
                          </li>
                        ))}
                      </ul>
                      {feedback.length === 0 && (
                        <p className={styles.noComments}>
                          No feedback for this user.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {userId !== _id && (
                  <article className={styles.createComment}>
                    <label>What are you think about {user.username}</label>
                    <form className={styles.form} onSubmit={onSubmit}>
                      <textarea
                        className={styles.textArea}
                        name="feedback"
                        placeholder="What is your experience with this user..."
                        value={values.feedback}
                        onChange={onChange}
                        required
                      />
                      <input className={styles.buttonAdd} type="submit"/>
                    </form>
                  </article>
                )}

                <div className={styles.buttons}>
                  <button
                    onClick={contactClickHandler}
                    className="btn btn-primary px-4 ms-3"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}