import axios from "axios";
 
function Api() {
  const [request, setRequest] = useState();
  const [details, setDetails] = useState([]);
 
  return (
    <div className="App">
      <button>GET</button> &nbsp;
      <button>POST</button> &nbsp;
      <button>PUT</button>&nbsp;
      <button>DELETE</button> &nbsp;
      <hr />   
    </div>
  );
}
 
export default Api;