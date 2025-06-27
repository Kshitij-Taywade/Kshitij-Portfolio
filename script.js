// alert("Kshitij Says ., \n  For mobile user , If you want to see the certificates then first you need to copy the certificate text then two option is open , then you choose any one from two option and see which certificate you want to see.")


let certificate = document.querySelector("#certificate");
let certificateDiv = document.querySelector(".certificates-div");
certificate.addEventListener("click", () => {
    certificateDiv.style.display = "block";
})