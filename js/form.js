function login(e){
  
  var username = document.querySelector('.username').value;
  var email = document.querySelector('.email').value;
  var password = document.querySelector('.password').value;
 
  var user = sessionStorage.getItem('user');
  var data = JSON.parse(user);
  if(username == null || email == null || password == null){
    alert("Vui long nhap day du thong tin")
  }
  else if(username == data.username && email == data.email && password == data.password){
    alert('dang nhap thanh cong');
    window.location.assign("index.html")
  }
  else{
    alert('Tai khoan hoac mat khau khong chinh xac')
  }
}
