import { useState, ChangeEvent, FormEvent } from "react";
import { getData } from "../utils/data-utils";
import FormInput from "../components/form-input/form-input"; 

  import '../App.css';

  // TypeScript declarations
  type User = {
    id: number,
    name: string,
    email: string,
    password: string
  }

  const defaultFormFields = {
    email: '',
    password: '',
  }

  const SignIn = () => {
    // react hooks
    const [user, setUser] = useState<User | null>()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
      return (
        setFormFields(defaultFormFields)
      );
    }

    // handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        // make the API call
        const res:User = await getData(
          'http://localhost:8000/login', email, password
        )
        setUser(res);
        resetFormFields()
      } catch (error) {
        alert('User Sign In Failed');
      }
    };

    const reload = () => {
      setUser(null);
      resetFormFields()
    };

    return (
      <div className='SignIn-header'>
        <h1>
          { user && `Welcome! ${user.name}`}
        </h1>
        <div className="card">
          <h2>로그인</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              type="email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              type='password'
              required
              name='password'
              value={password}
              onChange={handleChange}
            />
            <div className="button-group">
              <button type="submit">로그인</button>
              <span>
                <button type="button" onClick={reload}>초기화</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default SignIn;