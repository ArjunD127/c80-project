var album = [
    "https://www.bing.com/th?id=OIP.IwCTnXl0kLLBAARyI-uE4AAAA&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://th.bing.com/th/id/OIP.1nldjUe28wpXl5uq3lYtVwHaHa?w=176&h=180&c=7&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.ySUPIZk7BA8xv0UoADJyxwHaHf?w=165&h=180&c=7&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.fGrAxzw0JYY55CJJ3Lc5uAHaH1&w=192&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.9ufvWbPoIAeBUzwfuovDOAHaHa&w=203&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  ];
  
  var family_names = ["my family", "me", "my sister", "my mom", "my dad"];
  
  var i = 0;
  function update() {
    if (i == 5) {
      i = 0;
    }
  
    document.getElementById("album").inerHTML = album[i];
    document.getElementById("album").src = album[i];
    i++;
  
    document.getElementById("family_names").inerHTML = family_names[i];
    document.getElementById("family_names").src = family_names[i];
    i++;
  }
  