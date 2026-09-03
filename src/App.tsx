import { use, useRef, useState } from "react";
import Button from "./components/Button"
import Input from "./components/Input";
import ModalDemo from "./demoComponents/ModalDemo";

function App() {


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")


  const [errors,setErrors] = useState<{
    email?:string,
    password?:string
  }>({})

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const getData = () => {
    console.log("Into Get Data")
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

     const newError : {
      email?:string,
      password?:string
     } = {}

    if(!email.trim()){
      newError.email = "Email is empty"

    }

    if(!password.trim()){
      newError.password = "Password is empty"
    }

    if(email && !emailRegEx.test(email)){
      newError.email = "Invalid Email entered"
    }

    if(newError.email){
      emailRef?.current?.focus()     
    }else if(newError.password){
      passwordRef?.current?.focus()
    }
    setErrors(newError)
  }
  

  return (
    <main>
      <h1>Accessible Dashboard</h1>

      <form onSubmit={handleSubmit}>
      <Input id="email"
      label="Email Address"
      description="We'll use this email to sign you in"
      type="text"
      value={email}
      ref={emailRef}
     
      onChange={(event)=>setEmail(event.target.value)}
      error={errors.email}
      />
      <Input id="password"
      label="Password"
      description="We'll use this password to sign you in"
      type="password"
      value={password}
      ref={passwordRef}
      onChange={(event)=>setPassword(event.target.value)}
      error={errors.password}
      />

      <Button type="submit" variant="Primary" onClick={getData}>Sign In</Button>

      </form>

    <ModalDemo></ModalDemo>
    </main>
  );
}

export default App;