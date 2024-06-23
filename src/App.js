import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("pdf", pdf);

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formData,
        {
          Headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert("error while submittion");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Pdf file</label>
        <input type="file" onChange={(e) => setPdf(e.target.files[0])} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
