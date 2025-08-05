export default function Users() {
  return (
    <div className="p-3 flex gap-3 ">
      
    </div>
  );
}

export function User({ userImg, msgTime, userName, lastMsg }) {
  return (
    <div className="p-4 rounded border border-gray-300 flex gap-3 ">
      <img src={userImg} alt="UserImg" />
      <div className="info">
        <div>
          <h3>{userName}</h3>
          <span>{msgTime}</span>
        </div>
        <p>{lastMsg}</p>
      </div>
    </div>
  );
}

