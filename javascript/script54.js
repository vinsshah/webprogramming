// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "TEST STARTED!";

      if (name === "vins") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " Vins is a Boy? ";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);
