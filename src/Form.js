import React, {useState} from "react";

function Form() {
  const [username, setUsername] = useState("Unnamed")
  const [motto, setMotto] = useState()
  const [level, setLevel] = useState("")

  const usernameTrack = (e) => {
    setUsername(e.target.value)
  }
  const mottoTrack = (e) => {
    setMotto(e.target.value)
  }
  const levelTrack = (e) => {
    setLevel(e.target.value)
  }

  const styles = {
    display: "flex",
    flexDirection: "column"
  }

  return (
    <>
      <form style={styles}>
        <label>
          <input value={username} type="text" placeholder="Unnamed" onChange={usernameTrack}/>
        </label>

        <label>
          <textarea value={motto} placeholder="Today Motto's" rows={4} cols={25} onChange={mottoTrack}/>
        </label>

        <label>Level: &nbsp;
          <select onChange={levelTrack}>
            <option value="">Select Level</option>
            <option value="Executive">Executive</option>
            <option value="Specialist">Specialist</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Worker">Worker</option>
          </select>
        </label>

      </form>
      <p>Good Morning, {level} {username}</p>
      <div>
        <h2>MOTD</h2>
        <p className="motto-live">{motto}</p>
      </div>
    </>
  )
}

export default Form;