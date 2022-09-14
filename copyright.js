let copyRightMessage = "By <a href='https://github.com/yemaster' style='black'>yemaster</a>."
let copyRightEle = document.createElement("p")
copyRightEle.style.position = "absolute"
copyRightEle.style.right = "20px"
copyRightEle.style.bottom = "10px"
copyRightEle.innerHTML = copyRightMessage
document.body.appendChild(copyRightEle)
//if (location.search.indexOf("leezeyo") == -1)
//document.body.innerHTML = "<h1>认真学习!!</h1>"

document.addEventListener("keydown", function (e) {
    if (e.code == "Numpad8" && typeof(returnBack) == "function")
        returnBack(2)
})