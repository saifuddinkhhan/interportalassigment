const internName = localStorage.getItem("internName");
document.getElementById("internName").textContent = internName;

fetch(`http://localhost:5000/api/user/${internName}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("referralCode").textContent = data.referralCode;
    document.getElementById("donations").textContent = data.donations;

    const rewardsList = document.getElementById("rewardsList");
    data.rewards.forEach(reward => {
      const li = document.createElement("li");
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  })
  .catch(() => {
    document.querySelector(".dashboard-container").innerHTML = "<p>User not found. Go back to <a href='index.html'>login</a>.</p>";
  });
