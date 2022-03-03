import { useState } from "react";
import homeImg from "../assets/home.png";

const Home = () => {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);   

    const goTo = () => {
        window.open(`https://${shortUrl}`);
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText(shortUrl)
        alert('Url Copied!')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const payload = {generator: "owo",
        link: url,
        owoify: true,
        preventScrape: false,}
    
        fetch('https://owo.vc/generate', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
              } 
              return res.json();
        }).then(data => {
            setIsPending(false);
            setShortUrl(data.result);        
           console.log(data)
          })
        .catch(err => {
            setIsPending(false);
            setIsError(true)
            setShortUrl(err.message)
              console.log('fetch aborted')            
          })
      }

    return ( 
        <div className="home flex md:flex-row flex-col justify-between items-start">
            <div>
                <div className="md:mb-10 mb-6">
            <h1 className="mb-4">POWERFUL <span style={{color: '#07CA9A'}}>&</span><br className="md:block hidden"></br> SIMPLE <span style={{color: '#07CA9A'}}>LINK</span></h1>
            <p className="caption">Create and share trusted,<br className="md:block hidden"></br> powerful short links</p>

                </div>
                <div>
            <form onSubmit={handleSubmit} className="flex justify-between py-3 pl-5 pr-3 bg-white rounded-lg">
            <input 
            type="text" 
            required 
            placeholder="Shorten your link"
            value={url}
            style={{width: '67%'}}
            onChange={(e) => setUrl(e.target.value)}
            />
        
        { isPending && <button className="btnSubmit" disabled={true}>Shorten...</button>}
        { !isPending && <button className="btnSubmit" disabled={url.length === 0}>Shorten</button>}
      </form>
                </div>
               { isPending && <div className="result">
                    <p className="mb-3">Please wait...</p>
                </div>}
               { shortUrl && !isPending && <div className="result">
                    <p className="mb-3">Here's the result</p>
                    <div className="flex flex-row items-center">
                    <button disabled={isError} className="mr-4" onClick={goTo}>{shortUrl}</button>
                  <a  className="cursor-pointer" onClick={copyClipboard}><svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2H19C21.2091 2 23 3.79086 23 6V21C23 22.8638 21.7252 24.4299 20 24.874V26C20 26.3158 19.9756 26.6259 19.9286 26.9286C22.8013 26.4823 25 23.9979 25 21V6C25 2.68629 22.3137 0 19 0H11C8.0021 0 5.51773 2.19865 5.07141 5.07142C5.37405 5.0244 5.68417 5 5.99999 5H7.12601C7.57005 3.27477 9.13615 2 11 2Z" fill="#212B4E"/>
<rect x="1" y="6" width="18" height="25" rx="5" stroke="#212B4E" stroke-width="2"/>
</svg>
</a>
                    </div>
                   
                </div>}
            </div>
            <div className="md:block hidden">
            <img src={homeImg} className="App-Home" alt="logo" />
            </div>
            
        </div>
     );
}
 
export default Home;