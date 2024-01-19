// ------------------------------------------------------------
// APOD
// ------------------------------------------------------------

async function fetchAndSetAPOD() {
    const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=0KIxUyg5dB8eaMjPtsZ5ARfWfQEs0h8I6Y0b9ST5"; 
    // Replace YOUR_API_KEY with your actual API key
  
    
    const response = await fetch(apodUrl);
    const data = await response.json();
    console.log(data)
    const apodImageUrl = data.url;
    const apodImage = document.getElementById("apod-img");
    const apodPara = document.getElementById("apod-para");
    const apodTitle = document.getElementById("apod-title");
  
    if (apodImage) {
        apodImage.src = apodImageUrl;
        apodImage.alt = data.title; 
        apodTitle.innerText = data.title;

        let words = data.explanation.split(' ');
        
        if (words.length > 80) {
            // Truncate the text to 80 words
            var truncatedText = words.slice(0, 80).join(' ');

            // Create a span element for the truncated text
            var truncatedSpan = document.createElement('span');
            truncatedSpan.textContent = truncatedText;

            // Create a span element for the ellipsis
            var ellipsisSpan = document.createElement('span');
            ellipsisSpan.textContent = '...';

            // Create an anchor tag for "Read More"
            var readMoreLink = document.createElement('a');
            readMoreLink.href = '#'; // You can set the actual link here
            readMoreLink.textContent = 'Read More';
            readMoreLink.addEventListener('click', function () {
                // Replace the truncated text with the full text
                paragraphElement.innerHTML = apiResponse;
            });

            // Append the elements to the paragraph
            apodPara.innerHTML = '';
            apodPara.appendChild(truncatedSpan);
            apodPara.appendChild(ellipsisSpan);
            apodPara.appendChild(readMoreLink);
        } else {
            apodPara.textContent = data.explanation;
        }
    }
}
  
// Call the function to fetch and set the APOD
fetchAndSetAPOD();

function truncateText(text, wordLimit = 80) {
    words = text.split(" ");
    if (words.length <= wordLimit) {
        return text;
    } else {
        let truncatedText = words.slice(0, wordLimit).join(" ") + "...";
        const readMore = document.createElement('a');
        readMore.innerText = "Read More"
        readMore.addEventListener('click', () =>{
            // action
        })
        
        return truncatedText;
    }
}

// ------------------------------------------------------------
// EVENTS
// ------------------------------------------------------------


  