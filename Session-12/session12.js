
      /// up down then click
      
      
      function greeting() {
        return console.log("Hello Js World !!");
      }
      let save = document.getElementById("save");
      let clickBtn = document.getElementById("clickMe");
      // save.addEventListener("click", greeting);
      save.onclick = greeting;
    
      let count = 0;


      function choisirColeur() {
        count++;
        clickBtn.style.backgroundColor = "green";
        if (count >= 3) {
            // remove eventlistener
          save.removeEventListener("mouseover", choisirColeur);
        }
      }
      save.addEventListener("mouseover", choisirColeur);
      save.addEventListener("mouseout", () => {
        clickBtn.style.backgroundColor = "gray";
      });
      // while holding
      clickBtn.addEventListener("mousedown", () => {
        console.log("down");
        save.style.backgroundColor = "rosybrown";
      });
      // when letting go
      clickBtn.addEventListener("mouseup", () => {
        console.log("Up");
        save.style.backgroundColor = "aqua";
      });
      clickBtn.addEventListener("click", () => {
        console.log("click");
        save.style.backgroundColor = "red";
      });
      //double click
      clickBtn.addEventListener("dblclick", () => {
        console.log("double Click");
      });
