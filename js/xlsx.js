/**
 * Custom lightweight Excel Data Exporter for Profile Data
 */
function exportProfileDataToExcel() {
  const profileData = [
    ["Category", "Details"],
    ["Name", "Puppireddy Vishwateja"],
    ["Role", "Full-Stack Developer & AI Specialist"],
    ["Email", "vishwatejapuppireddy@gmail.com"],
    ["Phone", "+91 93462 13690"],
    ["Education", "B.Tech CSE (AI&ML) - Vaagdevi College of Engineering (9.2 CGPA)"],
    ["Experience", "Full Stack Developer at SITER Academy, Norway"],
    ["Key Skills", "Python, JavaScript, C#, ASP.NET Core, Azure Custom Vision, Streamlit"]
  ];

  let csvContent = "data:text/csv;charset=utf-8,";
  profileData.forEach(row => {
    csvContent += row.map(e => `"${e}"`).join(",") + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Puppireddy_Vishwateja_Profile.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
