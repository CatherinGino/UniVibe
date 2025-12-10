const loginUniversity = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);

    window.location.href = "university-dashboard.html";
  } catch (err) {
    alert("Login failed");
  }
}
