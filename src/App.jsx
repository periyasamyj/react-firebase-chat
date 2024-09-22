import List from "./component/list/list"
import Chats from "./component/chats/chats"
import Details from "./component/detail/Details"
const App = () => {
  return (
    <div className='container'>
      <List />
      <Chats />
      <Details />
    </div>
  )
}

export default App