function showNextHomeImage() {
  clearInterval(interval.home);
  clearTimeout(timeout.home);
  timeout.home = setTimeout(startHomeIteration(), 10000);
  showNextImage('home')
}

window.interval = {
  home: null,
}
window.timeout = {
  home: null,
}