window.addEventListener('scroll', function(){
    console.log('Are we there yet?');
    const scrollOffset = window.scrollY;
    const browserViewHeight = window.innerHeight;
    //const documentHeight = document.body.clientHeight
    //const totalAmountScrolled = scrollOffset + browserViewHeight
    console.log(scrollOffset)
    if (scrollOffset >= 200){
        document.querySelector("div:nth-of-type(2)").classList.add("box");

    }
   })



   window.addEventListener('scroll', function(){
    console.log('Are we there yet?');
    const scrollOffset = window.scrollY;
    const browserViewHeight = window.innerHeight;
    //const documentHeight = document.body.clientHeight
    //const totalAmountScrolled = scrollOffset + browserViewHeight
    console.log(scrollOffset)
    if (scrollOffset >=    1600){
        document.querySelector("div:nth-of-type(4)").classList.add("box");

    }
   })