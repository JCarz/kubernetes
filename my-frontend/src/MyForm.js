import  React,{useState} from 'react'

const MyForm = () => {
    const [formData,setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Send form data to the Express server
          const response = await fetch('http://localhost:3001/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            console.log('Form submitted successfully');
            // You can add logic here to handle a successful submission
          } else {
            console.error('Form submission failed');
            // You can add logic here to handle a failed submission
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      
      
    
  return (
    <div>
      <h2>My Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MyForm
/**
 * This compoment sets a form with 3 fields first name last name email. the form DATA is managed
 * useState hook and handleChange funtion. This updates the state as the user types
 * handleSubmit fution logs the form data to the console. but you can relace this 
 */