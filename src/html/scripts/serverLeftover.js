
    url = "http://localhost:3000/leftovers";
    diaryInfo = fetch(url);
    result = await diaryInfo.json();
    document.getElementById("out").innerHTML = result.stringify(json);
