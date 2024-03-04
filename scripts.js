/**
* Fetches the view count from an API endpoint and updates the HTML element with the id "current-count" with the retrieved count.
* @async
* @function fetch_viewcount
* "current-count" Injects JSON API response into viewcount container.
*/
async function fetch_viewcount() {
    try {
      // Fetch data from the API endpoint
      const response = await fetch("https://43uub5rsi5.execute-api.us-east-1.amazonaws.com/tutorials/");
      // Parse response JSON
      const responseJSON = await response.json();
      // Update HTML element with the retrieved count
      document.getElementById("current-count").innerHTML = responseJSON;
    } catch (error) {
        console.error("Error fetching view count:", error);
        // Set responseJSON to "9001" if request fails
        const responseJSON = "9001";
        // Update HTML element with the default count (It's over 9000)
        document.getElementById("current-count").innerHTML = responseJSON;
    }
  }
  
  // Call the fetch_viewcount function when the script is executed
  fetch_viewcount();