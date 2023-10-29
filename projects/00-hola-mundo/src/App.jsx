
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

const users = [ 
  {id:1, userName: 'holabeats', name:'hola beats', initialIsFollowing: false},
  {id:2, userName: 'theblackviolet', name:'the black violet', initialIsFollowing: true},
  {id:3, userName: 'mrTest', name:'Mr Test', initialIsFollowing: false},
]

  const format = (userName) => `@${userName}`
  
  return (
    <section className='App'>
    {
      users.map(({id, userName, name, initialIsFollowing}, index) =>(
        <TwitterFollowCard 
            key={index}
            formatUserName={format}  
            userName={userName}
            initialIsFollowing={initialIsFollowing}>
              {name}
          </TwitterFollowCard>  
      ))
    } 
    </section>
  )
}




