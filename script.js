document.getElementById('btn').addEventListener('click', async () => {
	let text = document.getElementById('text').value;
    let delay = document.getElementById('delay').value;
    
        let myPromise = new Promise ((res) => {
            setTimeout(() => {
                res(text);
            } , delay)
            
        });
        let resolve = await myPromise;
        document.getElementById('output').innerText = resolve;
    
    
});