import React from 'react'
import Gif from '../../components/Gif'
import gifs from '../../data/gifs'

// const gif = {
//     id: '4HrBfVJJveBNS9ytSk',
//     title: 'Nintendo Plotting GIF by Gaming GIFs',
//     uploadedDate: '2018-04-03 15:21:50',
//     url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
//     webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
//   }


export default function Home(){
    return (
        <div>
            <form className="form-search">
                <input type="text" placeholder="Search" className="form_search__input" required/>
                <button type="submit" className="form-search__button">Search</button>
            </form>

        <div className="gifs">
            {gifs.map((gif) => (
                <React.Fragment key={gif.id}>
                    {gif.rating === 'e' && (
                         <Gif 
                         // key={gif.id}
                         url={gif.url}
                         title={gif.title}
                     />
                    )}
            </React.Fragment>
            ))}
        </div>
        </div>
    )
}