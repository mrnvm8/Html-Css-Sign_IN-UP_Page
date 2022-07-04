function openPage(evt, PageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(PageName).style.display = "block";
  evt.currentTarget.className += " active";
}

function clickSign(){
  //getting
  var tab = document.getElementById('defaultOpen');
  if(tab ){
   tab.click();
  }
}
