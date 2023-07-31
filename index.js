// mouse track
const teams = document.querySelectorAll('.Team');

teams.forEach(team => {
  team.addEventListener('mousemove', (e) => {
    const containerRect = team.getBoundingClientRect();
    const xAxis = ((containerRect.width / 2) - (e.pageX - containerRect.left)) / 5;
    const yAxis = ((containerRect.height / 2) - (e.pageY - containerRect.top)) / 5;

    team.style.transform = `perspective(500px) rotateX(${yAxis}deg) rotateY(${xAxis}deg) scale(1.2)`;


  // Reduce opacity of the other images
  teams.forEach(otherTeam => {
    if (otherTeam !== team) {
      otherTeam.style.opacity = '0.6'; // Adjust the opacity value as needed
    }
  });
});

team.addEventListener('mouseleave', () => {
    // Reset transformation and opacity when leaving the hover state
    team.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    teams.forEach(otherTeam => {
      otherTeam.style.opacity = '1';
    });
  });
});

window.onscroll = function() {
    var title = this.document.getElementById("Background");
    var scrollTop = document.documentElement.scrollTop * 0.5;
    title.style.transform = "translateX(-" + scrollTop + "px) translateY(-" + scrollTop + "100px)";
};  