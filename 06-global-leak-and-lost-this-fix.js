function createUserProfile() {
  // Kept inside the function so it never leaks onto the global object
  // (a top-level var here would create window.userName in a browser).
  const userName = "guest";

  const userProfile = {
    userName: "admin",
    showProfile() {
      console.log(this.userName);
    },
  };

  return { userProfile, defaultName: userName };
}

const { userProfile } = createUserProfile();

// Wrapped in an arrow function so showProfile is called as userProfile.showProfile();
// passing the bare method reference would detach it and lose its this binding.
setTimeout(() => userProfile.showProfile(), 1000);
