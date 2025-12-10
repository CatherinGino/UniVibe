import { auth, db } from "./firebase-init.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { setDoc, doc,} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const signupUniversity = async () => {
  const uname = document.getElementById("uname").value;
  const location = document.getElementById("location").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const user = await createUserWithEmailAndPassword(auth, email, pass);

    await setDoc(doc(db, "universities", user.user.uid), {
      name: uname,
      location: location,
      role: "university",
    });

    alert("University account created");
    window.location.href = "university-dashboard.html";
  } catch (err) {
    alert(err.message);
  }
};
