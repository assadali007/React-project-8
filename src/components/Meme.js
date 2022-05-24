import memesData from "../memesData";
import React from 'react';


export default function Meme() {


    const [meme,setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImage,setAllMemeImages] = React.useState([])
   //console.log(allMemeImage) // object
    console.log("component run")
/*
 /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
/*
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
 */

    React.useEffect(() => {
      console.log("effect run")
     fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemeImages(data.data.memes))
 },[])



    function getMemeImage()  {

       const memesArray = allMemeImage // array
      //  console.log(memesArray)

        const randomNumber =  Math.floor(Math.random() * memesArray.length)

    //    console.log(randomNumber)  // random array number

        const url = memesArray[randomNumber].url

       // console.log(url)  // image properties

        setMeme(prestate =>({
            ...prestate,
               randomImage : url
        }))


    }
    function handleChange(event) {
       const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] :  value
        }))
    }
    return (
        <main >
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name= "topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}

                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
)

}