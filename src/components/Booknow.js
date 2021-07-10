import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {bookUser} from '../store/action';
function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [cnic, setcnic] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [noofpersons, setnoofperons] = useState("")
    const [noofdays, setnoofdays] = useState("")
    
    const dispatch = useDispatch();

    // const book_user = () => {
    //     let user = {
    //         username,
    //         email,
    //         cnic,
    //         noofpersons,
    //         noofdays
    //     }
    //     dispatch(bookUser(user))
    // }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card login_card">
                        <h1>Book Ur Room</h1>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Cnic</label>
                            <input onChange={(e) => setcnic(e.target.value)} value={cnic} type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                            <input onChange={(e) => setphoneno(e.target.value)} value={phoneno} type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Number OF Persons</label>
                            <input onChange={(e) => setnoofperons(e.target.value)} value={noofpersons} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Number OF Days</label>
                            <input onChange={(e) => setnoofdays(e.target.value)} value={noofdays} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        
                        <div class="d-grid gap-2">
                            <button onClick="" class="btn btn-primary" type="button">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;