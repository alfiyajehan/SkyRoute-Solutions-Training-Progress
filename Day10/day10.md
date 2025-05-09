# Milestone 4 : Mini Project ->
Duration - 3 hours
To-Do List

# Revised react hooks ->
Duration - 1 hour

# Target 5 : Intermediate react and routing

## Misiion 15 : Advance hooks and forms

## Controlled vs Uncontrolled Components
Duration - 30 min
### Controlled Components
- Form data controlled by React state
- Uses `useState` hook to manage input values
- Changes handled through `onChange` events
- React is the "single source of truth"

**Example:**
```jsx
const ControlledInput = () => {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```

#### Advantages
- Predictable data flow
- Immediate access to input value
- Easy form validation
- Better control over user input

### Uncontrolled Components
- Form data handled by the DOM itself
- Uses `useRef` hook to access values
- Values retrieved directly from DOM
- DOM is the "source of truth"

**Example:**
```jsx
const UncontrolledInput = () => {
  const inputRef = useRef();
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  
  return (
    <input ref={inputRef} />
  );
};
```

#### Advantages
- Simpler implementation
- Good for basic forms
- Better with third-party DOM libraries
- Less code for simple scenarios

### When to Use Each

**Use Controlled Components when:**
- Need immediate field validation
- Need to enforce input format
- Implementing conditional rendering
- Building dynamic forms

**Use Uncontrolled Components when:**
- Building simple forms
- Integrating with third-party libraries
- Handling file inputs
- Performance is a concern

## Building Forms in React
Duration -> 1 hour
### Basic Form Handling
- Forms allow users to interact with web applications
- React provides two approaches: Controlled and Uncontrolled components
- Common form elements: `<input>`, `<textarea>`, `<select>`

### Capturing Input Data

#### 1. Using State (Controlled Components)
```jsx
const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
};
```

#### 2. Form Submission
- Always prevent default form submission with `e.preventDefault()`
- Handle form submission through a function
- Validate data before submission
- Clear form after submission if needed

### Best Practices
- **Form Validation**:
  - Client-side validation for immediate feedback
  - Server-side validation for security
  - Display error messages clearly

- **Error Handling**:
  ```jsx
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  ```

- **Multiple Input Types**:
  ```jsx
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}
    />
    
    <select
      name="category"
      value={formData.category}
      onChange={handleChange}
    >
      <option value="">Select...</option>
      <option value="A">Category A</option>
      <option value="B">Category B</option>
    </select>

    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
    />
  </form>
  ```

### Advanced Form Features

#### 1. File Uploads
```jsx
const FileUploadForm = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
  };

  return (
    <input 
      type="file" 
      onChange={handleFileChange}
      accept=".jpg,.png,.pdf"
    />
  );
};
```

#### 2. Form Libraries
- **Popular Options**:
  - Formik: Complete form solution
  - React Hook Form: Performance focused
  - Yup: Schema validation

#### 3. Common Patterns
- Loading states during submission
- Disable submit button when invalid
- Show success/error messages
- Clear form after successful submission

```jsx
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    await submitForm(formData);
  } catch (error) {
  } finally {
    setIsSubmitting(false);
  }
};
```
