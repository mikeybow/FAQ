document.querySelectorAll(".faq").forEach((faq) => faq.addEventListener("click", () => {
    if(faq.parentNode.classList.contains("active")) {
        faq.parentNode.classList.toggle("active")
    }
    else{
        document.querySelectorAll(".faq").forEach(faq => faq.parentNode.classList.remove("active"))
        faq.parentNode.classList.add("active")
    }
}));