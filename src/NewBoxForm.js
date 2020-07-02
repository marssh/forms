import React, {useState} from 'react';


export function NewBoxForm({ addItem }) {
  const initialState = { backgroundColor: '', width: 0, height: 0 };
  const [formData, setForm] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    addItem(formData);
    setForm(initialState);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(data => ({ ...data, [name]: value }));
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color</label>
      <input name="backgroundColor" id="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
      <label htmlFor="width">Width</label>
      <input name="width" id="width" value={formData.width} onChange={handleChange} />
      <label htmlFor="height">Height</label>
      <input name="height" id="height" value={formData.height} onChange={handleChange} />
      <button>Send</button>
    </form>
  )
}