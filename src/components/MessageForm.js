import React from "react";
import {GrSend,GrUpload} from 'react-icons/gr'
const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <label htmlFor="img">
        <GrUpload style={{fontSize:'1.2rem'}}/>
      </label>
      <input
        onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-send">
          <GrSend/>
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
