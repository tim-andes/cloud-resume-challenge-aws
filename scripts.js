async function fetch_viewcount() {
    const response = await fetch("https://43uub5rsi5.execute-api.us-east-1.amazonaws.com/tutorials/")
      .then((response) => response.json())
      .then((responseJSON) => {
        document.getElementById("current-count").innerHTML = responseJSON;
      });
  }
  fetch_viewcount();