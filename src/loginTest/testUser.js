import { useRef, useState, useEffect} from "react";



const TestUser = ()=>{
  const [submit,setSubmit]= useState("Sign up")
  return(
    <div>
    <h1 data-testid="cypress-h1">Testing log in page</h1>
    <div>
    <span>name</span>
    <input type='text'/>
    <span>email</span>
    <input type='email'/>
    <span>password</span>
    <input type='text'/>
    </div>
    <div className="sumbit">
      <button>Submit</button>
    </div>
    </div>
  )
}
export default TestUser
