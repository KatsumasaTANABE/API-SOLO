
    url = "http://localhost:3000/genres";
    diaryInfo = fetch(url);
    result = await diaryInfo.json();
    document.getElementById("out").innerHTML = result.stringify(json);
