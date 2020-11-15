let showGator = (gatorNum) => {
    for(let i = 0; i < gatorNum; i++) {
        document.getElementById("bbox").innerHTML += "🐊";
    };
}

const gatorBtn = document.getElementById("gator-btn");
gatorBtn.addEventListener("click", function() {
    let gatorNum = document.getElementById("input-number").value;
    showGator(gatorNum);
});