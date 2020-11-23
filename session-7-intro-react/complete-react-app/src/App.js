import './App.css';

import InstaPost from './InstaPost';

import jungkook from './images/jungkook.png'
import iuWithBun from './images/iu.jpg';
import iuCute from './images/iu-cute.png';
import iuFunny from './images/iu-funny.jpg';

const posts = [
  {
    accountName: 'eug.lo',
    image: jungkook,
    caption: 'wow stan jungkook'
  },
  {
    accountName: 'jowody_lin',
    image: iuWithBun,
    caption: 'i wanna be the bun she is holding.'
  },
  {
    accountName: 'not_jody8',
    image: iuCute,
    caption: 'why is she literally so perfect'
  },
  {
    accountName: 'defNotJody719',
    image: iuFunny,
    caption: '<3 <3 <3'
  }
]

function App() {
  return (
    <div className="App">
      {
        posts.map(post => 
          <InstaPost 
            accountName={post.accountName} 
            image={post.image} 
            key={post.accountName} 
            caption={post.caption}
          />
        )
      }
    </div>
  );
}

export default App;
