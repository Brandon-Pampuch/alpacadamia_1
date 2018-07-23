document.getElementById("myBtn").addEventListener("click", displayDate);

            function displayDate() {
                document.getElementById("demo").innerHTML = "works" + Date();
            }