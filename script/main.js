let user = JSON.parse(localStorage.getItem('user')) || null
if (user) {

    document.getElementById('navbar').innerHTML =
        `
    <a href='index.html'><h1>RUMAH</h1> </a>
    <ul>
           
            <a href="about.html">
                <li>About</li>
            </a>

            <a href="profile.html">
                <li>Profile</li>
            </a>
            <a href="edit.html">
                <li>Edit</li>
            </a>
            <a>
                <li id="logout" onclick="Logout()">Logout</li>    
            </a>

     </ul>   
`
}
else {
    document.getElementById('navbar').innerHTML =
        `
<a href='index.html'> <h1>RUMAH</h1> </a>
<ul>
        <a href="login.html">
            <li>Login</li>
            </a>
        <a href="signup.html">
             <li>Signup</li>
        </a>
        <a href="about.html">
            <li>About</li>
            </a>
             
`

}



document.getElementById('footer').innerHTML = `

  <div>
            <h3>Contact Informatio</h3>
            <ul>
                <li>ADDRESS</li>
                <li>DOMAIN 5, FLOOR 6TH 13-02,
                    JALAN FUAN 2,
                    CYBERJAYA, MALAYSIA,
                </li>
                <li>PHONE: +60171801323</li>
            </ul>
        </div>
        <div>
            <h3>INTERNATIONAL&nbsp;BRANCH</h3>
            <ul>
                <li>BANGLADESH
                    MALAYSIA</li>
            </ul>
        </div>
        <div>
            <h3>FOLLOW US</h3>
            <ul>
                <li>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                </li>
            </ul>
        </div>
`



const Logout = () => {
    localStorage.clear("user");
    window.location.href = 'index.html';
}