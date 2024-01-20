//toggel & resposive Navigasion
const navSlide =() =>{
    const burger= document.querySelector(".burger")
    const navList= Document.querySelector(".nav")
}


//clearm form before unload
Window.onbeforeunload = () =>{
    for (const form of document.getElementsByTagName("form")){
        form.reset ();
    }
};
