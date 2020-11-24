import './App.css';

import InstaPost from './components/InstaPost';

import jungkook from './images/jungkook.png'
import iuWithBun from './images/iu-bun.jpg';
import iuCute from './images/iu-cute.png';
import iuFunny from './images/iu-funny.jpg';

const posts = [
  {
    accountName: 'eug.lo',
    image: jungkook,
    caption: 'wow stan jungkook',
    altDescription: 'jungkook in a white hoodie'
  },
  {
    accountName: 'jowody_lin',
    image: iuWithBun,
    caption: 'steamed buns!',
    altDescription: 'IU holding a steamed bun'
  },
  {
    accountName: 'not_jody8',
    image: iuCute,
    caption: 'why is she literally so perfect',
    altDescription: 'IU in a green sweater'
  },
  {
    accountName: 'defNotJody719',
    image: iuFunny,
    caption: '<3 <3 <3',
    altDescription: 'IU making a funny face'
  }
]

function App() {
  return (
    <div className="App">
      {
        posts.map(post => {
          return <InstaPost 
            accountName={post.accountName} 
            image={post.image} 
            caption={post.caption}
            altDescription={post.altDescription}
            key={post.accountName} 
          />
        })
      }
    </div>
  );
}

export default App;
