const url = "https://kontests.net/api/v1/all";
const buton = document.getElementById("submit");
buton.addEventListener("click", function (event) {
  event.preventDefault;
  const result = document.getElementById("active");
  if (result.checked) {
    let m = fetch(url)
      .then((Response) => Response.json())
      .then((res) => {
        res.map((data) => {
          var obj = {
            //...data,
            name: data.name,
            url: data.url,
            start_time: data.start_time,
            end_time: data.end_time,
            duration: data.duration / 60,
            site: data.site,
            in_24_hours: data.in_24_hours,
            status: data.status,
          };
          if (data.status === "CODING") {
            details(obj);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    function details({
      name,
      url,
      start_time,
      end_time,
      duration,
      site,
      in_24_hours,
      status,
    }) {
      var num = duration;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);

      var root = document.getElementById("root");
      root.innerHTML += `<div class="container">
        <table>
        
        <th class ="head">Name</th>
        <th class ="head">Join Contest</th>
        <th class ="head">Start Time</th>
        <th class ="head">End time</th>
        <th class ="head">Duration</th>
        <th class ="head">Site</th>
        <th class ="head">In 24 Hours</th>
        <th class ="head">Status</th>
    
    <tr class="data">
              <td>${name}</td>
              <td><a href="${url}">Click </a></td>
              <td>${start_time}</td>
              <td>${end_time}</td>
              <td>${rhours} Hrs ${rminutes}Min</td>
              <td>${site}</td>
              <td>${in_24_hours}</td>
              <td>${status}</td>
     </tr>
        
        </table>


    </div>`;
    }
  } else {
    event.preventDefault();
    let m = fetch(url)
      .then((Response) => Response.json())
      .then((res) => {
        res.map((data) => {
          var obj = {
            //...data,
            name: data.name,
            url: data.url,
            start_time: data.start_time,
            end_time: data.end_time,
            duration: data.duration / 60,
            site: data.site,
            in_24_hours: data.in_24_hours,
            status: data.status,
          };

          details(obj);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    function details({
      name,
      url,
      start_time,
      end_time,
      duration,
      site,
      in_24_hours,
      status,
    }) {
      var num = duration;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);

      var root = document.getElementById("root");
      root.innerHTML += `<div class="container">
        <table>
        
        <th class ="head">Name</th>
        <th class ="head">Join Contest</th>
        <th class ="head">Start Time</th>
        <th class ="head">End time</th>
        <th class ="head">Duration</th>
        <th class ="head">Site</th>
        <th class ="head">In 24 Hours</th>
        <th class ="head">Status</th>
    
    <tr class="data">
              <td>${name}</td>
              <td><a href="${url}">Click </a></td>
              <td>${start_time}</td>
              <td>${end_time}</td>
              <td>${rhours} Hrs ${rminutes}Min</td>
              <td>${site}</td>
              <td>${in_24_hours}</td>
              <td>${status}</td>
     </tr>
        
        </table>


    </div>`;
    }
  }
});
